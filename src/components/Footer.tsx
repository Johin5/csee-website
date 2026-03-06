export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/Sb239Y6/cs-logo-light.png" 
                alt="Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/60 max-w-xs">
              We create what brands overlook. A unified marketing intelligence agency turning opportunity into impact.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Waitlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Change Log
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase mb-4 text-white">Social</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
