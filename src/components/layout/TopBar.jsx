import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="hidden border-b border-white/10 bg-dark-soft text-sm text-gray-300 lg:block"
    >
      <div className="container-site flex h-11 items-center justify-between">

        {/* SOCIAL */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="hover:text-brand"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="hover:text-brand"
            aria-label="Twitter"
          >
            <FaTwitter />
          </motion.a>
        </div>

        {/* TAGLINE */}
        <p className="text-center text-xs text-gray-400">
          Building Digital Solutions for Modern Businesses
        </p>

        {/* CONTACT INFO */}
        <ul className="flex items-center gap-5 text-xs">

          <li className="flex items-center gap-2">
            <FaPhone className="text-brand" />
            <a
              href="tel:+923001234567"
              className="transition-colors hover:text-brand"
            >
              +92 300 1234567
            </a>
          </li>

          <li className="flex items-center gap-2">
            <FaEnvelope className="text-brand" />
            <a
              href="mailto:info@znsoftsolutions.com"
              className="transition-colors hover:text-brand"
            >
              info@znsoftsolutions.com
            </a>
          </li>

          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-brand" />
            <span>Karachi, Pakistan</span>
          </li>

        </ul>

      </div>
    </motion.div>
  );
}