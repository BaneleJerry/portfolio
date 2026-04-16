import "./Project.css";

type ProjectObjet = {
    id: number;
    title: string;
    lang: string;
    desc: string;
    tags: string[];
    features: string[]; // Keeping the key name as per your snippet
    github: string;
}

const ProjectsArray: ProjectObjet[] = [
    {
        id: 1,
        title: "ClearPath",
        lang: "Java 21 · Spring Boot 3.5 · Spring Security · PostgreSQL · Redis · JWT · React 18 · TypeScript · Docker",
        desc: "A role-based client and project management platform built for organisations to manage users, projects, and milestones with a structured invite-only onboarding system.",
        tags: ["Java", "Spring Boot", "React", "TypeScript", "Docker", "Redis", "JWT", "PostgreSQL", "Spring Security"],
        features: [
            "Invite-only RBAC system: ADMIN, STAFF, MODERATOR, and USER roles each have scoped invite capabilities enforced at API, Spring Security, and React UI layers.",
            "JWT authentication: Token validation, session persistence, and Redis-backed token blacklisting on logout.",
            "Redis caching: User auth cache for organisations, users, and projects to reduce redundant DB lookups.",
            "Admin dashboard: Real-time stats, full user management, and organisation/project CRUD.",
            "Milestone tracking: Per-project milestones with full status lifecycle (Pending → In Progress → Completed → Delayed).",
            "Architecture: Feature-based folder structure with permission policies enforced at database, security filter, and UI layers."
        ],
        github: "https://github.com/BaneleJerry/clear-path"
    },
    {
        id: 2,
        title: "Movie Reservation System",
        lang: "Java 17 · Spring Boot · Spring Security · PostgreSQL · Redis",
        desc: "A full-featured movie booking platform with separate user and admin workflows, seat selection, and transaction management.",
        tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Redis"],
        features: [
            "Role-based access: Spring Security configuration for USER and ADMIN roles to manage movies and bookings.",
            "Seat reservation logic: Concurrent booking handled with optimistic locking to prevent double-booking.",
            "Caching strategy: Redis cache on movie listings and showtime data to reduce query time.",
            "Booking workflow: End-to-end flow including seat selection, ticket generation, and cancellation with refund tracking.",
            "Database design: Normalised PostgreSQL schema across movies, theatres, seats, and bookings with optimized indexing."
        ],
        github: "https://github.com/BaneleJerry"
    },
    {
        id: 3,
        title: "Authentication Server",
        lang: "Go · Redis · OAuth2 · JWT",
        desc: "A secure, multi-tenant authentication microservice designed for identity verification and access control at scale.",
        tags: ["Go", "Redis", "OAuth2", "JWT", "Microservices"],
        features: [
            "Multi-tenant architecture: Isolated authentication contexts per tenant to prevent data leakage.",
            "OAuth2 + JWT: Full authorization code flow with access and refresh token issuance.",
            "Token lifecycle: Refresh token rotation and Redis-based blacklisting for immediate revocation.",
            "RESTful API: Designed for seamless integration with any backend service for registration and introspection."
        ],
        github: "https://github.com/BaneleJerry"
    },
    {
        id: 4,
        title: "NetPulse",
        lang: "Kotlin · Jetpack Compose · MVVM · Android ForegroundService · Coroutines",
        desc: "A native Android application for monitoring and managing Huawei mobile WiFi modems in real time.",
        tags: ["Kotlin", "Android", "Jetpack Compose", "MVVM", "Coroutines"],
        features: [
            "Real-time modem stats: Displays signal strength, network type, battery, and data speeds via local HTTP API.",
            "Background service: ForegroundService polling every 60 seconds with live-stats notifications.",
            "Clean architecture: NetworkDataSource → Repository → ViewModel pattern with shared StateFlow for data syncing.",
            "Low-battery alerts: Proactive system notifications when device battery drops below 25%."
        ],
        github: "https://github.com/BaneleJerry"
    },
    {
        id: 5,
        title: "Bakery Online Ordering System",
        lang: "PHP · MySQL · HTML · CSS · JavaScript",
        desc: "A web-based ordering platform that digitized a manual bakery process, improving operational flow by 45%.",
        tags: ["PHP", "MySQL", "JavaScript", "Web Development"],
        features: [
            "Order placement flow: Interactive cart system with persistent storage in MySQL.",
            "Real-time status tracking: Order progress updates (Preparing → Ready) using JavaScript polling.",
            "Admin dashboard: Staff interface for managing product catalogues and tracking daily order volumes.",
            "Impact: Streamlined order intake and reduced manual errors significantly."
        ],
        github: "https://github.com/BaneleJerry"
    },
    {
        id: 6,
        title: "Lumos Tutoring Academy",
        lang: "React 18 · JavaScript · CSS · Vite",
        desc: "A fully responsive marketing website for a tutoring service, focused on smooth UX and mobile-first design.",
        tags: ["React", "JavaScript", "Vite", "Frontend"],
        features: [
            "Component architecture: Reusable modular components for hero sections, cards, and profiles.",
            "Custom Carousel: A horizontally scrolling testimonial carousel built without external libraries.",
            "Optimized Performance: Mobile-first responsive design with Vite build tooling for fast production bundles."
        ],
        github: "https://github.com/BaneleJerry"
    }
];

const Projects = () => {
    return (
        <section className="section" id="projects">
            <p className="section__label">02 - Projects</p>
            <h2 className="section__heading">Things i've built</h2>
            <div className="projects__grid">
                {ProjectsArray.map((project) => (
                    <div key={project.id} className="project__card">
                        <span className="project__id">{String(project.id).padStart(2, "0")}</span>
                        <h3 className="project__title">{project.title}</h3>
                        <p className="project__lang">{project.lang}</p>
                        <p className="project__desc">{project.desc}</p>

                        <div className="project__tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="project__tag btn">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <ul className="project__features">
                            {project.features.map((feature) => (
                                <li key={feature} className="project__feature">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href={project.github} className="project__github btn" target="_blank" rel="noopener noreferrer">
                            Github ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;