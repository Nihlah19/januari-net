import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 3D Animated Element */}
      <div className="absolute top-20 right-10 z-0 hidden lg:block">
        <div className="w-32 h-32 animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg box-glow-cyan" style={{ transform: "rotateY(0deg) translateZ(64px)" }} />
          <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary rounded-lg box-glow-purple" style={{ transform: "rotateY(90deg) translateZ(64px)" }} />
          <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg box-glow-cyan" style={{ transform: "rotateY(180deg) translateZ(64px)" }} />
          <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary rounded-lg box-glow-purple" style={{ transform: "rotateY(-90deg) translateZ(64px)" }} />
          <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg box-glow-cyan" style={{ transform: "rotateX(90deg) translateZ(64px)" }} />
          <div className="absolute inset-0 bg-secondary/20 border-2 border-secondary rounded-lg box-glow-purple" style={{ transform: "rotateX(-90deg) translateZ(64px)" }} />
        </div>
      </div>

      <div className="absolute bottom-20 left-10 z-0 hidden lg:block">
        <div className="w-24 h-24 animate-rotate-3d">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary rounded-lg box-glow-cyan" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 animate-flicker">
            <span className="text-glow-cyan-strong text-primary">JANUARI.NET</span>
            <br />
            <span className="text-glow-purple-strong text-secondary">DESIGN STUDIO</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            The Owner is <span className="text-primary text-glow-cyan font-semibold">Nihlah Auliya</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <a
              href="https://github.com/Nihlah19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground box-glow-purple hover:scale-105 transition-all duration-300 text-lg px-8 py-2 font-semibold rounded-lg"
            >
              Github
            </a>

            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary box-glow-cyan hover:scale-105 transition-all duration-300 text-lg px-8 font-semibold"
            >
              Lihat Portofolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground box-glow-purple hover:scale-105 transition-all duration-300 text-lg px-8 font-semibold"
            >
              Hubungi Saya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
