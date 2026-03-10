import AppCard from "./AppCard";


export default function AppMain({comics}) {
    return (
        <main>

            <section className="banner mb-5">
                <div className="container">
                    <span>CURRENT SERIES</span>
                </div>
            </section>

            <section className="games">
                <div className="container">
                    <div className="row">

                        {/*Porps */}
                        {comics.map(game => (

                            <AppCard image={game.thumb} title={game.series} key={game.id} />
                        ))
                        }

                    </div>
                    <button>LOAD MORE</button>
                </div>
            </section>

        </main>
    )
}