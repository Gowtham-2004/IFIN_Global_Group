import { type ReactNode } from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroSlider from './HeroSlider'
import GlobeContainer from './GlobeContainer'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-surface">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen max-lg:flex-col">
        <div className="relative lg:w-[65%] lg:min-h-screen max-lg:h-[45vh] max-md:h-[40vh]">
          <GlobeContainer />
          <div className="relative z-10 h-full lg:absolute lg:inset-0">
            <HeroSlider />
          </div>
        </div>
        <div className="relative z-20 w-full lg:w-[35%] lg:min-h-screen max-lg:flex-1 flex items-center justify-center p-6 lg:p-8 max-lg:pb-12" data-layout="auth-panel">
          {children}
        </div>
      </div>
    </main>
  )
}
