import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navigation = () => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: 'Work', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <>
            {/* Desktop / Persistent Nav */}
            <nav className="main-nav" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '2rem 3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
                backdropFilter: 'blur(5px)'
            }}>
                {/* Name/Logo on the left */}
                <Link
                    className="nav-logo"
                    to="/"
                    onClick={() => setIsOpen(false)}
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        zIndex: 101, /* Ensure logo stays above overlay if needed */
                        position: 'relative'
                    }}
                >
                    Mishti Agarwal
                </Link>

                {/* Desktop Menu items (hidden on mobile via CSS) */}
                <div className="nav-links" style={{ display: 'flex', gap: '3rem' }}>
                    {links.map((link) => (
                        <Link
                            className="nav-link"
                            key={link.name}
                            to={link.path}
                            style={{
                                color: location.pathname === link.path ? '#8a0000' : '#fff',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                position: 'relative'
                            }}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-5px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: '#8a0000'
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Button (hidden on desktop via CSS) */}
                <div
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`hamburger ${isOpen ? 'open' : ''}`} />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, y: '-10px' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10px' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: '#0a0a0a',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onClick={() => setIsOpen(false)} // Close if tapped outside (entire overlay)
                    >
                        <div
                            style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when tapping the container itself
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        color: location.pathname === link.path ? '#8a0000' : '#fff',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        letterSpacing: '3px',
                                        fontSize: '2rem'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
