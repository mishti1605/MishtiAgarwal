import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ title, category, image, link, size = 'medium' }) => {
    const navigate = useNavigate()

    // Aspect ratios by size variant
    const aspectRatios = {
        large: '62%',   // ~16:10
        medium: '70%',   // ~4:3
        small: '80%',   // taller portrait
    }

    const paddingTop = aspectRatios[size] || aspectRatios.medium

    return (
        <div
            className="project-card"
            onClick={() => navigate(link)}
            style={{ cursor: 'pointer' }}
        >
            {/* Thumbnail */}
            <div
                className="project-card__thumb"
                style={{ paddingTop }}
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="project-card__img"
                    />
                ) : (
                    <div className="project-card__placeholder" />
                )}
            </div>

            {/* Label row */}
            <div className="project-card__label">
                <span className="project-card__category">{category}</span>
                <h3 className="project-card__title">{title}</h3>
            </div>
        </div>
    )
}

export default ProjectCard
