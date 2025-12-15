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
            <div style={{ gridColumn: 'span 12' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                    <VimeoVideo videoId="1146506040" />
                </div>
            </div>

            <div style={{ gridColumn: 'span 12', marginTop: '2rem' }}>
                <h3>Concept</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Created using Flow AI, this film explores a future where people broadcast their subconscious on OTT platforms for attention and income. But there's a catch: if a dream goes unwatched for 30 days, the dreamer becomes trapped inside it forever.
                </p>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                    The film blends surreal AI-generated visuals, narrative design, and ethical speculation to explore the tension between creative freedom and entertainment capitalism.
                </p>
            </div>

            {/* Process / Gallery */}
            <div style={{ gridColumn: 'span 12', marginTop: '4rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Process & Development</h3>
            </div>

            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/dream stream Poster 2.jpeg")}>
                <img src="/Speculative AI/dream stream Poster 2.jpeg" alt="Poster" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/concept note.png")}>
                <img src="/Speculative AI/concept note.png" alt="Concept Note" style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/future triangle.png")}>
                <img src="/Speculative AI/future triangle.png" alt="Future Triangle" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/FUTURE WHEEL.jpg")}>
                <img src="/Speculative AI/FUTURE WHEEL.jpg" alt="Future Wheel" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 4', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/instructions.png")}>
                <img src="/Speculative AI/instructions.png" alt="Instructions" style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/Gemini_Generated_Image_9ybjv09ybjv09ybj.png")}>
                <img src="/Speculative AI/Gemini_Generated_Image_9ybjv09ybjv09ybj.png" alt="AI Generated Concept" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/IMG_9179.jpg")}>
                <img src="/Speculative AI/IMG_9179.jpg" alt="Process Shot" style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/Screenshot 2025-12-14 at 11.28.11 AM.png")}>
                <img src="/Speculative AI/Screenshot 2025-12-14 at 11.28.11 AM.png" alt="Process Screenshot 1" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
            <div style={{ gridColumn: 'span 6', cursor: 'zoom-in' }} onClick={() => setSelectedImage("/Speculative AI/Screenshot 2025-12-14 at 12.28.32 PM.png")}>
                <img src="/Speculative AI/Screenshot 2025-12-14 at 12.28.32 PM.png" alt="Process Screenshot 2" style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            <div style={{ gridColumn: 'span 12', marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#888' }}>A sneak peek inside Oculus</h4>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#111', borderRadius: '8px', overflow: 'hidden' }}>
                    <video
                        src="/Speculative AI/b348af1eccf14cb5bc71801eb5893248.mov"
                        controls
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
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
