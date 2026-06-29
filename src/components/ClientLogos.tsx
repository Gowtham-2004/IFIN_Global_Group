import { motion } from 'framer-motion'

const companies = [
  'ACN', 'DLT', 'IBM', 'MSFT', 'ORCL', 'SAP',
  'TCS', 'WIPRO', 'ACC', 'KPMG', 'EY', 'PwC',
]

export default function ClientLogos() {
  const duplicated = [...companies, ...companies]

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex gap-5"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {duplicated.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[110px] h-[40px] rounded-xl flex items-center justify-center
                       border border-white/10 bg-white/5
                       transition-all duration-300
                       hover:bg-brand/10 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5
                       group cursor-default"
          >
            <span className="text-white/25 font-heading font-semibold text-xs tracking-wider
                           transition-colors duration-300
                           group-hover:text-brand">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
