import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        healthcare: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105",
        success: "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:scale-105",
        warning: "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 shadow-lg hover:shadow-xl transform hover:scale-105",
        info: "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white hover:from-cyan-700 hover:to-cyan-800 shadow-lg hover:shadow-xl transform hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        lg: "rounded-lg",
        xl: "rounded-xl",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  rounded,
  asChild = false, 
  animate = false,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  
  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
