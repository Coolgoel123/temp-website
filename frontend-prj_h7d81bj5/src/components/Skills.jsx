import { motion } from 'framer-motion'
import { Code2, Server, Cpu, Rocket } from 'lucide-react'

const skills = [
  { name: 'React', level: 80, icon: Code2 },
  { name: 'FastAPI', level: 70, icon: Server },
  { name: 'Tailwind CSS', level: 85, icon: Rocket },
  { name: 'JavaScript', level: 80, icon: Cpu },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-yellow-50"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-xl border border-yellow-500/20 bg-black/50 p-5"
            >
              <div className="flex items-center gap-3">
                <s.icon className="text-yellow-300" />
                <span className="font-semibold text-yellow-100">{s.name}</span>
              </div>
              <div className="mt-4 h-2 w-full rounded bg-yellow-500/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-2 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"
                />
              </div>
              <p className="mt-2 text-sm text-yellow-200/70">Proficiency: {s.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
