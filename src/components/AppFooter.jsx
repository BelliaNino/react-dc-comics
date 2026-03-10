//img footer
import LogoDC from "../assets/dc-logo-bg.png"
//img bg footer
import BackGround from "../assets/footer-bg.jpg"
//img social footer
import Facebook from "../assets/footer-facebook.png"
import X from "../assets/footer-twitter.png"
import YouTube from "../assets/footer-youtube.png"
import Pinterst from "../assets/footer-pinterest.png"
import Pointer from "../assets/footer-periscope.png"


export default function AppFooter({merchandise, footerLinks}) {
    return (
        <footer>
            {/*footer top*/}
            <section className="footer-top">
                <div className="container">

                    {/*iterazione JSX merchandise */}
                    {merchandise.map(merch => (
                        <div className="merchandise" key={merch.icon}>

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

                            <div className="col-2" key={footerLink.title}>
                                <ul>
                                    <h3 className="title">{footerLink.title}</h3>

                                    {footerLink.voice.map(links => (
                                        <li key={links.nome}>{links.nome}</li>
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

