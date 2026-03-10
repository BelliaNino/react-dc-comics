import Logo from "../assets/dc-logo.png"

export default function AppHeader({links}) {
    return (
        <header>

            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <img src={Logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            {links.map(link => (

                                <li className="nav-item" key={link.title}>
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