import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showPortal?: boolean
}

export default function Logo({ size = 'md', showPortal = false }: LogoProps) {
  const sizes = {
    sm: { main: 'text-xl', sub: 'text-[10px]', gap: 'mt-0.5', portal: 'text-[9px]' },
    md: { main: 'text-2xl', sub: 'text-xs', gap: 'mt-0.5', portal: 'text-[10px]' },
    lg: { main: 'text-4xl', sub: 'text-sm', gap: 'mt-1', portal: 'text-xs' },
  }

  const s = sizes[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center select-none"
    >
      <div className={`${s.main} font-heading font-bold tracking-tight leading-none`}>
        <span className="text-[#1F2937]">IF</span>
        <span className="text-brand">I</span>
        <span className="text-[#1F2937]">N</span>
      </div>
      <span className={`${s.sub} ${s.gap} font-body font-medium text-[#6B7280] uppercase tracking-[0.2em]`}>
        Global Group
      </span>
      {showPortal && (
        <span className={`${s.portal} mt-1 font-body font-medium text-[#6B7280]/60 tracking-[0.15em] uppercase`}>
          Enterprise Portal
        </span>
      )}
    </motion.div>
  )
}
