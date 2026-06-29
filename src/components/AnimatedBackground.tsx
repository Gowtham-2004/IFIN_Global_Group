import Globe from './Globe'
import ConnectionLines from './ConnectionLines'
import Particles from './Particles'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-brand/10 blur-[100px]" />
      </div>
      <Globe />
      <ConnectionLines />
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/0 to-surface/60 pointer-events-none" />
    </div>
  )
}
