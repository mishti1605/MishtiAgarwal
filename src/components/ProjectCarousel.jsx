import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// ─── spring config: smooth, no bounce ───────────────────────────────────────
const SPRING = { type: 'spring', stiffness: 280, damping: 36, mass: 1 }

// ─── per-slot visual properties ────────────────────────────────────────────
// slot: -2 | -1 | 0 (center) | 1 | 2
function slotStyle(slot) {
    const abs = Math.abs(slot)
    if (abs === 0) {
        return {
            x: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            zIndex: 10,
            pointerEvents: 'auto',
        }
    }
    if (abs === 1) {
        return {
            x: slot * 460,   // px offset from center
            scale: 0.78,
            rotate: slot * 3, // ±3° tilt
            opacity: 0.55,
            zIndex: 5,
            pointerEvents: 'auto',
        }
    }
    // hidden (abs >= 2) — parked behind side cards
    return {
        x: slot > 0 ? 600 : -600,
        scale: 0.6,
        rotate: slot * 4,
        opacity: 0,
        zIndex: 1,
        pointerEvents: 'none',
    }
}

const ProjectCarousel = ({ projects }) => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate()
    const count = projects.length

    // Wrap index
    const wrap = (idx) => ((idx % count) + count) % count

    const handleCardClick = (projectIndex) => {
        const slot = getSlot(projectIndex)
        if (slot === 0) {
            // Center card → navigate
            navigate(projects[projectIndex].link)
        } else {
            // Side card → make it active
            setActive(projectIndex)
        }
    }

    // Slot = position relative to active (clamped to -2..2, wrapping)
    const getSlot = (idx) => {
        let diff = idx - active
        // Wrap difference to [-count/2, count/2]
        if (diff > count / 2) diff -= count
        if (diff < -count / 2) diff += count
        return diff
    }

    const goPrev = () => setActive(wrap(active - 1))
    const goNext = () => setActive(wrap(active + 1))

    return (
        <div className="carousel-shell">

            {/* ── Section header ───────────────────────────── */}
            <div className="carousel-header">
                <span className="carousel-label">Selected Work</span>
                <div className="carousel-nav">
                    <button
                        className="carousel-nav-btn"
                        onClick={goPrev}
                        aria-label="Previous project"
                    >
                        ←
                    </button>
                    <span className="carousel-nav-index">
                        {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                    </span>
                    <button
                        className="carousel-nav-btn"
                        onClick={goNext}
                        aria-label="Next project"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* ── Stage ─────────────────────────────────────── */}
            <div className="carousel-stage" aria-label="Projects carousel">
                {projects.map((project, idx) => {
                    const slot = getSlot(idx)
                    const { x, scale, rotate, opacity, zIndex, pointerEvents } = slotStyle(slot)
                    const isCenter = slot === 0

                    return (
                        <motion.div
                            key={project.link}
                            className={`carousel-card${isCenter ? ' carousel-card--active' : ''}`}
                            animate={{ x, scale, rotate, opacity }}
                            transition={SPRING}
                            style={{ zIndex, pointerEvents }}
                            onClick={() => handleCardClick(idx)}
                            role={isCenter ? 'link' : 'button'}
                            aria-label={isCenter ? `View ${project.title}` : `Go to ${project.title}`}
                            tabIndex={Math.abs(slot) <= 1 ? 0 : -1}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleCardClick(idx)
                            }}
                        >
                            {/* Thumbnail */}
                            <div className="carousel-card__thumb">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="carousel-card__img"
                                    draggable={false}
                                />
                                {/* Subtle dark veil on side cards so center contrast pops */}
                                {!isCenter && (
                                    <div className="carousel-card__veil" />
                                )}
                            </div>

                            {/* Label — only fully shown on active card */}
                            <div className={`carousel-card__label${isCenter ? ' is-active' : ''}`}>
                                <span className="carousel-card__category">
                                    {project.category}
                                </span>
                                <h3 className="carousel-card__title">
                                    {project.title}
                                </h3>
                                {isCenter && (
                                    <span className="carousel-card__cta">
                                        View Project →
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* ── Dot indicators ─────────────────────────── */}
            <div className="carousel-dots" role="tablist" aria-label="Project navigation">
                {projects.map((p, idx) => (
                    <button
                        key={p.link}
                        className={`carousel-dot${idx === active ? ' is-active' : ''}`}
                        onClick={() => setActive(idx)}
                        role="tab"
                        aria-selected={idx === active}
                        aria-label={`Go to ${p.title}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel
