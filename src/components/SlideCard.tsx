import { motion } from 'framer-motion'
import { type Slide } from '../types'
import ClientLogos from './ClientLogos'
import StatCards from './StatCards'

function GlobeIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 200 200" className="w-96 h-96 opacity-[0.18]">
        <circle cx="100" cy="100" r="75" fill="none" stroke="#F7941D" strokeWidth="0.8" />
        <ellipse cx="100" cy="100" rx="25" ry="75" fill="none" stroke="#F7941D" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="55" ry="75" fill="none" stroke="#F7941D" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="75" ry="20" fill="none" stroke="#F7941D" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="75" ry="45" fill="none" stroke="#F7941D" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="3" fill="#F7941D" opacity="0.5" />
      </svg>
    </div>
  )
}

function NetworkIllustration() {
  const nodes = [
    { x: 100, y: 55 }, { x: 50, y: 110 },
    { x: 150, y: 110 }, { x: 75, y: 165 }, { x: 125, y: 165 },
  ]
  const connections = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 200 220" className="w-96 h-96 opacity-[0.15]">
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="rgba(37,99,235,0.3)" strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i} cx={node.x} cy={node.y} r="4"
            fill="#F7941D"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  )
}

function SecurityIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 200 200" className="w-96 h-96 opacity-10">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 25} x2="200" y2={i * 25} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`v-${i}`} x1={i * 25} y1="0" x2={i * 25} y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        ))}
        <path d="M100,35 L155,60 L155,105 Q155,140 100,160 Q45,140 45,105 L45,60 Z" fill="none" stroke="#F7941D" strokeWidth="1.2" opacity="0.5" />
      </svg>
    </div>
  )
}

function CloudIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <svg viewBox="0 0 200 200" className="w-96 h-96 opacity-[0.14]">
        {[120, 90, 60, 35].map((width, i) => (
          <rect key={i} x={(200 - width) / 2} y={35 + i * 35} width={width} height="20" rx="10" fill="none" stroke="#F7941D" strokeWidth="0.6" />
        ))}
        <path d="M100,35 L100,15" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

const illustrations: Record<string, React.ReactNode> = {
  globe: <GlobeIllustration />,
  network: <NetworkIllustration />,
  security: <SecurityIllustration />,
  cloud: <CloudIllustration />,
}

interface SlideCardProps {
  slide: Slide
  isActive?: boolean
}

export default function SlideCard({ slide, isActive = false }: SlideCardProps) {
  return (
    <div className="relative h-full flex flex-col justify-center px-12 lg:px-16 xl:px-24">
      {illustrations[slide.type]}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10"
      >
        <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-heading font-bold text-white leading-[1.1] mb-4 max-w-xl">
          {slide.heading}
        </h2>
        {slide.type === 'logos' ? (
          <div className="max-w-lg mt-6">
            <ClientLogos />
          </div>
        ) : (
          <>
            {slide.description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="text-lg lg:text-xl text-white/70 font-body max-w-md mb-2"
              >
                {slide.description}
              </motion.p>
            )}
            <StatCards />
          </>
        )}
      </motion.div>
    </div>
  )
}
