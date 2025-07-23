import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "src/lib/utils";

const Card = React.forwardRef(({ 
  className, 
  animate = false,
  hover = false,
  ...props 
}, ref) => {
  const baseClasses = cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    className
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={baseClasses}
        ref={ref}
        {...props}
      />
    )
  }

  if (hover) {
    return (
      <motion.div
        whileHover={{ 
          scale: 1.02, 
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.3 }}
        className={baseClasses}
        ref={ref}
        {...props}
      />
    )
  }

  return (
    <div
      className={baseClasses}
      ref={ref}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Healthcare-specific card variants
const HealthcareCard = React.forwardRef(({ 
  className, 
  variant = "default",
  animate = false,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white border-gray-200 shadow-md hover:shadow-lg",
    primary: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg",
    success: "bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg",
    warning: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg",
    info: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 shadow-lg",
    elevated: "bg-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105",
  }

  const baseClasses = cn(
    "rounded-xl border transition-all duration-300",
    variants[variant],
    className
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02, 
          y: -8,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
        }}
        transition={{ duration: 0.4 }}
        className={baseClasses}
        ref={ref}
        {...props}
      />
    )
  }

  return (
    <div
      className={baseClasses}
      ref={ref}
      {...props}
    />
  )
})
HealthcareCard.displayName = "HealthcareCard"

export {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, HealthcareCard
};
