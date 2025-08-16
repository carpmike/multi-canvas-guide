import * as React from "react"
import { cn } from "@/lib/utils"

interface ScreenTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const ScreenTitle = React.forwardRef<HTMLHeadingElement, ScreenTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "font-display text-4xl md:text-5xl font-bold text-primary text-center mb-6 leading-tight",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }
)
ScreenTitle.displayName = "ScreenTitle"

export { ScreenTitle }