import { type ReactNode } from 'react'
import AnimatedBackground from './AnimatedBackground'
import HeroSlider from './HeroSlider'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-surface">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full max-lg:flex-col">
        <div className="w-[65%] h-screen max-lg:hidden">
          <HeroSlider />
        </div>
        <div className="w-full lg:w-[35%] h-screen flex items-center justify-center p-6 lg:p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  )
}
