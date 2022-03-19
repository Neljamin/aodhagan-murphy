type SquiggleReverseProps = React.SVGProps<SVGSVGElement>

export default function SquiggleReverse(props: SquiggleReverseProps) {
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
        d='M200 37L0 37V0C37.6534 30.0862 67.6244 40.1154 98.5 18.2015C116.719 3.77371 133.153 6.86152 150.5 13.4686C170.966 19.3664 184.108 9.6965 200 0V37Z'
        fill='currentColor'
      />
    </svg>
  )
}
