import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Circle } from "lucide-react"
import { cn } from "../../lib/utils"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  isActive = true,
}) {
  return (
    <motion.div
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: -120,
          rotate: rotate - 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          rotate,
        },
      }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("pointer-events-none absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 13,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-r to-transparent",
            gradient,
            "border border-white/[0.12] backdrop-blur-[2px]",
            "shadow-[0_16px_70px_rgba(0,0,0,0.34)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_68%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function HeroGeometric({
  badge = "AI, Automation & Product Engineering",
  title1 = "Sarvesh D",
  title2 = "Building Intelligent Systems for the AI Era",
  description = "CSE (AI & ML) undergraduate creating practical technology across AI, automation, full-stack systems, internships, hackathons, and product-focused engineering.",
  children,
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.35 + i * 0.14,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { amount: 0.42 })
  const [isReplayVisible, setIsReplayVisible] = useState(false)

  useEffect(() => {
    let replayTimer

    if (isHeroInView) {
      setIsReplayVisible(false)
      replayTimer = window.setTimeout(() => setIsReplayVisible(true), 30)
    } else {
      setIsReplayVisible(false)
    }

    return () => window.clearTimeout(replayTimer)
  }, [isHeroInView])

  return (
    <div
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303] px-5 py-28"
    >
      <div className="absolute inset-0 bg-subtle-grid bg-[length:48px_48px] opacity-[0.16] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(139,92,246,0.16),transparent_34rem)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.045] via-transparent to-white/[0.035] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          isActive={isReplayVisible}
          delay={0.25}
          width={620}
          height={132}
          rotate={12}
          gradient="from-violet-500/[0.12]"
          className="left-[-38%] top-[16%] sm:left-[-18%] lg:left-[-5%]"
        />
        <ElegantShape
          isActive={isReplayVisible}
          delay={0.42}
          width={520}
          height={118}
          rotate={-14}
          gradient="from-white/[0.10]"
          className="right-[-42%] top-[70%] sm:right-[-18%] lg:right-[2%]"
        />
        <ElegantShape
          isActive={isReplayVisible}
          delay={0.34}
          width={330}
          height={82}
          rotate={-8}
          gradient="from-violet-300/[0.11]"
          className="bottom-[9%] left-[8%]"
        />
        <ElegantShape
          isActive={isReplayVisible}
          delay={0.52}
          width={210}
          height={60}
          rotate={20}
          gradient="from-slate-200/[0.09]"
          className="right-[18%] top-[12%]"
        />
        <ElegantShape
          isActive={isReplayVisible}
          delay={0.62}
          width={160}
          height={42}
          rotate={-25}
          gradient="from-cyan-200/[0.08]"
          className="left-[20%] top-[7%]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isReplayVisible ? "visible" : "hidden"}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2"
        >
          <Circle className="h-2 w-2 fill-violet-300 text-violet-300" />
          <span className="text-sm font-medium tracking-wide text-white/[0.62]">{badge}</span>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isReplayVisible ? "visible" : "hidden"}
        >
          <h1 className="mx-auto mb-10 max-w-5xl text-6xl font-semibold leading-tight tracking-normal text-white sm:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-b from-white to-white/[0.78] bg-clip-text text-transparent leading-tight">
              {title1}
            </span>
            <span className="mt-7 block text-2xl font-medium leading-tight text-white/[0.72] sm:text-4xl lg:text-5xl">
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isReplayVisible ? "visible" : "hidden"}
        >
          <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg">
            {description}
          </p>
        </motion.div>

        {children ? (
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isReplayVisible ? "visible" : "hidden"}
          >
            {children}
          </motion.div>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/78" />
    </div>
  )
}

export { HeroGeometric }
