import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-violet-300/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black shadow-[0_12px_40px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-violet-100",
        secondary:
          "border border-white/[0.12] bg-white/[0.055] text-white hover:-translate-y-0.5 hover:border-violet-300/[0.40] hover:bg-white/[0.09]",
        ghost: "text-white/[0.72] hover:bg-white/[0.07] hover:text-white",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)
