import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(250,204,21,0.07),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-50">About Me</h2>
          <p className="mt-4 text-yellow-200/80">
            I'm a student who loves building useful, aesthetic, and performant web apps. I enjoy solving problems, learning new technologies, and crafting delightful user experiences.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Focus',
              desc: 'Clean architecture, reusable components, and accessible interfaces with a modern touch.'
            },
            {
              title: 'Toolkit',
              desc: 'React, FastAPI, Tailwind, Framer Motion, and a growing list of tools that help ship fast.'
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-yellow-500/20 bg-black/50 p-6 text-yellow-100"
            >
              <h3 className="text-lg font-semibold text-yellow-200">{item.title}</h3>
              <p className="mt-2 text-yellow-200/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
