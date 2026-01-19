import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react'; // Make sure you have lucide-react or use your own icons

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
               {/* Inverted Logo: White box, black text */}
               <div className="bg-white text-black px-2 py-0.5 rounded-sm text-sm font-black tracking-tighter">
                  CA
               </div>
               <span>MONK</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of financial leaders with tools, community, and knowledge.
            </p>
          </div>

          {/* 2. Resources */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* 3. Platform */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Job Board</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Practice Tests</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Mentorship</Link></li>
            </ul>
          </div>

          {/* 4. Connect */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                  <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                  </Link>
              </li>
              <li>
                  <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" /> Twitter
                  </Link>
              </li>
              <li>
                  <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" /> Instagram
                  </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 CA Monk. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}