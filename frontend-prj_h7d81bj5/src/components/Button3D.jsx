import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Button3D = forwardRef(function Button3D(
  { children, as: As = 'a', href = '#', onClick, className = '', variant = 'primary', ...rest },
  ref
) {
  const base = 'relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold transition-all active:translate-y-[2px] select-none'
  const shadows = 'before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-200 before:-z-[1]'

  const styles = {
    primary:
      'bg-gradient-to-b from-yellow-300 to-yellow-500 text-black shadow-[0_6px_0_0_rgba(202,138,4,0.9)] hover:from-yellow-200 hover:to-yellow-400 before:shadow-[0_0_0_1px_rgba(234,179,8,0.6)]',
    outline:
      'bg-black/40 text-yellow-100 border border-yellow-500/40 shadow-[0_6px_0_0_rgba(234,179,8,0.25)] hover:bg-black/60 before:shadow-[0_0_0_1px_rgba(234,179,8,0.3)]',
  }

  return (
    <motion.div initial={{ y: -2 }} whileHover={{ y: -1 }}>
      <As
        ref={ref}
        href={href}
        onClick={onClick}
        className={clsx(base, shadows, styles[variant], className)}
        {...rest}
      >
        {/* subtle top sheen */}
        <span className="pointer-events-none absolute inset-x-1 top-0 h-1.5 rounded-t-xl bg-white/40 opacity-60" />
        {children}
      </As>
    </motion.div>
  )
})

export default Button3D
