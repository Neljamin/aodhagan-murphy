type SquiggleProps = React.SVGProps<SVGSVGElement>

export default function Squiggle(props: SquiggleProps) {
  const { className, ...rest } = props

  return (
    <svg
      className={className + " w-full h-20"}
      height='100%'
      width='100%'
      viewBox='0 0 100 37'
      fill='none'
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M0 0H200V37C162.347 6.91377 132.376 -3.11537 101.5 18.7985C83.2808 33.2263 66.8468 30.1385 49.5 23.5314C29.0343 17.6336 15.892 27.3035 0 37V0Z'
        fill='currentColor'
      />
    </svg>
  )
}
