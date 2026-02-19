import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectLayout from '../components/ProjectLayout'
import VimeoVideo from '../components/VimeoVideo'

const DreamStream = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <ProjectLayout
            title="Dream Stream"
            category="Speculative AI Film"
            description="“Dream Stream” is a speculative AI short film based on a simple but unsettling question: What if our dreams could be streamed like entertainment?"
        >
            {/* 1. Main Large Visual */}
            <div style={{ gridColumn: 'span 12', marginBottom: '6rem' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                    <VimeoVideo videoId="1146506040" />
                </div>
            </div>

            {/* Concept Text - Centered & Focused */}
            <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '8rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Concept</h3>
                <p style={{ color: '#ccc', lineHeight: '1.8', maxWidth: '800px', fontSize: '1.1rem' }}>
                    Created using Flow AI, this film explores a future where people broadcast their subconscious on OTT platforms for attention and income. But there's a catch: if a dream goes unwatched for 30 days, the dreamer becomes trapped inside it forever.
                </p>
                <p style={{ color: '#ccc', lineHeight: '1.8', maxWidth: '800px', fontSize: '1.1rem', marginTop: '1rem' }}>
                    The film blends surreal AI-generated visuals, narrative design, and ethical speculation to explore the tension between creative freedom and entertainment capitalism.
                </p>
            </div>

            {/* 2. Row of 3 Smaller Images */}
            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in', marginBottom: '3rem' }} onClick={() => setSelectedImage("/Speculative AI/dream stream Poster 2.jpeg")}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/dream stream Poster 2.jpeg" alt="Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>
            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in', marginBottom: '3rem' }} onClick={() => setSelectedImage("/Speculative AI/concept note.png")}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/concept note.png" alt="Concept Note" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>
            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in', marginBottom: '3rem' }} onClick={() => setSelectedImage("/Speculative AI/future triangle.png")}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/future triangle.png" alt="Future Triangle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>

            {/* 3. Large Image */}
            <div style={{ gridColumn: 'span 12', cursor: 'zoom-in', marginBottom: '8rem', marginTop: '4rem' }} onClick={() => setSelectedImage("/Speculative AI/FUTURE WHEEL.jpg")}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} style={{ width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/FUTURE WHEEL.jpg" alt="Future Wheel" style={{ width: '100%', display: 'block' }} />
                </motion.div>
            </div>

            {/* 4. Row of 2 Smaller Images */}
            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in', marginBottom: '3rem' }} onClick={() => setSelectedImage("/Speculative AI/instructions.png")}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/instructions.png" alt="Instructions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>
            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in', marginBottom: '3rem' }} onClick={() => setSelectedImage("/Speculative AI/Gemini_Generated_Image_9ybjv09ybjv09ybj.png")}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="/Speculative AI/Gemini_Generated_Image_9ybjv09ybjv09ybj.png" alt="AI Concept" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
            </div>

            {/* 5. Main Video/Large Visual */}
            <div style={{ gridColumn: 'span 12', marginTop: '4rem' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                    <video
                        src="/Speculative AI/b348af1eccf14cb5bc71801eb5893248.mov"
                        controls
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <h4 style={{ marginTop: '1rem', color: '#666', textAlign: 'center', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Inside Oculus</h4>
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

export default DreamStream
