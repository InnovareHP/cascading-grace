import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "#about-us" },
    { label: "Services", to: "#services" },
    { label: "Gallery", to: "#gallery" },
    { label: "Mission, Vision & Values", to: "#mission-vision" },
    { label: "Who we serve", to: "#who-we-serve" },
    { label: "Contact Us", to: "#contact-us" },
  ];

  return (
    <footer className="bg-[#4e9e45] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Simplified 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-200">
              {links.map(({ label, to }, i) => (
                <li key={i}>
                  <Link
                    to={to}
                    className="hover:text-white transition-colors text-lg"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              Connect With Us
            </h3>
            <p className="text-gray-200 mb-6 text-lg">
              Stay connected through our social platforms.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/share/16aDgv2gBQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/cascading-grace/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Legal & Powered By */}
        <div className="text-center space-y-4 text-gray-200 text-lg">
          <div className="text-gray-300">
            © {new Date().getFullYear()} Cascading Grace. All Rights Reserved.
          </div>

          <div className="text-sm text-gray-200 tracking-wide">
            Powered by{" "}
            <a
              href="https://innovarehp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white"
            >
              Innovare HP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
