export default function Experience() {
    const experiences = [
        {
            role: "Consultant - Application Developer",
            company: "ThoughtWorks",
            duration: "Sep 2021 – Present",
            description: [
                "Worked on building customer accounting module for a European e-commerce platform's payment gateway.",
                "Developed multiple microservices to manage repayments, refunds, loan creations, and general ledger generation.",
                "Tech stack included Java, Spring Boot, MongoDB, Terraform, AWS, GitHub Actions.",
                "Collaborated closely with Product Owners, BAs, and Tech Leads to shape and implement features.",
                "Owned onboarding and mentoring of new joiners, led knowledge sharing and code reviews."
            ]
        },
        {
            role: "Student Mentor – Apprenticeship Program",
            company: "ThoughtWorks",
            duration: "Jun 2024 – Nov 2024",
            description: [
                "Led the apprenticeship program from planning to closure for final-year diploma students.",
                "Managed session planning, trainer coordination, feedback loops, and student assessments.",
                "Built internal tools to monitor performance, reviewed and designed assignments.",
                "Created a safe, interactive environment to help students grow in technical and soft skills."
            ]
        },
        {
            role: "STEP Intern (Software Developer)",
            company: "ThoughtWorks",
            duration: "Jul 2019 – Sep 2021",
            description: [
                "Underwent 26.5-month full-time training in software development, DevOps, agile, and best practices.",
                "Worked on a live full-stack project building a brand portal for onboarding products in SEA markets.",
                "Built UI components and backend services using React, Kotlin, PostgreSQL, and Azure DevOps."
            ]
        }
    ];

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                        <p className="text-gray-600 mb-1">{exp.company}</p>
                        <p className="text-sm text-gray-500 italic mb-4">{exp.duration}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
