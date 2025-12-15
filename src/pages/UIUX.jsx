import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectLayout from '../components/ProjectLayout'

const UIUX = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <ProjectLayout
            title="Mindora"
            category="UI/UX · App Design"
            description="Mindora is a gentle wellness app designed to help people feel grounded, emotionally safe, and motivated in everyday life. Instead of overwhelming users with data or rigid routines, Mindora begins with what already brings comfort — happy memories. Its key USP, the Smart Memory Gallery, surfaces meaningful personal photos the moment a user opens the app, instantly anchoring them in positivity and familiarity. Alongside this, Mindora supports emotional balance through simple daily wellness tracking (sleep, water, movement), a calming journal, vision boards for goals and manifestation, and an Emotional SOS mode that offers immediate grounding when things feel overwhelming."
        >
            <div style={{ gridColumn: 'span 12', textAlign: 'center', padding: '4rem', background: '#1a1a1a', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '2rem' }}>Interactive Prototype</h3>
                <a
                    href="https://www.figma.com/proto/020LiJZV3aNtAnZpHaiaYq/Untitled?node-id=28-529&starting-point-node-id=28%3A529&t=Y8ImlurlAFKgGqoO-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        background: '#8a0000',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        fontSize: '1.2rem'
                    }}
                >
                    View Figma Prototype
                </a>
            </div>

            <div style={{ gridColumn: 'span 12' }}>
                <h3 style={{ marginBottom: '2rem' }}>Process & Screens</h3>

                {/* Masonry Grid */}
                <div style={{ columns: '3 300px', gap: '20px' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((num) => (
                        <div
                            key={num}
                            onClick={() => setSelectedImage(`/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/${num}.png`)}
                            style={{
                                marginBottom: '20px',
                                breakInside: 'avoid',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                cursor: 'zoom-in'
                            }}
                        >
                            <img
                                src={`/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/${num}.png`}
                                alt={`Screen ${num}`}
                                style={{ width: '100%', display: 'block', transition: 'transform 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
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
                            background: 'rgba(0,0,0,0.9)',
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
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '4px',
                                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </ProjectLayout>
    )
}

export default UIUX
