import { useRef } from "react"
import { CanvasTexture, PointLight, TextureLoader } from "three"
import { Loader, PerspectiveCamera, Image } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
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
  const colorMap = useLoader(TextureLoader, "/techs/react.png")

  return (
    // @ts-ignore-next-line
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={props.color} map={colorMap} />
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
        <Cube position={[1, 12, 0]} color='white' />
        <Cube position={[2, 11, 0]} color='white' />
        <Cube position={[0, 15, 0]} color='white' />
        <Cube position={[-1, 18, 0]} color='white' />
        <Cube position={[2, 14, 0]} color='white' />
        <Cube position={[0, 10, 0]} color='white' />
        <Cube position={[-1.2, 9, 0]} color='white' />
        <Cube position={[-2, 15, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
        <Cube position={[1, 10, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
        <Cube position={[1, 12, 0]} color='white' />
        <Cube position={[2, 11, 0]} color='white' />
        <Cube position={[0, 15, 0]} color='white' />
        <Cube position={[-1, 18, 0]} color='white' />
        <Cube position={[2, 14, 0]} color='white' />
        <Cube position={[0, 10, 0]} color='white' />
        <Cube position={[-1.2, 9, 0]} color='white' />
        <Cube position={[-2, 15, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
        <Cube position={[1, 10, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
        <Cube position={[1, 12, 0]} color='white' />
        <Cube position={[2, 11, 0]} color='white' />
        <Cube position={[0, 15, 0]} color='white' />
        <Cube position={[-1, 18, 0]} color='white' />
        <Cube position={[2, 14, 0]} color='white' />
        <Cube position={[0, 10, 0]} color='white' />
        <Cube position={[-1.2, 9, 0]} color='white' />
        <Cube position={[-2, 15, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
        <Cube position={[1, 10, 0]} color='white' />
        <Cube position={[0, 13, 0]} color='white' />
      </Physics>
    </Canvas>
  )
}
