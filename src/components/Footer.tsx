import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Three Column Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 justify-items-center lg:justify-items-start">
          {/* About Us Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              About Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors text-xl"
                >
                  The Cascading Grace Story
                </Link>
              </li>
              <li>
                <a
                  href="/#mission"
                  className="hover:text-white transition-colors text-xl"
                >
                  Mission & Values
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors text-xl"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors text-xl"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/referral"
                  className="hover:text-white transition-colors text-xl"
                >
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  24/7 Personalized Support
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Daily Living Services
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Health & Wellness
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Faith-Inspired Enrichment
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Specialized Support
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-white transition-colors text-xl"
                >
                  Respite Care
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="/resources/health-wellness"
                  className="hover:text-white transition-colors text-xl"
                >
                  Health & Wellness
                </a>
              </li>
              <li>
                <a
                  href="/resources/care-planning"
                  className="hover:text-white transition-colors text-xl"
                >
                  Care Planning
                </a>
              </li>
              <li>
                <a
                  href="/resources/finance"
                  className="hover:text-white transition-colors text-xl"
                >
                  Finance & Planning
                </a>
              </li>
              <li>
                <a
                  href="/resources/lifestyle"
                  className="hover:text-white transition-colors text-xl"
                >
                  Lifestyle & Activities
                </a>
              </li>
              <li>
                <a
                  href="/resources/faq"
                  className="hover:text-white transition-colors text-xl"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Legal Links and Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-lg text-gray-400">
          <a href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
          <span className="text-gray-600">|</span>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms and Conditions
          </a>
          <span className="text-gray-600">|</span>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="/hipaa" className="hover:text-white transition-colors">
            HIPAA Policy
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/accessibility"
            className="hover:text-white transition-colors"
          >
            Accessibility
          </a>
          <span className="text-gray-600">|</span>
          <span>©{new Date().getFullYear()} Cascading Grace</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
