import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectLayout from '../components/ProjectLayout'

const Photography = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <ProjectLayout
            title="Photography"
            category="Visual Arts"
            description="Capturing moments, light, and composition through the lens. A study of shadows, urban texture, and candid emotion."
        >
            {/* 1. Large Image */}
            <div style={{ gridColumn: 'span 12', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png"
                        alt="Photo 1"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 2. Row of 3 Images */}
            {[3, 4, 5].map((num) => (
                <div key={num} style={{ gridColumn: 'span 4', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`}
                            alt={`Photo ${num}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 3. Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/6.png')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/6.png"
                        alt="Photo 6"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 4. Row of 2 Images */}
            {[7, 8].map((num) => (
                <div key={num} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`}
                            alt={`Photo ${num}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

            {/* 5. Large Image */}
            <div style={{ gridColumn: 'span 12', marginTop: '6rem', marginBottom: '8rem' }} onClick={() => setSelectedImage('/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/9.png')}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                        src="/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/9.png"
                        alt="Photo 9"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>
            </div>

            {/* 6. Row of 2 Images */}
            {[10, 11].map((num) => (
                <div key={num} style={{ gridColumn: 'span 6', marginBottom: '3rem' }} onClick={() => setSelectedImage(`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', cursor: 'zoom-in', borderRadius: '4px', overflow: 'hidden' }}>
                        <img
                            src={`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`}
                            alt={`Photo ${num}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                </div>
            ))}

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

export default Photography
