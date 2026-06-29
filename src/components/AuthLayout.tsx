import { type ReactNode } from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroSlider from './HeroSlider'
import GlobeContainer from './GlobeContainer'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative h-screen w-screen max-lg:h-auto max-lg:min-h-screen max-lg:overflow-y-auto overflow-hidden bg-surface">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full max-lg:flex-col">
        <div className="relative lg:w-[65%] lg:h-screen max-lg:h-[45vh] max-md:h-[35vh]">
          <div className="hidden md:block">
            <GlobeContainer />
          </div>
          <div className="relative z-10 h-full">
            <HeroSlider />
          </div>
        </div>
        <div className="relative z-20 w-full lg:w-[35%] lg:h-screen flex items-center justify-center p-6 lg:p-8 max-lg:pb-12">
          {children}
        </div>
      </div>
    </main>
  )
}
