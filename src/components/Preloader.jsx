import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playBlip, playNetflixSound, audioCtx } from '../utils/SoundGen'

const Preloader = () => {
    const [count, setCount] = useState(3)
    const [isLoading, setIsLoading] = useState(true)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        // If audio context is already running (e.g. reload or navigation), start immediately
        if (audioCtx.state === 'running') {
            setHasInteracted(true)
            startCountdown()
        }
        // Otherwise wait for user to click "Enter"
    }, [])

    const startCountdown = () => {
        playBlip()
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 1) {
                    clearInterval(timer)
                    playNetflixSound()
                    setTimeout(() => setIsLoading(false), 800)
                    return 1
                }
                playBlip()
                return prev - 1
            })
        }, 1000)
    }

    const handleEnter = () => {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(() => {
                setHasInteracted(true)
                startCountdown()
            })
        } else {
            setHasInteracted(true)
            startCountdown()
        }
    }

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: '#0a0a0a',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {!hasInteracted ? (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, color: '#8a0000', borderColor: '#8a0000' }}
                            onClick={handleEnter}
                            style={{
                                background: 'transparent',
                                border: '2px solid #333',
                                color: '#f0f0f0',
                                padding: '1rem 3rem',
                                fontSize: '1.5rem',
                                fontFamily: "'Oswald', sans-serif",
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                letterSpacing: '0.2rem',
                                borderRadius: '4px'
                            }}
                        >
                            Enter Portfolio
                        </motion.button>
                    ) : (
                        /* Film Leader Countdown Circle Effect */
                        <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Circle Outline */}
                            <svg width="200" height="200" style={{ position: 'absolute' }}>
                                <circle cx="100" cy="100" r="90" stroke="#333" strokeWidth="2" fill="none" />
                                <motion.circle
                                    cx="100" cy="100" r="90"
                                    stroke="#8a0000"
                                    strokeWidth="4"
                                    fill="none"
                                    initial={{ pathLength: 0, rotate: -90 }}
                                    animate={{ pathLength: 1, rotate: 270 }} // Rotate full circle per second? Just filling it is nice.
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            </svg>

                            {/* Crosshairs */}
                            <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#333' }}></div>
                            <div style={{ position: 'absolute', width: '1px', height: '100%', background: '#333' }}></div>

                            {/* Number */}
                            <motion.span
                                key={count}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    color: '#f0f0f0',
                                    fontSize: '5rem',
                                    fontFamily: "'Oswald', sans-serif",
                                    fontWeight: 'bold',
                                    zIndex: 10
                                }}
                            >
                                {count}
                            </motion.span>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
