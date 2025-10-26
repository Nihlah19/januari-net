import { Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contacts = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      value: "+62 812-3456-7890",
      link: "https://wa.me/6281234567890",
      color: "primary",
    },
    {
      icon: Instagram,
      name: "Instagram",
      value: "@xieee.design",
      link: "https://instagram.com",
      color: "secondary",
    },
    {
      icon: Mail,
      name: "Email",
      value: "xieee.design@gmail.com",
      link: "mailto:xieee.design@gmail.com",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in-up">
            <span className="text-glow-cyan text-primary">Hubungi</span>{" "}
            <span className="text-glow-purple text-secondary">Saya</span>
          </h2>
          <div className="w-24 h-1 gradient-neon mx-auto mb-4 rounded-full animate-fade-in-up" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Punya project atau pertanyaan? Jangan ragu untuk menghubungi saya melalui platform di bawah ini
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div
                  className={`bg-card border-2 ${
                    contact.color === "primary" ? "border-primary/20 hover:border-primary hover:box-glow-cyan" : "border-secondary/20 hover:border-secondary hover:box-glow-purple"
                  } rounded-lg p-6 transition-all duration-300 hover:scale-105 text-center space-y-3`}
                >
                  <contact.icon
                    className={`w-12 h-12 mx-auto ${
                      contact.color === "primary" ? "text-primary text-glow-cyan" : "text-secondary text-glow-purple"
                    } group-hover:animate-glow-pulse`}
                  />
                  <h3 className="font-heading font-bold text-lg">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:border-primary transition-all duration-300 hover:box-glow-cyan animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Siap Untuk Memulai Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Mari wujudkan ide kreatif Anda bersama! Hubungi saya sekarang untuk konsultasi gratis.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/6281234567890?text=Halo!%20Saya%20ingin%20konsultasi%20project", "_blank")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:scale-105 transition-all duration-300 text-lg px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Mulai Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
