import { Palette, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bouquetMoney from "@/assets/bouquet-money.jpg";
import bouquetFlower from "@/assets/bouquet-flower.jpg";

const Services = () => {
  const designServices = [
    "Logo & Brand Identity",
    "Social Media Content",
    "Banner & Poster Design",
    "UI/UX Design",
    "Custom Illustration",
    "CV & Portfolio Design",
  ];

  const bouquetTypes = [
    {
      name: "Buqet Uang",
      image: bouquetMoney,
      description: "Buqet uang elegan dengan desain custom untuk berbagai acara",
    },
    {
      name: "Buqet Bunga",
      image: bouquetFlower,
      description: "Buqet bunga segar dengan arrangement profesional",
    },
  ];

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan ${service}. Bisa info lebih lanjut?`);
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="text-glow-cyan text-primary">Jasa</span>{" "}
            <span className="text-glow-purple text-secondary">& Produk</span>
          </h2>
          <div className="w-24 h-1 gradient-neon mx-auto mb-12 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />

          {/* Design Services */}
          <div className="mb-16 animate-slide-in-left opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:border-primary transition-all duration-300 hover:box-glow-cyan">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-primary text-glow-cyan" />
                <h3 className="text-2xl font-heading font-bold">Jasa Desain Grafis</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {designServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${0.4 + index * 0.05}s`, animationFillMode: 'forwards' }}
                  >
                    <ArrowRight className="w-4 h-4 text-secondary" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-primary/20">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Harga mulai dari</p>
                  <p className="text-2xl font-bold text-primary text-glow-cyan">Rp 50.000</p>
                </div>
                <Button
                  onClick={() => handleWhatsApp("Jasa Desain Grafis")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:scale-105 transition-all duration-300"
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </div>

          {/* Bouquet Products */}
          <div className="bg-card border-2 border-secondary/20 rounded-lg p-8 hover:border-secondary transition-all duration-300 hover:box-glow-purple animate-slide-in-right opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-secondary text-glow-purple" />
              <h3 className="text-2xl font-heading font-bold">
                Produk <span className="text-secondary text-glow-purple">Buqet Custom</span>
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {bouquetTypes.map((bouquet, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 animate-scale-in opacity-0"
                  style={{ animationDelay: `${0.8 + index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={bouquet.image}
                      alt={bouquet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary">{bouquet.name}</h4>
                      <p className="text-xs text-muted-foreground">{bouquet.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-secondary/20">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-1">Harga mulai dari</p>
                <p className="text-2xl font-bold text-secondary text-glow-purple">Rp 75.000</p>
              </div>
              <Button
                onClick={() => handleWhatsApp("Produk Buqet Custom")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 box-glow-purple hover:scale-105 transition-all duration-300"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
