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

            {/* Row of 2 Images */}
            {['7.jpg', '9.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 3. Row of 3 Images */}
            {['17.jpg', '18.jpg', '19.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 4', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 4. Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/20.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/20.jpg"
                        alt="20.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 5. Row of 2 Images */}
            {['21.jpg', '22.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 6. Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/24.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/24.jpg"
                        alt="24.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 7. Row of 3 Images */}
            {['25.jpg', '26.jpg', '27.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 4', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 8. Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/28.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/28.jpg"
                        alt="28.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 9. Row of 2 Images */}
            {['29.jpg', '30.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* Row of 2 Images */}
            {['31.jpg', '32.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/34.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/34.jpg"
                        alt="34.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* Row of 3 Images */}
            {['36.jpg', '37.jpg', '38.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 4', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/40.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/40.jpg"
                        alt="40.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* Row of 2 Images */}
            {['41.jpg', '42.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* Row of 3 Images */}
            {['43.jpg', '44.jpg', '45.jpg'].map((fileName) => (
                <div key={fileName} style={{ gridColumn: 'span 4', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Brand Identity/BR/${fileName}`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Brand Identity/BR/${fileName}`}
                            alt={fileName}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/46.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/46.jpg"
                        alt="46.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Brand Identity/BR/47.jpg')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Brand Identity/BR/47.jpg"
                        alt="47.jpg"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
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
