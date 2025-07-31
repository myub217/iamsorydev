<<<<<<< HEAD
import { FC } from 'react';
import { FaLine, FaInstagram, FaEnvelope } from 'react-icons/fa';
=======
<<<<<<< HEAD
import { FC } from "react";
import { FaLine, FaInstagram, FaEnvelope } from "react-icons/fa";
>>>>>>> b269264 (update)

const socialLinks = [
  {
    href: 'https://line.me/ti/p/@462FQFC',
    label: 'LINE',
    text: 'LINE: @462FQFC',
    icon: <FaLine className="text-lg text-primary" aria-hidden="true" />,
  },
  {
    href: 'https://www.instagram.com/jpsystem.official',
    label: 'Instagram',
    text: '@jpsystem.official',
    icon: <FaInstagram className="text-lg text-primary" aria-hidden="true" />,
  },
  {
<<<<<<< HEAD
    href: 'mailto:contact@jpsystem.dev',
    label: 'Email',
    text: 'contact@jpsystem.dev',
=======
    href: "mailto:contact@jpsystem.dev",
    label: "Email",
    text: "contact@jpsystem.dev",
=======
import { FC } from 'react';
import { FaLine, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://line.me/ti/p/@462FQFC',
    label: 'LINE',
    text: 'LINE: @462FQFC',
    icon: <FaLine className="text-lg text-primary" aria-hidden="true" />,
  },
  {
    href: 'https://www.instagram.com/jpsystem.official',
    label: 'Instagram',
    text: '@jpsystem.official',
    icon: <FaInstagram className="text-lg text-primary" aria-hidden="true" />,
  },
  {
    href: 'mailto:contact@jpsystem.dev',
    label: 'Email',
    text: 'contact@jpsystem.dev',
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
    icon: <FaEnvelope className="text-lg text-primary" aria-hidden="true" />,
  },
];

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-neutral-800 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <nav
          className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 text-sm"
          aria-label="Footer Social Links"
        >
          {socialLinks.map(({ href, label, text, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {icon}
              <span className="sr-only">{label}</span>
              <span>{text}</span>
            </a>
          ))}
        </nav>

        <p className="text-xs text-neutral-500">
          &copy; {currentYear} Applicationlab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
