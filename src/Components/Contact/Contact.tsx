import "./Contact.css"

type socialLink = {
    label: string;
    value: string;
    url: string;

}
const socialLinks: socialLink[] = [
    { label: "Email", value: "banelethabede@outlook.com", url: "mailto:banelethabede@outlook.com" },
    { label: "LinkedIn", value: "linkedin.com/in/banele-thabede", url: "https://linkedin.com/in/banele-thabede" },
    { label: "Github", value: "github.com/BaneleJerry", url: "https://github.com/BaneleJerry" },
    { label: "Portfolio", value: "banelejerry.github.io/portfolio", url: "https://banelejerry.github.io/portfolio" },
    { label: "Phone ", value: "067 277 0441", url: "" }
];
const Contact = () => {
    return (
        <section className="section" id="contact">
            <p className="section__label">05 - contact</p>
            <div className="contact__grid">
                <div className="grid__left">
                    <h2 className="section__heading">Let's <em>connect</em></h2>
                    <p className="contact__paragraph">I'm actively looking for junior backend roles. If you're building something interesting and need a Java engineer who ships, let's talk.</p>
                </div>
                <div className="grid__right">
                    {socialLinks.map((social) => (
                        <div className="social__link" key={social.label}>
                            {social.url ? (
                                <a href={social.url} className="social__anchor" target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <p className="social__label">{social.label}</p>
                                        <span>{social.value}</span>
                                    </div>
                                    <span className="social__arrow">↗</span>
                                </a>
                            ) : (
                                <div className="social__anchor">
                                    <div>
                                        <p className="social__label">{social.label}</p>
                                        <span>{social.value}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Contact;
