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
    <div className="relative z-10 flex flex-wrap gap-3 mt-14">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
            className="stat-card px-4 py-3 flex items-center gap-3"
          >
            <Icon size={18} className="text-brand/80" />
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-sm leading-tight">
                {stat.value}
              </span>
              <span className="text-white/50 font-body text-[11px] leading-tight">
                {stat.label}
              </span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
