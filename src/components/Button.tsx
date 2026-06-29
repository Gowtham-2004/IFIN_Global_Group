import { useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { type ButtonProps } from '../types'

export default function Button({
  variant = 'primary',
  children,
  onClick,
  loading = false,
  disabled = false,
  icon,
  fullWidth = true,
  type = 'button',
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
    onClick?.()
  }

  const base =
    'relative overflow-hidden rounded-[14px] font-heading font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-3'

  const variants = {
    primary:
      'bg-brand text-white hover:bg-brand-hover shadow-md hover:shadow-lg hover:shadow-brand/20',
    secondary:
      'bg-white text-[#1F2937] border border-[#E5E7EB] hover:bg-[#F8F9FB]',
    sso: 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F8F9FB] hover:text-[#1F2937]',
  }

  const heights = {
    primary: 'h-[52px]',
    secondary: 'h-[48px]',
    sso: 'h-[48px]',
  }

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${heights[variant]} ${fullWidth ? 'w-full' : ''} ${disabled || loading ? 'cursor-not-allowed opacity-60' : ''}`}
      whileHover={!loading && !disabled ? { scale: 1.02 } : undefined}
      whileTap={!loading && !disabled ? { scale: 0.98 } : undefined}
    >
      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <>
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full bg-white/30 pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 5,
                height: 5,
                animation: 'ripple 0.6s ease-out forwards',
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  )
}
