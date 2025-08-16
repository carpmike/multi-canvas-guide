import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const guessumButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-lg font-display font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95 shadow-lg",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/30",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-secondary/30",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 shadow-tertiary/30",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        disabled: "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-base",
        lg: "h-14 px-8 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface GuessumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof guessumButtonVariants> {}

const GuessumButton = React.forwardRef<HTMLButtonElement, GuessumButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(guessumButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GuessumButton.displayName = "GuessumButton"

export { GuessumButton, guessumButtonVariants }