import { motion } from 'framer-motion'

const arcs = [
  { d: 'M70,120 Q110,60 160,100', delay: 0 },
  { d: 'M160,100 Q200,140 170,190', delay: 2.5 },
  { d: 'M170,190 Q130,220 80,170', delay: 5 },
]

const dots = [
  { cx: 70, cy: 120 },
  { cx: 160, cy: 100 },
  { cx: 170, cy: 190 },
  { cx: 80, cy: 170 },
]

export default function ConnectionLines() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 240 240" className="w-[480px] h-[480px] opacity-25">
        {arcs.map((arc, i) => (
          <motion.path
            key={i}
            d={arc.d}
            fill="none"
            stroke="rgba(247,148,29,0.4)"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              delay: arc.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r="2.5"
            fill="#F7941D"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{
              duration: 3,
              delay: i * 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}
