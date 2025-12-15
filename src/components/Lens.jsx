import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Circle } from '@react-three/drei'
import * as THREE from 'three'

const Lens = () => {
    const group = useRef()

    useFrame((state) => {
        // Look at mouse
        const x = state.pointer.x * 2
        const y = state.pointer.y * 2
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.1)
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.1)
    })

    return (
        <group ref={group}>
            {/* Main Body */}
            <Cylinder args={[1, 1, 1.5, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Ring Red */}
            <Cylinder args={[1.02, 1.02, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.7]}>
                <meshStandardMaterial color="#8a0000" emissive="#8a0000" emissiveIntensity={0.5} />
            </Cylinder>

            {/* Front Element Glass */}
            <Circle args={[0.9, 32]} position={[0, 0, 0.76]}>
                <meshPhysicalMaterial
                    color="#222"
                    roughness={0}
                    metalness={1}
                    transmission={0.5}
                    thickness={2}
                    envMapIntensity={2}
                />
            </Circle>

            {/* Inner Glint */}
            <Circle args={[0.8, 32]} position={[0, 0, 0.75]}>
                <meshBasicMaterial color="#440000" />
            </Circle>
        </group>
    )
}

export default Lens
