import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectLayout from '../components/ProjectLayout'

const Branding = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <ProjectLayout
            title="Branding & Identity"
            category="Visual Identity"
            description="Developing cohesive visual identities that tell a story. From logo design to comprehensive brand guidelines."
        >
            {/* Hero Section */}
            <div style={{ gridColumn: 'span 12', marginBottom: '4rem', textAlign: 'center' }}>
                <img
                    src="/Brand Identity/BR/6.jpg"
                    alt="Brand Identity Hero"
                    style={{ width: '100%', maxHeight: '600px', objectFit: 'cover', borderRadius: '4px', marginBottom: '2rem' }}
                />
            </div>

            {/* Description */}
            <div style={{ gridColumn: 'span 12', marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#8a0000' }}>About the Brand</h3>
                <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '1rem' }}>
                    <strong>Miju</strong> is a juice brand built around you. Short for <em>my juice</em>, it celebrates individuality, choice, and everyday wellness without being preachy.
                </p>
                <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', marginBottom: '1rem' }}>
                    The brand speaks through playful lines and vibrant colours that flow, connect, and adapt—just like people and their preferences. Every visual, flavour, and interaction is meant to feel personal, warm, and alive.
                </p>
                <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6' }}>
                    Miju isn’t just about drinking juice; it’s about feeling seen, choosing what fits you, and enjoying health in a way that feels effortless and joyful.
                </p>
            </div>

            {/* Masonry Grid */}
            <div style={{ gridColumn: 'span 12', columns: '3 300px', gap: '20px' }}>
                {[
                    '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg',
                    '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg',
                    '30.jpg', '31.jpg', '32.jpg', '34.jpg', '36.jpg', '37.jpg',
                    '38.jpg', '40.jpg', '41.jpg', '42.jpg', '43.jpg', '44.jpg',
                    '45.jpg', '46.jpg', '47.jpg', '6.jpg', '7.jpg', '9.jpg'
                ].map((fileName, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}
                        style={{
                            marginBottom: '20px',
                            breakInside: 'avoid',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            cursor: 'zoom-in'
                        }}
                    >
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={`Brand Asset ${index}`}
                            style={{ width: '100%', display: 'block', transition: 'transform 0.3s' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '4px',
                                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </ProjectLayout>
    )
}

export default Branding
