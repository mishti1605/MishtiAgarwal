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
            <nav style={{
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
                    to="/"
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        zIndex: 1002 // Ensure logo is above mobile menu or accessible
                    }}
                >
                    Mishti Agarwal
                </Link>

                {/* Menu items on the right */}
                <div className="desktop-links" style={{ display: 'flex', gap: '3rem' }}>
                    {links.map((link) => (
                        <Link
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
            </nav>

            {/* Mobile Navigation */}
            <div className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-nav-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{ color: location.pathname === link.path ? '#8a0000' : '#fff' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
