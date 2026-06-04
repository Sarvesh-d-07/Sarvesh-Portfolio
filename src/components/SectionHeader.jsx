import { motion } from "framer-motion"
import { fadeUp } from "../animations/variants"

export function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mb-12"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="muted-copy mt-5 max-w-2xl">{copy}</p> : null}
    </motion.div>
  )
}
