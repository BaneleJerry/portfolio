type Job = {
    id: number;
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    bullets: string[];
}

type Education = {
    id: number;
    school: string;
    degree: string;
    year: string;
}

const jobs: Job[] = [
    {
        id: 1,
        role: "Junior Technician — IT Field Services",
        company: "TVR Systems",
        startDate: "Jul 2025",
        endDate: "Present",
        bullets: [
            "Deployed and configured Konica multifunction printers across multiple provinces as part of a national rollout project.",
            "Delivered on-site technical support, diagnosing and resolving printer, connectivity, and network-related issues under strict deadlines.",
            "Collaborated with senior technicians on large-scale enterprise deployments, gaining hands-on exposure to infrastructure setup and client-facing delivery."
        ]
    },
    {
        id: 2,
        role: "Floor Salesperson",
        company: "Pick n Pay",
        startDate: "Aug 2024",
        endDate: "Jul 2025",
        bullets: [
            "Assisted customers with tailored product recommendations, maintained stock displays, and handled transactions.",
            "Contributed to improved customer satisfaction and repeat sales through proactive service."
        ]
    }
];

const education: Education[] = [
    {
        id: 1,
        school: "Boston City Campus",
        degree: "Diploma in Systems Development",
        year: "2021 - 2024"
    },
    {
        id: 2,
        school: "Codecademy",
        degree: "Back-End Engineer Certification",
        year: "2024"
    },
    {
        id: 3,
        school: "Harvard University (edX)",
        degree: "CS50x: Introduction to Computer Science",
        year: "2023"
    }
];


const Experience = () => {
    return (
        <section className="section" id="experience">
            <p className="section__label">03 - experience</p>
            <h2 className="section__heading">Where I've <em>worked.</em></h2>
            <div className="experience__list">
                {jobs.map((job) => (
                    <div key={job.id} className="experience__item">
                        <div className="experience__date">
                            {job.startDate} - {job.endDate ?? "Present"}
                        </div>
                        <div className="experience__content">
                            <h3 className="experience__role">{job.role}</h3>
                            <p className="experience__company">{job.company}</p>
                            <ul className="experience__bullets">
                                {job.bullets.map((bullet) => (
                                    <li key={bullet} className="exprience__bullet">{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}


export default Experience;