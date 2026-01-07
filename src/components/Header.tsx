import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a 
          href="#" 
          className="font-mono text-sm font-medium text-heading hover:text-primary transition-colors"
        >
          Home
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-subtle hover:text-heading transition-colors link-underline"
              >
                <span className="font-mono text-xs text-primary mr-1">0{index + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs px-4 py-2 border border-primary text-primary rounded hover:bg-primary/5 transition-colors"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
