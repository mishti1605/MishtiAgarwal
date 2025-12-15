import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Environment, ContactShadows, Stars, Sparkles } from '@react-three/drei'
import CurvedScreen from './CurvedScreen'
import Navigation from './Navigation'

const Hero = () => {
    // We can add a "Start" overlay if we want sound, but for now visual autoplay (muted) is enough.
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePosition({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
        })
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            style={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#050505' // Slightly lighter than pure black for depth
            }}
        >
            {/* 3D Scene Layer */}
            <div className="canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <Canvas camera={{ position: [0, 0, 7], fov: 40 }} gl={{ antialias: true, toneMappingExposure: 1.5 }}>
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={20} color="#ff3333" />
                    <spotLight position={[-10, 0, 10]} angle={0.5} penumbra={1} intensity={10} color="#3333ff" />

                    {/* Atmosphere */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#fff" />

                    <Suspense fallback={null}>
                        <group position={[0, 0.5, 0]}>
                            <CurvedScreen />
                        </group>
                    </Suspense>
                    <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.25} far={10} color="#8a0000" />
                </Canvas>
            </div>

            {/* Cinematic Text Overlay Layer */}
            <div className="ui-container" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none', // Important: Let clicks pass to canvas
                zIndex: 2
            }}>
                <motion.div
                    style={{
                        textAlign: 'center',
                        mixBlendMode: 'difference' // Cool cinematic effect
                    }}
                >
                    <motion.h1
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 8rem)',
                            display: 'flex',
                            gap: '0.2em',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            lineHeight: 1,
                            margin: 0
                        }}
                    >
                        {/* Lights: Glow */}
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)", textShadow: "0 0 40px rgba(255,255,255,0.6)" }}
                            transition={{ duration: 1.5 }}
                        >
                            Lights.
                        </motion.span>

                        {/* Camera: Zoom */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
                            style={{ position: 'relative', zIndex: 10 }}
                        >
                            Camera.
                        </motion.span>

                        {/* Action: Snap - Clapperboard effect */}
                        <motion.span
                            initial={{ opacity: 0, rotateX: 90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.4, delay: 1.6, type: "spring", bounce: 0.4 }}
                            style={{ color: '#ff2222', transformOrigin: 'top' }} // Red Action
                        >
                            Action.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 1 }}
                        style={{
                            marginTop: '2rem',
                            fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#aaa',
                            fontWeight: 300
                        }}
                    >
                        Mishti Agarwal | Filmmaker & Designer
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #fff, transparent)' }}></div>
                <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#666' }}>Scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero
