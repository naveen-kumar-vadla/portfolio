export default function Skills() {
    const groupedSkills = {
        Languages: ["Java", "JavaScript", "TypeScript", "Python (Basic)", "C", "Bash"],
        Frameworks: ["Spring Boot", "React", "Node.js", "Tailwind CSS"],
        Databases: ["MongoDB", "PostgreSQL", "Redis", "SQLite3"],
        CloudInfra: ["AWS", "Terraform", "Docker", "GitHub Actions"],
        DeveloperTools: ["Git", "CI/CD", "TDD", "Clean Code", "Refactoring", "Agile"],
        SoftSkills: [
            "Mentoring",
            "Teaching",
            "Pair Programming",
            "System Design",
            "Performance Management",
            "Constructive Feedback"
        ]
    };

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">Skills</h2>
            <div className="space-y-12">
                {Object.entries(groupedSkills).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-white shadow rounded text-center text-gray-800 font-medium"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
