import "./About.css";

const TECH_STACK = [
    "Java 21", "Spring Boot", "Spring Security",
    "PostgreSQL", "Redis", "JWT", "OAuth2", "REST API",
];

const otherStack = [
    "Golang", "Python",
    "React", "TypeScript", "Node.js", "Express",
    "MongoDB", "Docker", "Kubernetes", "AWS", "MySQL",
];

const About = () => {

    return (
        <section className="section" id="about">
            <p className="section__label">01 <em>—</em> About Me</p>
            <div className="grid">
                <div className="grid_left">
                    <h2 className="section__heading">Backend-first.
                        <em> Full-stack capable.</em></h2>
                    <p className="about__paragraph">
                        Graduate Java Developer with hands-on experience building production-grade backend systems. Comfortable across the full SDLC — from designing relational schemas and RESTful APIs to implementing business logic and maintaining existing systems.
                    </p>

                    <p className="about__paragraph">
                        Eager to contribute to a structured engineering team, absorb best practices, and grow into a strong Java engineer.
                    </p>
                    <a href="https://www.linkedin.com/in/banele-thabede"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer">
                        LinkedIn↗
                    </a>
                </div>
                <div className="grid_right">

                    <div className="about__stack">
                        <span className="about__stack-label">// Core stack</span>
                        <div className="about__stack-items">
                            {TECH_STACK.map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="about__stack">
                        <span className="about__stack-label">// Also proficient </span>
                        <div className="about__stack-items">
                            {otherStack.map((tech) => (
                                <span key={tech} className="tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span className="section__endline"></span>
        </section>
    )
}

export default About;