import { useState } from 'react'
import Button3D from './components/Button3D'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || undefined,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || data.ok === false) {
        throw new Error(data?.message || 'Failed to send message')
      }
      setStatus({ loading: false, ok: true, msg: 'Thanks! Your message has been sent.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || 'Something went wrong' })
    }
  }

  return (
    <div className="min-h-screen bg-black pt-28">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(250,204,21,0.06),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-yellow-500/20 bg-black/60 p-8 backdrop-blur">
          <h1 className="text-3xl font-bold text-yellow-50">Get in touch</h1>
          <p className="mt-2 text-yellow-200/80">Have a project or just want to say hi? Fill the form and it will email me directly.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-yellow-200">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                className="rounded-xl border border-yellow-500/30 bg-black/40 px-4 py-3 text-yellow-100 placeholder:text-yellow-200/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-yellow-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="rounded-xl border border-yellow-500/30 bg-black/40 px-4 py-3 text-yellow-100 placeholder:text-yellow-200/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="subject" className="text-yellow-200">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                className="rounded-xl border border-yellow-500/30 bg-black/40 px-4 py-3 text-yellow-100 placeholder:text-yellow-200/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="What is this about? (optional)"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-yellow-200">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={onChange}
                className="rounded-xl border border-yellow-500/30 bg-black/40 px-4 py-3 text-yellow-100 placeholder:text-yellow-200/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Tell me about your idea..."
              />
            </div>

            <div className="flex items-center gap-3">
              <Button3D as="button" type="submit" disabled={status.loading}>
                {status.loading ? 'Sending…' : 'Send Message'}
              </Button3D>
              {status.ok !== null && (
                <span className={status.ok ? 'text-green-400' : 'text-red-400'}>
                  {status.msg}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
