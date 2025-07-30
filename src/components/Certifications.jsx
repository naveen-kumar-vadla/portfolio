export default function Certifications() {
    const groupedCerts = {
        HashiCorp: [
            {
                name: "Terraform Associate (003)",
                date: "May 2025 – May 2027",
                url: "https://www.credly.com/badges/4d7f6506-4e15-4942-aeb1-8b92d06d1ddc/linked_in_profile",
            },
        ],
        MongoDB: [
            {
                name: "SI Associate Certification Program",
                date: "Nov 2023",
                url: "https://learn.mongodb.com/c/mjxqnFTqTBmthtwBABBz2w",
            },
        ],
        HackerRank: [
            {
                name: "Java (Basic)",
                date: "Mar 2024",
                url: "https://www.hackerrank.com/certificates/3612796b09bc",
            },
            {
                name: "JavaScript (Basic)",
                date: "Mar 2024",
                url: "https://www.hackerrank.com/certificates/67dea28a7730",
            },
            {
                name: "CSS (Basic)",
                date: "Mar 2024",
                url: "https://www.hackerrank.com/certificates/130a4338b9e0",
            },
            {
                name: "Problem Solving (Basic)",
                date: "Sep 2022",
                url: "https://www.hackerrank.com/certificates/f6b9b1430976",
            },
        ],
        Udemy: [
            {
                name: "Clean Code with Java – Refactoring & TDD",
                date: "Nov 2021",
                url: "http://ude.my/UC-dc121e81-ae3c-4b7e-a196-961cebf047b9",
            },
            {
                name: "Mockito – Next-Level Java Unit Testing",
                date: "Oct 2021",
                url: "https://www.udemy.com/certificate/UC-4b29946d-8810-4403-845d-720b6f6b9c45/",
            },
            {
                name: "Practical Java Unit Testing with JUnit 5",
                date: "Oct 2021",
                url: "https://www.udemy.com/certificate/UC-563a55e3-0d76-485a-bc8a-b21168812fe9/",
            },
            {
                name: "The Complete Splunk Beginner Course 2022",
                date: "Apr 2022",
                url: "https://www.udemy.com/certificate/UC-5cb79134-acdb-4f3b-9c75-dc1886cc585f/",
            },
        ],
    };

    return (
        <section id="certifications" className="max-w-5xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">Certifications</h2>

            {Object.entries(groupedCerts).map(([provider, certs]) => (
                <div key={provider} className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">{provider}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {certs.map((cert, idx) => (
                            <div key={idx} className="p-4 bg-white shadow rounded">
                                <h4 className="text-lg font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                <p className="text-sm text-gray-600 mb-2">{cert.date}</p>
                                {cert.url && (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        View Credential
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
