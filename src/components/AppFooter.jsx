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

//Array per i link nel footer
const footerLinks = [
    {
        id: 1,
        title: "DC Comics",
        voice: [
            {
                id: 1,
                link: "Characters"
            },
            {
                id: 2,
                link: "Comics"
            },
            {
                id: 3,
                link: "Movies"
            },
            {
                id: 4,
                link: "TV"
            },
            {
                id: 5,
                link: "Videos"
            },
            {
                id: 6,
                link: "News"
            },
        ]
    },
    {
        id: 2,
        title: "Shops",
        voice: [
            {
                id: 1,
                link: "Shop DC"
            },
            {
                id: 2,
                link: "Shop DC Collectible"
            },
        ]
    },
    {
        id: 3,
        title: "DC",
        voice: [
            {
                id: 1,
                link: "Terms Of Use"
            },
            {
                id: 2,
                link: "Privacy Policy (New)"
            },
            {
                id: 3,
                link: "Ad Choices"
            },
            {
                id: 4,
                link: "Advertising"
            },
            {
                id: 5,
                link: "Jobs"
            },
            {
                id: 6,
                link: "Subscriptions"
            },
            {
                id: 7,
                link: "Talent Workshops"
            },
            {
                id: 8,
                link: "CPSC Certifications"
            },
            {
                id: 9,
                link: "Ratings"
            },
            {
                id: 10,
                link: "Shop Help"
            },
            {
                id: 11,
                link: "Contact Us"
            },
        ]
    },
    {
        id: 4,
        title: "Sites",
        voice: [
            {
                id: 1,
                link: "DC"
            },
            {
                id: 2,
                link: "MAD Magazine"
            },
            {
                id: 3,
                link: "DC Kids"
            },
            {
                id: 4,
                link: "DC Univers"
            },
            {
                id: 5,
                link: "DC Power Visa"
            },
        ]
    },
]

export default function AppFooter() {
    return (
        <footer>
            {/*footer top*/}
            <section className="footer-top">
                <div className="container">
                    <div className="merch">
                        <img className="mobile" src={Mobile} alt="" title="DIGITAL COMICS" />
                        <span>DIGITAL COMICS</span>
                    </div>
                    <div className="merch">
                        <img src={Merch} alt="" title="DC MERCHANDISE" />
                        <span>DC MERCHANDISE</span>
                    </div>
                    <div className="merch">
                        <img src={Subs} alt="" title="SUBSCRIPTIONS" />
                        <span>SUBSCRIPTIONS</span>
                    </div>
                    <div className="merch">
                        <img className="pointer" src={Stores} alt="" title="COMIC SHOP LOCATOR" />
                        <span>COMIC SHOP LOCATOR</span>
                    </div>
                    <div className="merch">
                        <img src={Visa} alt="" title="DC POWER VISA" />
                        <span>DC POWER VISA</span>
                    </div>
                </div>
            </section>
            {/*central footer*/}
            <section className="footer-middle">
                <div className="container">
                    <div className="row py-4">

                        {/*doppia iterazione con .map() */}
                        {footerLinks.map(footerLink => (

                            <div className="col-2" key={footerLink.id}>
                                <ul>
                                    <h3 className="title">{footerLink.title}</h3>

                                    {footerLink.voice.map(links =>(
                                    <li>{links.link}</li>
                                    ))}
                                </ul>
                            </div>

                        ))

                        }


                    </div>
                    <img src={LogoDC} alt="" />
                </div>
            </section>

            {/*footer*/}
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

