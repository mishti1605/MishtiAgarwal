import ProjectLayout from '../components/ProjectLayout'
import SmartVideo from '../components/SmartVideo'

const ShortFilms = () => {
    const films = [
        { title: "CHHAAP", src: "/Shortfilms/Your paragraph text 2.mp4", genre: "Narrative", year: "2025" },
        { title: "The Elephant In the Room", src: "/Shortfilms/video-output-CB9AA856-175B-41C0-92CE-9B9BFEC37F3B-1.MP4", genre: "Storytelling", year: "2025" },
        { title: "JAAGO", src: "/Shortfilms/video-output-F419A660-6F40-437B-80B0-C3D81E404BF9-1.MOV", genre: "Experimental", year: "2025" }
    ]

    return (
        <ProjectLayout
            title="Short Films"
            category="Cinematography & Direction"
            description="My short films are little windows into the worlds I imagine — sometimes quiet, sometimes intense, sometimes just beautifully strange. These projects are my playground for experimenting with narrative, mood, and visual rhythm."
        >
            {films.map((film, index) => (
                <div key={index} style={{ gridColumn: 'span 12', marginBottom: '4rem' }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#000',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        border: '1px solid #333'
                    }}>
                        <SmartVideo
                            src={film.src}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h3 style={{ fontSize: '2rem', margin: 0 }}>{film.title}</h3>
                        <span style={{ fontFamily: 'monospace', color: '#888' }}>{film.genre} | {film.year}</span>
                    </div>
                </div>
            ))}
        </ProjectLayout>
    )
}

export default ShortFilms
