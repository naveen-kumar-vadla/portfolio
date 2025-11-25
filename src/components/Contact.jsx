import {Mail, FileText} from 'lucide-react';
import {SiGithub, SiLinkedin} from 'react-icons/si';

export default function Contact() {
    return (
        <section className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">Contact Me</h2>

            <div className="bg-white shadow rounded p-8 text-center space-y-6">
                <p className="text-gray-700 text-lg">
                    I'm always open to exciting opportunities or conversations around backend systems, architecture,
                    and mentoring.
                    Let's connect!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-800 text-lg">
                    <a
                        href="mailto:vnaveenkumar9705@gmail.com"
                        className="flex items-center gap-2 hover:text-blue-600"
                    >
                        <Mail className="w-5 h-5"/>
                        vnaveenkumar9705@gmail.com
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vadla-naveen-kumar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-600"
                    >
                        <SiLinkedin className="w-5 h-5"/>
                        vadla-naveen-kumar
                    </a>

                    <a
                        href="https://github.com/naveen-kumar-vadla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-600"
                    >
                        <SiGithub className="w-5 h-5"/>
                        naveen-kumar-vadla
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-800 text-lg">
                    <a
                        href="https://drive.google.com/file/d/1axr9YRsyYFBjWRC15WztlCzFOIUvN-iL/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 mt-4 text-base font-medium"
                    >
                        <FileText className="w-5 h-5"/>
                        Resume - Backend Developer
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1o4fu13YIR2WkSmV5_uhfkfzKKQn5C8jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 mt-4 text-base font-medium"
                    >
                        <FileText className="w-5 h-5"/>
                        Resume - Full Stack Developer
                    </a></div>
            </div>
        </section>
    );
}
