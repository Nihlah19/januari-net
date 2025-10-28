const GamerAnimation = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[400px] animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {/* Central Gaming Icon */}
          <div className="relative mb-8">
            <div className="w-40 h-40 animate-cube-spin" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary rounded-2xl box-glow-cyan" style={{ transform: 'rotateY(0deg) translateZ(80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 border-2 border-secondary rounded-2xl box-glow-purple" style={{ transform: 'rotateY(90deg) translateZ(80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary rounded-2xl box-glow-cyan" style={{ transform: 'rotateY(180deg) translateZ(80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 border-2 border-secondary rounded-2xl box-glow-purple" style={{ transform: 'rotateY(-90deg) translateZ(80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary rounded-2xl box-glow-cyan" style={{ transform: 'rotateX(90deg) translateZ(80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 border-2 border-secondary rounded-2xl box-glow-purple" style={{ transform: 'rotateX(-90deg) translateZ(80px)' }} />
            </div>
          </div>

          {/* Gamer Text */}
          <h3 className="text-5xl md:text-7xl font-heading font-black text-center mb-6 animate-flicker">
            <span className="text-glow-cyan-strong text-primary">GAMER</span>
            <br />
            <span className="text-glow-purple-strong text-secondary">VIBES</span>
          </h3>

          {/* Animated Circles */}
          <div className="flex gap-6 mt-8">
            <div className="w-16 h-16 rounded-full border-2 border-primary animate-pulse box-glow-cyan" style={{ animationDelay: '0s' }} />
            <div className="w-16 h-16 rounded-full border-2 border-secondary animate-pulse box-glow-purple" style={{ animationDelay: '0.3s' }} />
            <div className="w-16 h-16 rounded-full border-2 border-primary animate-pulse box-glow-cyan" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Bottom Text */}
          <p className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-2xl mx-auto font-light text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Level up your <span className="text-primary text-glow-cyan font-semibold">creativity</span> with digital design
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamerAnimation;
