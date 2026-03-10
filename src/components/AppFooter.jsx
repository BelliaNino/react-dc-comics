//img footer
import LogoDC from "../assets/dc-logo-bg.png"



export default function AppFooter({merchandise, footerLinks, SN}) {
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

                        {/*iterazione social icon*/}
                        {SN.map(social => (
                        <img key={social.image} src={social.image} alt="FB" />
                        ))}
                    </div>
                </div>
            </section>
        </footer >
    )
}

