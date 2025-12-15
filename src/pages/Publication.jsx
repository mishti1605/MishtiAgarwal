import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectLayout from '../components/ProjectLayout'

const Publication = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    // Converted images + original png
    const images = [
        "book stack.png",
        "Horizontal_Book_Mockup_2.jpg",
        "Horizontal_Book_Mockup_3.jpg",
        "Horizontal_Book_Mockup_4.jpg",
        "Horizontal_Book_Mockup_5.jpg",
        "Horizontal_Book_Mockup_7.jpg"
    ]

    return (
        <ProjectLayout
            title="Lesser-Known Fertility Festivals of India"
            category="Publication Design"
            description="This publication explores India’s lesser-known fertility festivals — rituals once celebrated through colour, myth, devotion, and an intimate relationship with the land. I wanted the book to feel like a bridge between anthropology and visual storytelling."
        >
            <div style={{ gridColumn: 'span 12', marginTop: '0rem', marginBottom: '4rem', textAlign: 'center' }}>
                <p style={{ color: '#ccc', lineHeight: '1.6', maxWidth: '800px', fontSize: '1.2rem', margin: '0 auto' }}>
                    The project reimagines these fading traditions through a contemporary design lens, documenting how different communities honored growth, creation, and renewal in ways often forgotten today.
                </p>
            </div>

            {/* Masonry Grid */}
            <div style={{ gridColumn: 'span 12', columns: '2 400px', gap: '20px' }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(`/Publication Design/${img}`)}
                        style={{
                            marginBottom: '20px',
                            breakInside: 'avoid',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            cursor: 'zoom-in'
                        }}
                    >
                        <img
                            src={`/Publication Design/${img}`}
                            alt={`Publication Shot ${index}`}
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

export default Publication
