import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Download, ExternalLink, Medal, X } from "lucide-react"
import { fadeUp, stagger } from "../animations/variants"
import { SectionHeader } from "../components/SectionHeader"
import { certifications } from "../data/portfolio"

export function Proof() {
  const [selectedCertification, setSelectedCertification] = useState(null)

  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="VERIFIED MILESTONES"
          title="Certifications & Achievements"
          copy="A focused record of validated credentials across AI agents, geospatial analysis, and language capability."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-5xl space-y-4"
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.title}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-xl border border-zinc-800/80 bg-[#111112]/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#8B5CF6]/30 bg-[#0A0A0B] text-[#8B5CF6]">
                  <Medal className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">{certification.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">{certification.subtitle}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertification(certification)}
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-transparent px-4 text-xs font-medium text-zinc-300 transition hover:border-[#8B5CF6]/40 hover:text-zinc-100 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20"
              >
                View Certificate
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {selectedCertification ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-5 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
          onClick={() => setSelectedCertification(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#0A0A0B]/90 p-8 shadow-[0_24px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertification(null)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-zinc-800 text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-100 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20"
              aria-label="Close certificate modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#8B5CF6]/30 bg-[#111112] text-[#8B5CF6]">
              <Award className="h-7 w-7" />
            </div>
            <div className="mt-6 text-center">
              <h3 id="certificate-title" className="text-2xl font-semibold text-zinc-100">
                {selectedCertification.title}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                {selectedCertification.subtitle}
              </p>
            </div>

            <div className="mt-8 grid gap-3 rounded-xl border border-zinc-800/80 bg-[#111112]/60 p-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-500">Issuer</span>
                <span className="text-right font-medium text-zinc-200">{selectedCertification.issuer}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-500">Status</span>
                <span className="text-right font-medium text-zinc-200">{selectedCertification.date}</span>
              </div>
            </div>

            <div className={`mt-8 grid gap-3 ${selectedCertification.pdfUrl ? "sm:grid-cols-2" : ""}`}>
              <a
                href={selectedCertification.originalUrl || "#contact"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-[#111112] text-sm font-medium text-zinc-100 transition hover:border-zinc-700 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20"
              >
                View Original
                <ExternalLink className="h-4 w-4 text-[#8B5CF6]" />
              </a>
              {selectedCertification.pdfUrl ? (
                <a
                  href={selectedCertification.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-[#111112] text-sm font-medium text-zinc-100 transition hover:border-zinc-700 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20"
                >
                  Download PDF
                  <Download className="h-4 w-4 text-[#8B5CF6]" />
                </a>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  )
}
