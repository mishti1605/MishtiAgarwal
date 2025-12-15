import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import Clapperboard3D from '../components/Clapperboard3D'

const Contact = () => {
    return (
        <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0f0f0' }}>
            <Navigation />

            <section style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>

                {/* 3D Clapperboard */}
                <div style={{ height: '50vh', width: '100%', marginBottom: '2rem' }}>
                    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[5, 10, 5]} intensity={1} />
                        <Clapperboard3D />
                        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
                        <Environment preset="studio" />
                    </Canvas>
                    <p style={{ textAlign: 'center', color: '#444', fontSize: '0.8rem', marginTop: '-20px' }}>(Click me!)</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', zIndex: 10 }}
                >
                    <h1 style={{ fontSize: '4rem', fontFamily: "'Oswald', sans-serif", margin: 0 }}>PRODUCTION OFFICE</h1>
                    <p style={{ color: '#8a0000', fontSize: '1.2rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3rem' }}>Let's Create Together</p>

                    <div style={{ display: 'grid', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="mailto:mishtiagarwal14@gmail.com" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#fff', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>mishtiagarwal14@gmail.com</a>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem' }}>
                            <a href="https://instagram.com/lensbymish" target="_blank" style={{ color: '#888', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}>Instagram</a>
                            <a href="https://www.linkedin.com/in/Mishtiagarwal" target="_blank" style={{ color: '#888', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}>LinkedIn</a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Contact
