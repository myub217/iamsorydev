import { FC, ReactNode } from 'react';
import { Github, Facebook, Twitter, Youtube, Globe } from 'lucide-react';

interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

const socials: SocialLink[] = [
  {
    href: 'https://github.com/iamsorydev',
    label: 'GitHub',
    icon: <Github size={20} />,
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: <Facebook size={20} />,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: <Twitter size={20} />,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: <Youtube size={20} />,
  },
  {
    href: 'https://jp-system.dev',
    label: 'Website',
    icon: <Globe size={20} />,
  },
];

const SocialIcons: FC = () => (
  <div className="flex items-center gap-4">
    {socials.map(({ href, label, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        {icon}
      </a>
    ))}
  </div>
);

<<<<<<< HEAD
export default SocialIcons;
=======
<<<<<<< HEAD
export default SocialIcons;
=======
export default SocialIcons;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
