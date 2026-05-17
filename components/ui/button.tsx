import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative group border text-foreground text-center rounded-full inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
        solid:
          "bg-blue-500 hover:bg-blue-600 text-white border-transparent hover:border-blue-400/50 transition-all duration-200",
        ghost:
          "border-transparent bg-transparent hover:border-white/10 hover:bg-white/5",
        secondary:
          "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20",
        outline:
          "border-white/15 bg-transparent hover:bg-white/5 hover:border-white/25",
        destructive:
          "bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-400",
      },
      size: {
        default: "px-7 py-2 text-sm",
        sm: "px-4 py-1.5 text-xs",
        lg: "px-10 py-3 text-base",
        icon: "size-9",
        "icon-sm": "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  neon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, neon = true, size, variant, children, ...props }, ref) => {
    const showNeon =
      neon && variant !== "ghost" && variant !== "secondary" && variant !== "outline";

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {/* Top neon line */}
        <span
          className={cn(
            "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-400 to-transparent",
            showNeon ? "block" : "hidden"
          )}
        />
        {children}
        {/* Bottom neon line */}
        <span
          className={cn(
            "absolute group-hover:opacity-40 opacity-0 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-400 to-transparent",
            showNeon ? "block" : "hidden"
          )}
        />
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
