import './Story.css'
export function Story({children}: {children: React.ReactNode}) {
    return (
        <section className="story">
            {children}
        </section>
    )
}