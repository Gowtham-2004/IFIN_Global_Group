import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { slides } from '../constants/slides'
import SlideCard from './SlideCard'

import 'swiper/css'
import 'swiper/css/pagination'

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative h-full w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
        speed={800}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <SlideCard slide={slide} isActive={i === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
