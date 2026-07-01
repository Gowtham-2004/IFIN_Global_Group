import { type ReactNode } from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroSlider from './HeroSlider'
import GlobeContainer from './GlobeContainer'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-[100svh] w-full overflow-x-hidden bg-surface">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-[100svh] w-full min-w-0 flex-col lg:flex-row">
        <div className="relative h-[38svh] min-h-[280px] max-h-[360px] w-full min-w-0 overflow-hidden md:h-[36svh] lg:h-auto lg:min-h-[100svh] lg:max-h-none lg:w-[65%] lg:overflow-visible">
          <GlobeContainer />
          <div className="relative z-10 h-full w-full min-w-0 lg:absolute lg:inset-0">
            <HeroSlider />
          </div>
        </div>
        <div className="relative z-20 flex w-full min-w-0 flex-1 items-start justify-center px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:min-h-[100svh] lg:w-[35%] lg:flex-none lg:items-center lg:p-8" data-layout="auth-panel">
          {children}
        </div>
      </div>
    </main>
  )
}
