import { motion } from "framer-motion"
import { HomePage } from "./pages/HomePage"

export default function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
      <HomePage />
    </motion.div>
  )
}
