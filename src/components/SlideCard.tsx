import { motion } from 'framer-motion'
import { type Slide } from '../types'
import StatCards from './StatCards'

interface SlideCardProps {
  slide: Slide
  isActive?: boolean
}

export default function SlideCard({ slide, isActive = false }: SlideCardProps) {
  return (
    <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6 max-w-3xl">
          {slide.heading}
        </h2>
        {slide.description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/[0.78] font-body max-w-lg mb-6 sm:mb-8 md:mb-10"
          >
            {slide.description}
          </motion.p>
        )}
        <StatCards />
      </motion.div>
    </div>
  )
}
