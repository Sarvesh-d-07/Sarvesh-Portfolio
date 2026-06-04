import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Layers, Sparkle } from "lucide-react"

const capabilities = [
  {
    title: "Core Engineering",
    Icon: Cpu,
    accent: "#38BDF8",
    description: "Backend foundations, product interfaces, and practical engineering fluency.",
    skills: ["Python", "C++ / C", "JavaScript", "React"],
  },
  {
    title: "Applied Intelligence",
    Icon: Brain,
    accent: "#8B5CF6",
    description: "AI workflows shaped around automation, perception, and useful agents.",
    skills: ["Machine Learning", "NLP & AI Agents", "Computer Vision", "Playwright"],
  },
  {
    title: "Ecosystem & Tools",
    Icon: Layers,
    accent: "#34D399",
    description: "Tooling and platforms for shipping, collaborating, and scaling ideas.",
    skills: ["Salesforce Agentforce", "Git & GitHub", "Flutter"],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

function useDesktopLayout() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)")
    const sync = () => setIsDesktop(media.matches)

    sync()
    media.addEventListener("change", sync)

    return () => media.removeEventListener("change", sync)
  }, [])

  return isDesktop
}

function ProductSpecMatrix() {
  return (
    <motion.div
      variants={stagger}
      className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#111112]/60 p-5 shadow-2xl backdrop-blur-md sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:36px_36px] opacity-[0.08]" />
      <motion.div
        className="pointer-events-none absolute -left-20 top-16 h-52 w-52 rounded-full bg-purple-500/[0.10] blur-3xl"
        animate={{ opacity: [0.42, 0.7, 0.42], y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-4 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl"
        animate={{ opacity: [0.3, 0.48, 0.3], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200/75">
            Product Spec Matrix
          </p>
        </div>
        <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-200">
          Active
        </div>
      </div>

      <div className="relative grid gap-4">
        {capabilities.map(({ title, Icon, accent, description, skills }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-xl border border-zinc-800/70 bg-[#0D0D0E]/62 p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-[#131316]/70"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
              style={{ backgroundColor: `${accent}24` }}
            />

            <div className="relative flex items-start gap-4">
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.035]"
                style={{ color: accent, boxShadow: `0 0 28px ${accent}20` }}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h4 className="text-base font-semibold tracking-tight text-white">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium leading-6 text-zinc-300 transition duration-300 group-hover:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}

function ExperienceTimelineCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-[#111112]/40 p-5 backdrop-blur-md transition duration-300 hover:border-purple-500/25 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(139,92,246,0.12),transparent_32%)]" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-zinc-700/70 bg-[#0A0A0B]/70 text-lg font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.10)]">
            P
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              PayPal Career Academy
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">Tech Team</p>
          </div>
        </div>

        <span className="inline-flex w-fit items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-[#8B5CF6]">
          Current Focus
        </span>
      </div>

      <div className="relative mt-6 space-y-3 text-sm font-normal leading-relaxed text-zinc-400">
        <p>
          Mentorship Program &bull; Ongoing
        </p>
        <p>
          Selected for a structured mentorship program focused on technology, problem-solving, and
          real-world industry practices.
        </p>
        <p>
          Actively engaging in hands-on tasks, guided learning modules, and collaborative activities
          to strengthen technical skills.
        </p>
      </div>
    </motion.article>
  )
}

export function About() {
  const isDesktop = useDesktopLayout()

  return (
    <section id="about" className="relative overflow-hidden bg-[#030303]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(139,92,246,0.13),transparent_28rem)]" />
      <motion.div
        className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-500/[0.08] blur-3xl"
        animate={{ opacity: [0.38, 0.68, 0.38], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.22 }}
        style={
          isDesktop
            ? {
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              }
            : undefined
        }
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16"
      >
        <div style={isDesktop ? { gridColumn: "span 5 / span 5" } : undefined} className="lg:col-span-5 lg:self-end">
          <ProductSpecMatrix />
        </div>

        <motion.div
          variants={stagger}
          style={isDesktop ? { gridColumn: "span 7 / span 7" } : undefined}
          className="relative lg:col-span-7"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Building intelligent systems that automate, scale, and solve real-world problems.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-8 max-w-3xl space-y-6 text-zinc-400">
            <p className="text-base leading-8 sm:text-lg">
              I&apos;m a Computer Science Engineering (AI &amp; ML) undergraduate focused on AI
              systems, automation workflows, and product development. I enjoy transforming ideas
              into practical solutions through projects, hackathons, and hands-on engineering
              experiences.
            </p>
            <p className="mb-8 text-base leading-8 sm:text-lg">
              My interests lie at the intersection of Artificial Intelligence, software
              engineering, and scalable systems. I continuously explore new technologies and enjoy
              building products that create meaningful impact.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-purple-400/20 bg-purple-500/10">
                <Sparkle className="h-3 w-3 fill-purple-300 text-purple-300" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                LATEST EXPERIENCE
              </span>
              <span className="h-px flex-1 bg-zinc-800/80" />
            </div>

            <ExperienceTimelineCard />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
