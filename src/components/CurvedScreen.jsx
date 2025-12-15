import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useVideoTexture, Text, Image } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'

const CurvedScreen = ({ play }) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)

    // Conditionally load or play texture? 
    // Actually, reliable video textures can be tricky. 
    // Let's force it to be unmuted ONLY if 'play' is true, though browser might block.
    // Best strategy: Start muted, provide a button to unmute.

    const texture = useVideoTexture('/showreel.mp4', {
        muted: true, // Always start muted to ensure autoplay
        loop: true,
        start: true,
        playsInline: true
    })

    useFrame((state, delta) => {
        const targetScale = hovered ? 1.05 : 1
        // easing.damp3(meshRef.current.scale, [targetScale, targetScale, targetScale], 0.3, delta)

        // Parallax sway
        const x = state.pointer.x * 0.2
        const y = state.pointer.y * 0.2
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y, 0.1)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x + Math.PI, 0.1) // + Math.PI to face camera if using cylinder
    })

    return (
        <group>
            <mesh
                ref={meshRef}
                rotation={[0, Math.PI, 0]} // Rotate to face camera
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {/* Using a bent plane or cylinder segment */}
                {/* Cylinder Geometry: radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength */}
                {/* We want a wide screen. Radius 8, height 5? */}
                <cylinderGeometry args={[8, 8, 4.5, 64, 1, true, -Math.PI / 6, Math.PI / 3]} />
                <meshStandardMaterial
                    map={texture}
                    side={THREE.DoubleSide}
                    emissive="#ffffff"
                    emissiveIntensity={0.2} // Self-illuminate slightly
                    toneMapped={false}
                />
            </mesh>

            {/* Frame/Border */}
            <mesh rotation={[0, Math.PI, 0]}>
                <cylinderGeometry args={[8.1, 8.1, 4.6, 64, 1, true, -Math.PI / 6, Math.PI / 3]} />
                <meshStandardMaterial color="#111" side={THREE.BackSide} />
            </mesh>
        </group>
    )
}

export default CurvedScreen
