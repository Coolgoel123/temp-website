import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button3D from './Button3D'
import Fallback3D from './Fallback3D'

let SplineComp = null

function checkWebGL() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!gl
  } catch (e) {
    return false
  }
}

export default function Hero() {
  const [canWebGL, setCanWebGL] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const supported = checkWebGL()
    setCanWebGL(supported)
    if (supported) {
      // Lazy import Spline only if WebGL is available to avoid runtime errors
      import('@splinetool/react-spline')
        .then((mod) => {
          SplineComp = mod.default
          setLoaded(true)
        })
        .catch(() => setLoaded(false))
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-200">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              Student • Coder • Learner
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-yellow-50 sm:text-5xl">
              Hi, I'm Advit — I build modern web experiences
            </h1>
            <p className="max-w-xl text-lg text-yellow-200/80">
              Passionate about clean design, interactive interfaces, and elegant code. Explore my work and the tools I love.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button3D href="#projects">View Projects</Button3D>
              <Button3D href="/contact" variant="outline">Contact Me</Button3D>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] w-full rounded-2xl border border-yellow-500/20 bg-black/50 p-2 shadow-xl"
          >
            <div className="h-full w-full overflow-hidden rounded-xl">
              {canWebGL && loaded && SplineComp ? (
                <SplineComp scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
              ) : (
                <Fallback3D />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
