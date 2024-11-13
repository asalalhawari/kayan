import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

// Import images directly
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

const slides = [
  {
    image: image1,
    title: "Welcome to Our Site",
    description: "Discover amazing experiences with us"
  },
  {
    image: image2,
    title: "Explore Our Services",
    description: "Professional solutions for your needs"
  },
  {
    image: image3,
    title: "Join Our Community",
    description: "Be part of something special"
  }
];

const FullPageCarousel = () => {
  return (
    <div className="h-screen relative">
      <Carousel className="h-full w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                {/* Background Image */}
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl max-w-2xl text-center">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 bg-white/30 hover:bg-white/50" />
        <CarouselNext className="right-4 bg-white/30 hover:bg-white/50" />
        
        {/* Optional: Custom Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default FullPageCarousel;