import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
    { icon: MessageCircle, link: "https://wa.me/6281234567890", label: "WhatsApp" },
    { icon: Mail, link: "mailto:xieee.design@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo/Name */}
            <h3 className="text-3xl font-heading font-black">
              <span className="text-glow-cyan text-primary">XIEEE</span>
              <span className="text-muted-foreground"> DESIGN</span>
            </h3>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group"
                >
                  <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-all duration-300 group-hover:text-glow-cyan group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Xieee Design Studio. All rights reserved.
              <br />
              <span className="text-xs">Crafted with 💙 in Neon</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 gradient-neon opacity-10 blur-3xl rounded-full" />
    </footer>
  );
};

export default Footer;
