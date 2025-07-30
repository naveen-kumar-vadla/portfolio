import {useState} from "react";
import {Menu, X} from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <a href="#" className="hover:text-blue-600">Naveen Kumar Vadla</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-blue-600">Home</a>
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#skills" className="hover:text-blue-600">Skills</a>
                    <a href="#experience" className="hover:text-blue-600">Experience</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col">
                    {[
                        {name: "Home", href: "#home"},
                        {name: "About", href: "#about"},
                        {name: "Skills", href: "#skills"},
                        {name: "Experience", href: "#experience"},
                        {name: "Contact", href: "#contact"},
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="w-full px-4 py-3 hover:bg-gray-100 text-gray-800"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
