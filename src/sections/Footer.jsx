import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

function Footer() {
  return (
    <footer id="footer" className="w-full">
      <div className="lg:w-[80%] w-[90%] mx-auto px-4 py-8">
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Logo and Description */}
          <motion.div
            variants={zoomInVariants}
            className="space-y-4"
            role="region"
            aria-label="Company Information"
          >
            <img src={logo} alt="Aurora Builders Logo" className="h-12 w-auto" />
            <p className="text-[#A0AEC0] text-sm lg:text-base max-w-[300px]">
              Building your vision with 25 years of expertise in sustainable and innovative construction solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={zoomInVariants}>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                  aria-label="Go to Home page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                  aria-label="Go to About page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                  aria-label="Go to Projects page"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                  aria-label="Go to Contact page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={zoomInVariants}>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[#A0AEC0] text-sm lg:text-base">
              <li>123 Builder Street</li>
              <li>Seattle, WA, USA</li>
              <li>
                <a href="tel:+12065550123" aria-label="Call us at +1 (206) 555-0123">
                  Phone: +1 (206) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:info@aurorabuilders.com" aria-label="Email us at info@aurorabuilders.com">
                  Email: info@aurorabuilders.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={zoomInVariants}>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F7F3] p-2 rounded-full hover:bg-[#F4A261] hover:text-[#2B3A55] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-[#2B3A55]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F7F3] p-2 rounded-full hover:bg-[#F4A261] hover:text-[#2B3A55] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-5 h-5 text-[#2B3A55]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F7F3] p-2 rounded-full hover:bg-[#F4A261] hover:text-[#2B3A55] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5 text-[#2B3A55]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F7F3] p-2 rounded-full hover:bg-[#F4A261] hover:text-[#2B3A55] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5 text-[#2B3A55]" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="border-t border-[#A0AEC0]/20 mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#A0AEC0] text-sm lg:text-base">
              © {new Date().getFullYear()} Aurora Builders. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="/privacy"
                className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#A0AEC0] hover:text-[#F4A261] text-sm lg:text-base transition-colors"
                aria-label="View Terms of Service"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;