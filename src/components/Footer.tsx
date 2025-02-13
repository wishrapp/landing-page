import React from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Gift className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold">wishr</span>
            </Link>
            <p className="text-gray-600">Your wish list, your way.</p>
          </div>

          {/* Links and Legal sections container - side by side on mobile */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Links section */}
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-600 hover:text-purple-600">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
                <li><Link to="/wishlist/occasions" className="text-gray-600 hover:text-purple-600">Occasions</Link></li>
              </ul>
            </div>

            {/* Legal section */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Social section */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon 
                url="https://instagram.com/"
                network="instagram" 
                fgColor="#9333EA" 
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
              />
              <SocialIcon 
                url="https://x.com/wishr_com"
                network="x" 
                fgColor="#9333EA" 
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
              />
              <SocialIcon 
                url="https://facebook.com"
                network="facebook" 
                fgColor="#9333EA" 
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
              />
              <SocialIcon 
                url="https://youtube.com"
                network="youtube" 
                fgColor="#9333EA" 
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
              />
              <SocialIcon 
                url="https://www.tiktok.com/@wishr_com"
                network="tiktok" 
                fgColor="#9333EA" 
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
              />
            </div>
            <p className="text-gray-600 mt-4">© 2025 Wishr.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}