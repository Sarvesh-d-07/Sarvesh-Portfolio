import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { fadeUp, stagger } from "../animations/variants"
import { GitHubIcon, LinkedInIcon } from "../components/BrandIcons"
import { socials } from "../data/portfolio"

const iconMap = { Email: Mail, GitHub: GitHubIcon, LinkedIn: LinkedInIcon }

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="flex h-full flex-col">
            <motion.p variants={fadeUp} className="eyebrow">
              Contact
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl">
              Have an idea or opportunity? Let's connect.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              Open to internships, collaborations, hackathons, mentorship, and product engineering roles.
            </motion.p>

            <div className="mt-10 grid flex-1 gap-4 lg:auto-rows-fr">
              {socials.map((item) => {
                const Icon = iconMap[item.label]
                return (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-zinc-800/80 bg-[#111112]/40 p-5 transition hover:-translate-y-1 hover:border-zinc-700 hover:bg-[#111112]/70"
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-lg border border-zinc-800 bg-[#0A0A0B] text-[#8B5CF6]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-zinc-100">{item.label}</span>
                        <span className="mt-1 block break-all text-sm text-zinc-500">{item.href.replace("mailto:", "")}</span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-zinc-100" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="h-full">
            <div className="h-full rounded-2xl border border-zinc-800/80 bg-[#111112]/60 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.28)] sm:p-8">
              <form className="flex h-full flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-zinc-400">Name</span>
                    <input className="h-12 w-full rounded-lg border border-zinc-800 bg-[#0A0A0B] px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20" placeholder="Your name" />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-zinc-400">Email</span>
                    <input type="email" className="h-12 w-full rounded-lg border border-zinc-800 bg-[#0A0A0B] px-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20" placeholder="you@example.com" />
                  </label>
                </div>
                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-400">Message</span>
                  <textarea rows="6" className="min-h-40 flex-1 resize-none rounded-lg border border-zinc-800 bg-[#0A0A0B] px-4 py-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20" placeholder="Tell me about the opportunity or idea." />
                </label>
                <button
                  type="submit"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-slate-900 px-5 text-sm font-semibold text-white transition hover:border-indigo-400/40 hover:bg-slate-800 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/20"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
