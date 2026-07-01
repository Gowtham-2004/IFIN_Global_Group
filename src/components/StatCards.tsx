import { motion } from 'framer-motion'
import { Globe, Building2, BrainCircuit, Clock } from 'lucide-react'

const stats = [
  { value: '120+', label: 'Countries', icon: Globe },
  { value: '500+', label: 'Enterprise Clients', icon: Building2 },
  { value: 'AI', label: 'Powered Workforce', icon: BrainCircuit },
  { value: '24×7', label: 'Operations', icon: Clock },
]

export default function StatCards() {
  return (
    <div className="relative z-10 mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3 md:mt-8 lg:mt-14 short:mt-4 short:md:mt-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
            className="stat-card flex min-w-0 items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3"
          >
            <Icon size={18} className="shrink-0 text-brand/80 max-sm:size-4" />
            <div className="flex min-w-0 flex-col">
              <span className="font-heading text-xs font-bold leading-tight text-white sm:text-sm">
                {stat.value}
              </span>
              <span className="truncate font-body text-[10px] leading-tight text-white/50 sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
