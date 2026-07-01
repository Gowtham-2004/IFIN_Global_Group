import { motion } from 'framer-motion'
import { type Slide } from '../types'
import StatCards from './StatCards'

interface SlideCardProps {
  slide: Slide
  isActive?: boolean
}

export default function SlideCard({ slide, isActive = false }: SlideCardProps) {
  return (
    <div className="relative flex h-full min-w-0 flex-col justify-center px-4 py-6 sm:px-6 md:px-8 lg:px-16 lg:py-0 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 min-w-0"
      >
        <h2 className="mb-3 max-w-3xl font-heading text-2xl font-bold leading-[1.12] text-white sm:text-3xl md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl xl:text-[56px] short:xl:text-5xl">
          {slide.heading}
        </h2>
        {slide.description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mb-4 max-w-lg font-body text-sm text-white/[0.78] sm:text-base md:mb-6 md:text-lg lg:mb-10 lg:text-xl short:mb-4 short:md:mb-6"
          >
            {slide.description}
          </motion.p>
        )}
        <StatCards />
      </motion.div>
    </div>
  )
}
