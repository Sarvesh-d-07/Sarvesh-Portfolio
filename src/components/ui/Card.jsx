import { cn } from "../../lib/utils"

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.045] shadow-soft backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  )
}
