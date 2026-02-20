import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const projects = [
    { name: 'Speculative AI', path: '/dream-stream', image: '/Speculative AI/dream stream Poster 2.jpeg' },
    { name: 'Short Films', path: '/short-films', image: '/Shortfilms/SHORTFILM POSTER.jpeg' },
    { name: 'Photography', path: '/photography', image: '/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/1.png' },
    { name: 'Brand Identity', path: '/branding', image: '/Brand Identity/BR/6.jpg' },
    { name: 'UI/UX', path: '/ui-ux', image: '/UI UX/Yellow and Pink Gradient Simple Abstract Mobile Apps Presentation/1.png' },
    { name: 'Publication Design', path: '/publication', image: '/Publication Design/book stack.png' }
]

const ProjectNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const index = projects.findIndex(p => p.path === location.pathname)
        if (index !== -1) {
            setCurrentIndex(index)
        }
    }, [location.pathname])

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    const nextIndex = (currentIndex + 1) % projects.length

    const prevProject = projects[prevIndex]
    const nextProject = projects[nextIndex]

    return (
        <div className="project-nav-wrapper" style={{ padding: '4rem 2rem', background: '#0a0a0a', borderTop: '1px solid #222' }}>
            <div className="project-nav-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: '2rem' }}>

                {/* Previous Project */}
                <div
                    className="project-nav-item left"
                    onClick={() => navigate(prevProject.path)}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '1 1 0', minWidth: 0 }}
                >
                    <span className="project-nav-label" style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Previous</span>
                    <div className="project-nav-thumb" style={{ width: '100%', maxWidth: '250px', height: '150px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                        <img src={prevProject.image} alt={prevProject.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 className="project-nav-title" style={{ fontSize: '1.2rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{prevProject.name}</h4>
                </div>

                {/* View All */}
                <div
                    className="project-nav-btn"
                    onClick={() => navigate('/', { state: { scrollToProjects: true } })}
                    style={{
                        cursor: 'pointer',
                        padding: '1rem 2rem',
                        border: '1px solid #333',
                        borderRadius: '30px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        color: '#fff',
                        textAlign: 'center',
                        flexShrink: 0
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#8a0000'; e.currentTarget.style.borderColor = '#8a0000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#333' }}
                >
                    View All Projects
                </div>

                {/* Next Project */}
                <div
                    className="project-nav-item right"
                    onClick={() => navigate(nextProject.path)}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: '1 1 0', minWidth: 0, textAlign: 'right' }}
                >
                    <span className="project-nav-label" style={{ color: '#666', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Next</span>
                    <div className="project-nav-thumb" style={{ width: '100%', maxWidth: '250px', height: '150px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                        <img src={nextProject.image} alt={nextProject.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 className="project-nav-title" style={{ fontSize: '1.2rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{nextProject.name}</h4>
                </div>

            </div>
        </div>
    )
}

export default ProjectNavigation
