import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FileText, Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import { buttonVariants } from "./ui/buttonVariants"
import { cn } from "../lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300",
          scrolled
            ? "border-white/[0.12] bg-canvas-950/[0.72] shadow-soft backdrop-blur-2xl"
            : "border-white/[0.08] bg-white/[0.035] backdrop-blur-xl",
        )}
      >
        <a href="#home" onClick={close} className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.12] bg-white/[0.07] text-sm font-bold text-white">
            SD
          </span>
          <span className="text-sm font-semibold text-white transition group-hover:text-violet-100">
            Sarvesh D
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.62] transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "rounded-full")}
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-canvas-950/88 p-3 shadow-soft backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
