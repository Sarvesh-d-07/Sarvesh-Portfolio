import { Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "./BrandIcons"
import { socials } from "../data/portfolio"

const iconMap = { Email: Mail, GitHub: GitHubIcon, LinkedIn: LinkedInIcon }

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex justify-center">
        <div className="flex gap-3">
          {socials.map((item) => {
            const Icon = iconMap[item.label]
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/55 transition hover:border-violet-300/[0.35] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
