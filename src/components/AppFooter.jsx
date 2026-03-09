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

//Array merch
const merchandise = [
    {
        icon: Mobile,
        caption: "Digital Comics",
        title: "Digital Comics",
    },
    {
        icon: Merch,
        caption: "DC Merchandise",
        title: "DC Merchandise",
    },
    {
        icon: Subs,
        caption: "Subscriptions",
        title: "Subscriptions",
    },
    {
        icon: Stores,
        caption: "Comic Shop Locator",
        title: "Comic Shop Locator",
    },
    {
        icon: Visa,
        caption: "DC Power Visa",
        title: "DC Power Visa",
    },
]

//Array link footer
const footerLinks = [
    {
        title: "DC Comics",
        voice: [
            {
                link: "#",
                nome: "Characters"
            },
            {
                link: "#",
                nome: "Comics"
            },
            {
                link: "#",
                nome: "Movies"
            },
            {
                link: "#",
                nome: "TV"
            },
            {
                link: "#",
                nome: "Videos"
            },
            {
                link: "#",
                nome: "News"
            },
        ]
    },
    {
        title: "Shops",
        voice: [
            {
                link: "#",
                nome: "Shop DC"
            },
            {
                link: "#",
                nome: "Shop DC Collectible"
            },
        ]
    },
    {
        title: "DC",
        voice: [
            {
                link: "#",
                nome: "Terms Of Use"
            },
            {
                link: "#",
                nome: "Privacy Policy (New)"
            },
            {
                link: "#",
                nome: "Ad Choices"
            },
            {
                link: "#",
                nome: "Advertising"
            },
            {
                link: "#",
                nome: "Jobs"
            },
            {
                link: "#",
                nome: "Subscriptions"
            },
            {
                link: "#",
                nome: "Talent Workshops"
            },
            {
                link: "#",
                nome: "CPSC Certifications"
            },
            {
                link: "#",
                nome: "Ratings"
            },
            {
                link: "#",
                nome: "Shop Help"
            },
            {
                link: "#",
                nome: "Contact Us"
            },
        ]
    },
    {
        title: "Sites",
        voice: [
            {
                link: "#",
                nome: "DC"
            },
            {
                link: "#",
                nome: "MAD Magazine"
            },
            {
                link: "#",
                nome: "DC Kids"
            },
            {
                link: "#",
                nome: "DC Univers"
            },
            {
                link: "#",
                nome: "DC Power Visa"
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

                    {/*iterazione JSX merchandise */}
                    {merchandise.map(merch => (
                        <div className="merch" key={merch}>

                            <img className="mobile" src={merch.icon} alt="" title={merch.title} />
                            <span>{merch.caption.toUpperCase()}</span>

                        </div>
                    ))}

                </div>
            </section>
            {/*central footer*/}
            <section className="footer-middle">
                <div className="container">
                    <div className="row py-4">

                        {/*doppia iterazione con .map() */}
                        {footerLinks.map(footerLink => (

                            <div className="col-2" key={footerLink}>
                                <ul>
                                    <h3 className="title">{footerLink.title}</h3>

                                    {footerLink.voice.map(links => (
                                        <li>{links.nome}</li>
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

