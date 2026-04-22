import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: 'A modern portfolio with 3D hero, animations, and a clean black & yellow theme.',
    tags: ['React', 'Tailwind', 'Spline'],
    link: '#'
  },
  {
    title: 'FastAPI Starter',
    desc: 'A simple API scaffold with CORS and health checks ready to connect.',
    tags: ['FastAPI', 'Python'],
    link: '#'
  },
  {
    title: 'UI Motion Kit',
    desc: 'Reusable motion components for delightful micro-interactions.',
    tags: ['Framer Motion'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-yellow-50"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-yellow-500/20 bg-black/50 p-5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-yellow-500/10 to-transparent" />
              <h3 className="text-lg font-semibold text-yellow-100">{p.title}</h3>
              <p className="mt-2 text-sm text-yellow-200/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-xs text-yellow-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
