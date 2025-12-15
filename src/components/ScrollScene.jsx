import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Torus, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

const ScrollScene = () => {
    const group = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // Autoplay rotation
        group.current.rotation.x = t * 0.05
        group.current.rotation.y = t * 0.08

        // Mouse Parallax
        const x = state.pointer.x * 0.5
        const y = state.pointer.y * 0.5
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y, 0.1)
    })

    return (
        <group ref={group}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Icosahedron args={[0.5, 0]} position={[2, 2, 0]}>
                    <meshStandardMaterial color="#333" wireframe />
                </Icosahedron>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <Torus args={[0.5, 0.2, 16, 32]} position={[-2, -1, -2]}>
                    <meshStandardMaterial color="#8a0000" roughness={0.4} metalness={0.6} />
                </Torus>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
                <Torus args={[0.3, 0.1, 16, 32]} position={[0, 3, -5]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#555" />
                </Torus>
            </Float>
        </group>
    )
}

export default ScrollScene
