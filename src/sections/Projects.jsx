import { motion } from "framer-motion"
import { ExternalLink, GitBranch } from "lucide-react"
import { SectionHeader } from "../components/SectionHeader"
import { projects } from "../data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Projects"
            title="Selected Projects & Shipments"
            copy="Production-minded builds presented as a compact engineering dashboard, with stack context visible directly inside every shipment."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#111112] shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
            >
              <div className="relative aspect-[1.42] overflow-hidden border-b border-zinc-800/80 bg-[#0A0A0B]">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-950/70 px-3 py-1 text-xs font-medium text-emerald-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
                  {"\u{1F7E2} Production"}
                </span>
              </div>

              <div className="flex flex-1 flex-col bg-[#111112] p-6">
                <p className="mb-3 font-mono text-xs text-zinc-600">{project.file}</p>
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <p className="mb-4 mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-zinc-800/80 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition hover:text-zinc-100"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition hover:text-[#8B5CF6]"
                    aria-label={`${project.title} live demo`}
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
