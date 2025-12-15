import Navigation from './Navigation'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import ScrollScene from './ScrollScene'
import { useEffect } from 'react'

const ProjectLayout = ({ title, category, description, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0f0f0', position: 'relative' }}>
            <Navigation />

            {/* Fixed 3D Background Layer for Projects */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.5 }}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <ScrollScene />
                </Canvas>
            </div>

            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem 4rem', position: 'relative', zIndex: 1 }}>
                <motion.header
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ marginBottom: '6rem', textAlign: 'center' }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        border: '1px solid #333',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        color: '#888'
                    }}>
                        {category}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontFamily: "'Oswald', sans-serif", margin: '0 0 2rem 0', lineHeight: 1.1 }}>
                        {title}
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6 }}>
                        {description}
                    </p>
                </motion.header>

                <div className="project-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '2rem'
                }}>
                    {/* Automatically animate children as they appear */}
                    {Array.isArray(children) ? children.map((child, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            {child}
                        </ScrollReveal>
                    )) : (
                        <ScrollReveal>
                            {children}
                        </ScrollReveal>
                    )}
                </div>
            </main>
        </div>
    )
}

const ScrollReveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            style={{ display: 'contents' }}
        >
            {children}
        </motion.div>
    )
}

export default ProjectLayout
