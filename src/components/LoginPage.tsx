import AnimatedBackground from './AnimatedBackground'
import HeroSlider from './HeroSlider'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-surface">
      <AnimatedBackground />

      <div className="relative z-10 flex h-full max-lg:flex-col">
        <div className="w-[65%] h-screen max-lg:hidden">
          <HeroSlider />
        </div>

        <div className="w-full lg:w-[35%] h-screen flex items-center justify-center p-6 lg:p-8">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
