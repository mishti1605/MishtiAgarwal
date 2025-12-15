import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

const Clapperboard3D = () => {
    const [active, setActive] = useState(false)

    const { rotation } = useSpring({
        rotation: active ? [0, 0, -0.5] : [0, 0, 0],
        config: { mass: 1, tension: 500, friction: 15 } // Snap effect
    })

    return (
        <group
            onClick={() => setActive(!active)}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
            rotation={[0, -0.2, 0]}
        >
            {/* Main Board */}
            <Box args={[4, 3, 0.2]} position={[0, -1.5, 0]}>
                <meshStandardMaterial color="#111" roughness={0.2} />
            </Box>

            {/* Stripes on Board */}
            <Box args={[3.8, 2.8, 0.21]} position={[0, -1.5, 0]}>
                <meshStandardMaterial color="#000" />
            </Box>

            {/* Top Stick - Static Part */}
            {/* Actually clapper consists of a hinge on the side. Let's simplify. Fixed bottom stick? No, usually the top stick moves relative to the board top edge. */}

            {/* The Hinge is at the left. */}
            <animated.group position={[-2, 0, 0]} rotation={rotation}>
                {/* Moving Stick */}
                <Box args={[4, 0.5, 0.3]} position={[2, 0.25, 0]}>
                    <meshStandardMaterial color="#fff" />
                </Box>
                {/* Chevron Pattern (simplified as black boxes) */}
                <Box args={[0.5, 0.51, 0.31]} position={[0.5, 0.25, 0]}><meshStandardMaterial color="#111" /></Box>
                <Box args={[0.5, 0.51, 0.31]} position={[1.5, 0.25, 0]}><meshStandardMaterial color="#111" /></Box>
                <Box args={[0.5, 0.51, 0.31]} position={[2.5, 0.25, 0]}><meshStandardMaterial color="#111" /></Box>
                <Box args={[0.5, 0.51, 0.31]} position={[3.5, 0.25, 0]}><meshStandardMaterial color="#111" /></Box>
            </animated.group>

        </group>
    )
}

export default Clapperboard3D
