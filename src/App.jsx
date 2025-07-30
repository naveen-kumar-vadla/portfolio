import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LineSeparator from './components/LineSeparator';
import {Section} from "lucide-react";

export default function App() {
    return (
        <div className="bg-gray-50">
            <Navbar/>
            <main className="pt-24">
                <section id="home" className="scroll-mt-24">
                    <Home/>
                    <LineSeparator/>
                </section>
                <section id="about" className="scroll-mt-24">
                    <About/>
                    <LineSeparator/>
                </section>
                <section id="skills" className="scroll-mt-24">
                    <Skills/>
                    <LineSeparator/>
                </section>
                <section id="experience" className="scroll-mt-24">
                    <Experience/>
                    <LineSeparator/>
                </section>
                <section id="contact" className="scroll-mt-24">
                    <Contact/>
                    <LineSeparator/>
                </section>
            </main>
            <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t">
                © {new Date().getFullYear()} Naveen Kumar Vadla. All rights reserved.
            </footer>
        </div>
    );
}