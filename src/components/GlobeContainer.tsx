import Globe from './Globe'

export default function GlobeContainer() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 flex w-[130%] -translate-x-1/2 items-center justify-center overflow-visible sm:w-[120%] lg:left-0 lg:w-[155%] lg:translate-x-0"
    >
      <Globe />
    </div>
  )
}
