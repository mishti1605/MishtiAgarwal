import ProjectLayout from '../components/ProjectLayout'

const Photography = () => {
    // Array of available images
    const images = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11] // removed 2.png/missing if any

    return (
        <ProjectLayout
            title="Photography"
            category="Visual Arts"
            description="Capturing moments, light, and composition through the lens. A study of shadows, urban texture, and candid emotion."
        >
            <div style={{ gridColumn: 'span 12', columns: '3 300px', gap: '20px' }}>
                {images.map((num) => (
                    <div
                        key={num}
                        style={{
                            width: '100%',
                            marginBottom: '20px',
                            breakInside: 'avoid',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src={`/Photography/Black and White Minimalist Elegant Photographer Portfolio Presentation/${num}.png`}
                            alt={`Photo ${num}`}
                            style={{ width: '100%', display: 'block', filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                            onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                            onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                    </div>
                ))}
            </div>
        </ProjectLayout>
    )
}

export default Photography
