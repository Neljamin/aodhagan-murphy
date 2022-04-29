import { useRef } from "react"
import { PointLight } from "three"
import { Loader, PerspectiveCamera, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics, usePlane, useBox } from "@react-three/cannon"

function MyPointLight() {
  const lightRef = useRef<PointLight>()
  // @ts-ignore-next-line
  return <pointLight ref={lightRef} position={[1, 5, 2]} color='#ffffff' />
}

function Plane(props: any) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    // @ts-ignore-next-line
    <mesh ref={ref}>
      <meshBasicMaterial color='#ffffff' />
    </mesh>
  )
}

function Cube(props: any) {
  const [ref] = useBox(() => ({ mass: 1, position: props.position, ...props }))
  return (
    // @ts-ignore-next-line
    <mesh ref={ref}>
      <Text fontSize={1} depthOffset={-1} color='white' anchorX='center' anchorY='middle' position={[0, 0, 0.5]}>
        {props.text}
      </Text>
      <boxGeometry />
      <meshLambertMaterial color={props.color} />
    </mesh>
  )
}

export default function CoolScene() {
  return (
    <Canvas>
      <Loader />
      <Physics>
        <MyPointLight />
        <ambientLight color='#ffffff' intensity={0.1} />
        <PerspectiveCamera makeDefault position={[0, 0.5, 3]} />
        <Plane />
        <Cube position={[-2.3, 10, 0]} color='#cffffe' text='H' />
        <Cube position={[-1.1, 12, 0]} color='#f9f7d9' text='e' />
        <Cube position={[0, 13, 0]} color='#fce2ce' text='l' />
        <Cube position={[1, 11, 0]} color='#ffc1f3' text='l' />
        <Cube position={[2.2, 9, 0]} color='#5f9f46' text='o' />
      </Physics>
    </Canvas>
  )
}
