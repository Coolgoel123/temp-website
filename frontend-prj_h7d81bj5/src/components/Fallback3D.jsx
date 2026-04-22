import { motion } from 'framer-motion'

export default function Fallback3D() {
  // Animated geometric fallback to mimic a tech 3D feel
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-black to-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <svg className="h-full w-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(250,204,21,0.35)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#glow)" />

          {/* Spinning rings */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            style={{ originX: '400px', originY: '225px' }}
          >
            <circle cx="400" cy="225" r="160" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.5" />
            <circle cx="400" cy="225" r="120" fill="none" stroke="#fde047" strokeWidth="1.5" opacity="0.3" />
            <circle cx="400" cy="225" r="80" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.2" />
          </motion.g>

          {/* Floating cubes */}
          {[60, 160, 300, 520, 700].map((x, i) => (
            <motion.rect
              key={x}
              x={x}
              y={140 + (i % 2) * 60}
              width="28"
              height="28"
              rx="6"
              fill={i % 2 ? '#fde047' : '#f59e0b'}
              initial={{ y: 140, opacity: 0.5 }}
              animate={{ y: [140, 160, 140], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}
