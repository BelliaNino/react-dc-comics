import Logo from "../assets/dc-logo.png"


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
                                <li class="nav-item">
                                    <a href="">CHARACTERS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">COMICS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">MOVIES</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">TV</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">GAMES</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">COLLECTIBLES</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">VIDEOS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">FANS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">NEWS</a>
                                </li>
                                <li class="nav-item">
                                    <a href="">SHOP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
        </header>
    )
}