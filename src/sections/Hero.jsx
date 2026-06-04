import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"
import { HeroGeometric } from "../components/ui/shape-landing-hero"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <HeroGeometric
        badge="Open to Work"
        title1="Sarvesh D"
        title2="Building Intelligent Systems for the AI Era"
        description="Developer specializing in Machine Learning APIs, workflow automation, and full-stack product engineering. Building high-throughput intelligent systems through cross-functional hackathons and verified industry internships."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/[0.58]">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5">
            日本企業で働くエンジニアを目指しています
          </span>
          <span className="rounded-full border border-violet-300/15 bg-violet-400/[0.07] px-3 py-1.5 text-violet-100/75">
            JLPT N5 合格
          </span>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5">
            N4 勉強中
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
          <a href="#projects">
            <Button>
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary">Contact Me</Button>
          </a>
        </div>
      </HeroGeometric>
    </section>
  )
}
