import Logo from "../assets/dc-logo.png"

const links = [
    {
        id: 1,
        title: "Characters",
    },
    {
        id: 2,
        title: "Comics",
    },
    {
        id: 3,
        title: "Movies",
    },
    {
        id: 4,
        title: "TV",
    },
    {
        id: 5,
        title: "Games",
    },
    {
        id: 6,
        title: "Collectipbles",
    },
    {
        id: 7,
        title: "Videos",
    },
    {
        id: 8,
        title: "Fans",
    },
    {
        id: 9,
        title: "News",
    },
    {
        id: 10,
        title: "Shop",
    },
]

export default function AppHeader() {
    return (
        <header>

            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <img src={Logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            {links.map(link => (


                                <li class="nav-item" key={link.id}>
                                    <a href="">{link.title.toUpperCase()}</a>
                                </li>

                            ))}
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}