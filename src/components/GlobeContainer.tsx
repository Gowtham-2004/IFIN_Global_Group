import Globe from './Globe'

export default function GlobeContainer() {
  return (
    <div
      className="absolute left-0 inset-y-0 w-[155%] overflow-visible pointer-events-none flex items-center justify-center"
    >
      <Globe />
    </div>
  )
}
