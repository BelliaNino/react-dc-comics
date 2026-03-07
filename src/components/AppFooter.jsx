//img footer
import Mobile from "../assets/buy-comics-digital-comics.png"
import Merch from "../assets/buy-comics-merchandise.png"
import Subs from "../assets/buy-comics-subscriptions.png"
import Stores from "../assets/buy-comics-shop-locator.png"
import Visa from "../assets/buy-dc-power-visa.svg"
import LogoDC from "../assets/dc-logo-bg.png"
//img bg footer
import BackGround from "../assets/footer-bg.jpg"
//img social footer
import Facebook from "../assets/footer-Facebook.png"
import X from "../assets/footer-twitter.png"
import YouTube from "../assets/footer-youtube.png"
import Pinterst from "../assets/footer-pinterest.png"
import Pointer from "../assets/footer-periscope.png"


export default function AppFooter() {
    return (
        <footer>
            <section className="footer-top">
                <div className="container">
                    <div>
                        <img className="mobile" src={Mobile} alt="" />
                        <span>DIGITAL COMICS</span>
                    </div>
                    <div>
                        <img src={Merch} alt="" />
                        <span>DC MERCHANDISE</span>
                    </div>
                    <div>
                        <img src={Subs} alt="" />
                        <span>SUBSCRIPTIONS</span>
                    </div>
                    <div>
                        <img className="pointer" src={Stores} alt="" />
                        <span>COMIC SHOP LOCATOR</span>
                    </div>
                    <div>
                        <img src={Visa} alt="" />
                        <span>DC POWER VISA</span>
                    </div>
                </div>
            </section>

            <section className="footer-middle">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-2">
                            <ul>
                            <li className="title">DC COMICS</li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            </ul>
                        
                            <ul>
                            <li className="title">SHOP</li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectible</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                            <li className="title">DC</li>
                            <li>Terms Of Use</li>
                            <li>Privaci Policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certifacates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul>
                            <li className="title">SITES</li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                    <img src={LogoDC} alt="" />
                </div>
            </section>

            <section className="bottom-footer">
                <div className="container">
                    
                    <div>
                        <button type="button" className="btn btn-primary rounded-0">SIGN-UP NOW!</button>
                    </div>

                    
                    <div className="social">
                        <h3>FOLLOW US</h3>
                        <img src={Facebook} alt="FB" />
                        <img src={X} alt="X" />
                        <img src={YouTube} alt="YT" />
                        <img src={Pinterst} alt="P" />
                        <img src={Pointer} alt="Loc" />
                    </div>
                </div>
            </section>
        </footer >
    )
}