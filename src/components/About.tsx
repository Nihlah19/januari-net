import { Code, Palette, Sparkles, Flower2 } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const skills = [
    { icon: Palette, name: "Graphic Design", description: "Logo, Banner, Content" },
    { icon: Code, name: "UI/UX Design", description: "Web & App Interface" },
    { icon: Sparkles, name: "Content Creation", description: "Social Media Design" },
    { icon: Flower2, name: "Bouquet Craft", description: "Custom Gift Bouquet" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="text-glow-cyan text-primary">Tentang</span>{" "}
            <span className="text-glow-purple text-secondary">Saya</span>
          </h2>
          <div className="w-24 h-1 gradient-neon mx-auto mb-12 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }} />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="relative group">
                <div className="absolute -inset-1 gradient-neon rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/50"
                />
              </div>
            </div>

            {/* Bio & Quote */}
            <div className="space-y-6 animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  Halo! Saya desainer grafis dan kreator yang passionate dalam menciptakan visual estetik dengan sentuhan futuristik. 
                  Dengan pengalaman di berbagai projek desain dan kerajinan buqet custom, saya siap mewujudkan ide kreatif Anda.
                </p>
                
                <blockquote className="border-l-4 border-secondary pl-4 italic text-lg text-secondary text-glow-purple animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  "Mendesain bukan sekadar visual, tapi pengalaman."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-card border-2 border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:box-glow-cyan animate-scale-in opacity-0"
                style={{ animationDelay: `${0.7 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <skill.icon className="w-12 h-12 text-primary text-glow-cyan group-hover:animate-glow-pulse" />
                  <h3 className="font-heading font-bold text-lg">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
