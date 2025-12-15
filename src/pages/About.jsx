import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Lens from '../components/Lens'

const About = () => {
    return (
        <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0f0f0', overflowX: 'hidden' }}>
            <Navigation />

            <section style={{
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                padding: '0 5%'
            }}>
                {/* Text Content */}
                <div style={{ zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h5 style={{ color: '#8a0000', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>The Director's Cut</h5>
                        <h1 style={{ fontSize: '4rem', margin: '0 0 2rem 0', lineHeight: '1.1', fontFamily: "'Oswald', sans-serif" }}>
                            FRAMING <br /> THE NARRATIVE
                        </h1>

                        <div style={{
                            borderLeft: '2px solid #333',
                            paddingLeft: '2rem',
                            fontFamily: 'monospace',
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#bbb'
                        }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Hi, I’m Mishti — a communication design student who accidentally fell in love with filmmaking somewhere between a late-night idea and a blinking cursor.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                I collect moments like souvenirs: weird dreams, quiet streets, odd conversations, strange shadows… and then I try to turn them into films, visuals, or anything that feels alive.
                            </p>
                            <p>
                                My work jumps between speculative storytelling, publication design, UI/UX, branding, and whatever else my curiosity decides to obsess over that week. At the heart of everything, I just want to make things that make people feel something.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Interactive Element */}
                <div style={{ height: '80vh', width: '100%' }}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" />
                        <Lens />
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </section>
        </div>
    )
}

export default About
