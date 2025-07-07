import { Camera, Heart, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Stories' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const specialties = [
    'Urban Portrait Photography',
    'Automotive Photography',
    'Motorcycle Photography',
    'Street Photography Tours',
    'Custom Urban Projects'
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Camera className="w-8 h-8 text-orange-400 mr-3" />
              <span className="text-xl font-bold">Urban Lens Studio</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Capturing the raw energy and authentic stories of urban life through 
              portraits and automotive photography that celebrates city culture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Specialties</h3>
            <ul className="space-y-3">
              {specialties.map((specialty, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-gray-400">hello@urbanlensstudio.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-gray-400">Los Angeles, CA</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <h4 className="font-bold mb-2">Ready to Shoot?</h4>
              <p className="text-sm text-gray-400 mb-3">
                Let's create something amazing together
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Shot with</span>
              <Heart className="w-4 h-4 text-orange-400 mx-2" />
              <span>in LA © {currentYear} Urban Lens Studio. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;