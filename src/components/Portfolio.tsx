import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectLogo from "@/assets/project-logo.jpg";
import projectSocial from "@/assets/project-social.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity Design",
      category: "Logo & Branding",
      image: projectLogo,
      description: "Modern logo design dengan konsep futuristik untuk brand tech startup",
    },
    {
      title: "Social Media Content",
      category: "Content Design",
      image: projectSocial,
      description: "Desain konten media sosial dengan aesthetic cyberpunk untuk campaign digital",
    },
    {
      title: "UI/UX Design",
      category: "Web Design",
      image: projectLogo,
      description: "User interface design untuk aplikasi mobile dengan neon aesthetic",
    },
    {
      title: "Creative Banner",
      category: "Marketing",
      image: projectSocial,
      description: "Banner promosi dengan desain eye-catching dan modern",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            <span className="text-glow-cyan text-primary">Portfolio</span>{" "}
            <span className="text-glow-purple text-secondary">Project</span>
          </h2>
          <div className="w-24 h-1 gradient-neon mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Berikut beberapa karya desain terbaik yang telah saya kerjakan
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:box-glow-cyan"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-secondary text-glow-purple uppercase tracking-wider">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Social Media */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground box-glow-cyan hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://instagram.com", "_blank")}
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
