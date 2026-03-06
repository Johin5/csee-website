import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-blue/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co/Sb239Y6/cs-logo-light.png" 
            alt="Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#blog" className="hover:text-white transition-colors">
            Blog
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#get-started"
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            Log in
          </a>
          <a
            href="#get-started"
            className="bg-primary text-black px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            Get started
          </a>
        </div>

        <button className="md:hidden p-2 text-white/60 hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
