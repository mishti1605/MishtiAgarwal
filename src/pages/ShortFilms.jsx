import ProjectLayout from '../components/ProjectLayout'
import VimeoVideo from '../components/VimeoVideo'

const ShortFilms = () => {
    const films = [
        { title: "CHHAAP", vimeoId: "1146507184", genre: "Narrative", year: "2025" },
        { title: "The Elephant In the Room", vimeoId: "1146505662", genre: "Storytelling", year: "2025" },
        { title: "JAAGO", vimeoId: "1146506522", genre: "Experimental", year: "2025" }
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
                        {film.vimeoId ? (
                            <VimeoVideo videoId={film.vimeoId} />
                        ) : (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: '#666',
                                fontSize: '1.2rem'
                            }}>
                                {film.note || 'Video coming soon'}
                            </div>
                        )}
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
