export function Hero() {
  return `
    <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10"></div>
        <div class="w-full h-full bg-cover bg-center scale-105" style="background-image: url('assets/images/hero-bg.jpg');"></div>
      </div>
      
      <div class="relative z-20 text-center max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div class="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-8 animate-pulse">
          <span class="material-symbols-outlined text-primary text-sm">bolt</span>
          <span class="font-label-md text-xs text-primary uppercase tracking-widest">Digital Ministry Awakening</span>
        </div>
        
        <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
          EMPOWERING THE <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-fixed">NEXT GENERATION</span> OF FAITH.
        </h1>
        
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          We are a movement dedicated to unlocking the spiritual potential of youth through technology, community, and authentic apostolic tradition. Join the mission to redefine the future.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button id="hero-faith-btn" class="neon-glow-border px-8 py-4 rounded-full font-label-md text-primary uppercase flex items-center group bg-transparent border border-primary/50 cursor-pointer">
            Faith in Action Event
            <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <a href="#about" class="glass-card px-8 py-4 rounded-full font-label-md text-on-surface uppercase border border-white/20 hover:bg-white/5 transition-all cursor-pointer">
            Explore Ministry
          </a>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <a href="#about"><span class="material-symbols-outlined text-outline">expand_more</span></a>
      </div>
    </section>
  `;
}
