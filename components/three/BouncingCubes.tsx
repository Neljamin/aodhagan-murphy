import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

type BoxProps = {
  color: string
  initialFloatingDirection: "up" | "down"
  position: [number, number, number]
}

function Box(props: BoxProps) {
  const { color, position, initialFloatingDirection } = props
  const [floatDirection, setFloatDirection] = useState<"up" | "down">(initialFloatingDirection)
  const ref = useRef<JSX.IntrinsicElements["mesh"]>()

  useFrame(() => {
    if (ref.current) {
      if (floatDirection === "up") {
        ref.current.position.y += 0.005
      } else {
        ref.current.position.y -= 0.005
      }

      if (ref.current.position.y > position[1] + 0.5) {
        setFloatDirection("down")
      } else if (ref.current.position.y < position[1] - 0.5) {
        setFloatDirection("up")
      }
    }
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

type BouncingCubesProps = React.HTMLAttributes<HTMLDivElement>

export default function BouncingCubes(props: BouncingCubesProps) {
  const { className, ...rest } = props
  return (
    <div className={"absolute top-0 left-0 w-full h-full z-negative" + (className ? " " + className : "")} {...rest}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box initialFloatingDirection='up' color='#930077' position={[-8.2, -1, -2]} />
        <Box initialFloatingDirection='up' color='#ffbd39' position={[-5.2, 4, -2]} />
        <Box initialFloatingDirection='up' color='#e4007c' position={[-2.2, 1, 0]} />
        <Box initialFloatingDirection='down' color='#090088' position={[1.2, -1.5, 0]} />
        <Box initialFloatingDirection='down' color='#c24d2c' position={[0.2, 2.5, 0]} />
        <Box initialFloatingDirection='up' color='#6af79a' position={[0, 2, -1]} />
        <Box initialFloatingDirection='up' color='#57acc5' position={[5, 2, -0.5]} />
        <Box initialFloatingDirection='down' color='#f7dad9' position={[7, -1, -0.5]} />
      </Canvas>
    </div>
  )
}
