import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { Button } from "src/components/ui/button";
import { cn } from "src/lib/utils";

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api) {
      return
    }

    setApi?.(api)
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api?.off("select", onSelect)
      api?.off("reInit", onSelect)
    }
  }, [api, onSelect, setApi])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon",
  ...props 
}, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon",
  ...props 
}, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

// Healthcare-specific carousel with enhanced styling
const HealthcareCarousel = React.forwardRef(({ 
  children, 
  className,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  interval = 5000,
  ...props 
}, ref) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [api, setApi] = React.useState()

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    if (!autoPlay || !api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, interval)

    return () => clearInterval(intervalId)
  }, [api, autoPlay, interval])

  return (
    <div className={cn("relative", className)} ref={ref} {...props}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {children}
        </CarouselContent>
        
        {showArrows && (
          <>
            <CarouselPrevious 
              className="left-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200" 
            />
            <CarouselNext 
              className="right-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200" 
            />
          </>
        )}
      </Carousel>

      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {React.Children.map(children, (_, index) => (
            <motion.button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                currentSlide === index 
                  ? "bg-blue-600 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => api?.scrollTo(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  )
})
HealthcareCarousel.displayName = "HealthcareCarousel"

export {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext, CarouselPrevious, HealthcareCarousel
};

