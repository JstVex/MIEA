import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-green-700 text-white pt-10 pb-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">
                            Myanmar International Education Academy
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">Contact Information</h3>
                        <ul className="mt-2">
                            <li>Email: miea@gmail.com, example@gmail.com</li>
                            <li>Phone: +95 123-456-7890, +01 478-345-32</li>
                            <li>Address: 123 School Street, Township, Yangon, Myanmar</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 border-t border-white pt-3">
                    <p className="text-lg font-semibold">&copy; 2023. All rights reserved. Designed and powered by JstVex, an alumni</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;