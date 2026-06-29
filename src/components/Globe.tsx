import { motion } from 'framer-motion'

const globeNodes = [
  { cx: 120, cy: 100, r: 2.5 },
  { cx: 160, cy: 80, r: 2 },
  { cx: 180, cy: 140, r: 2.5 },
  { cx: 140, cy: 180, r: 2 },
  { cx: 90, cy: 160, r: 2.5 },
  { cx: 70, cy: 110, r: 2 },
  { cx: 150, cy: 120, r: 3 },
  { cx: 110, cy: 70, r: 2 },
]

export default function Globe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative flex items-center justify-center" style={{ transform: 'translateX(35%)' }}>
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(247,148,29,0.35) 0%, rgba(247,148,29,0) 70%)',
            opacity: 0.12,
          }}
        />
        <motion.svg
          viewBox="0 0 260 260"
          className="w-[520px] h-[520px] opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="130" cy="130" r="100"
            fill="none"
            stroke="rgba(247,148,29,0.6)"
            strokeWidth="1"
          />
          <ellipse
            cx="130" cy="130" rx="35" ry="100"
            fill="none"
            stroke="rgba(247,148,29,0.35)"
            strokeWidth="0.6"
          />
          <ellipse
            cx="130" cy="130" rx="70" ry="100"
            fill="none"
            stroke="rgba(247,148,29,0.35)"
            strokeWidth="0.6"
          />
          <ellipse
            cx="130" cy="130" rx="100" ry="28"
            fill="none"
            stroke="rgba(247,148,29,0.35)"
            strokeWidth="0.6"
          />
          <ellipse
            cx="130" cy="130" rx="100" ry="60"
            fill="none"
            stroke="rgba(247,148,29,0.35)"
            strokeWidth="0.6"
          />
          <ellipse
            cx="130" cy="130" rx="100" ry="88"
            fill="none"
            stroke="rgba(247,148,29,0.2)"
            strokeWidth="0.4"
          />
          {globeNodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#F7941D"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.svg>
      </div>
    </div>
  )
}
