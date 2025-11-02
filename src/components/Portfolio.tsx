import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/websklh.png";
import project2 from "@/assets/webbuqet.png";
import project3 from "@/assets/uiux.png";
import project4 from "@/assets/webbuqet.png";

const Portfolio = () => {
  const projects = [
    {
      title: "School Information Website",
      category: "Website",
      image: project1,
      description: "Website informasi sekolah yang menampilkan profil, data guru, jadwal, dan berita sekolah dengan tampilan modern dan sistem navigasi yang responsif.",
    },
    {
      title: "Website Toko Online",
      category: "Website",
      image: project2,
      description: "Platform e-commerce sederhana dengan fitur katalog produk, keranjang belanja, dan sistem checkout yang dirancang menggunakan teknologi front-end interaktif.",
    },
    {
      title: "UI/UX Design",
      category: "Web Design",
      image: project3,
      description: "Desain antarmuka pengguna untuk tampilan website CIRESA.AI sebuah website yang didesain untuk menampilkan sebuah rekomendasi tempat makan dan resep otomatis dengan bantuan Ai & ML. ",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="text-glow-cyan text-primary">Portfolio</span> <span className="text-glow-purple text-secondary">Project</span>
          </h2>
          <div className="w-24 h-1 gradient-neon mx-auto mb-4 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }} />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Berikut beberapa karya desain terbaik yang telah saya kerjakan
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:box-glow-cyan animate-scale-in opacity-0"
                style={{ animationDelay: `${0.4 + index * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-secondary text-glow-purple uppercase tracking-wider">{project.category}</span>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Social Media */}
          <div className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground box-glow-cyan hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/nhlhauly", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Lihat Semua di Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
