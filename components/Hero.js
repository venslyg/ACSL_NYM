export function Hero() {
  return `
    <section id="home" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10"></div>
        <div class="w-full h-full bg-cover bg-center scale-105" style="background-image: url('assets/images/hero-bg.jpg');"></div>
      </div>
      
      <div class="relative z-20 text-center max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div class="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 mb-6 sm:mb-8 animate-pulse max-w-full">
          <span class="material-symbols-outlined text-primary text-xs sm:text-sm flex-shrink-0">auto_awesome</span>
          <span class="font-label-md text-[10px] sm:text-xs text-primary uppercase tracking-widest truncate">Apostolic Church's Youth Spiritual Awakening</span>
        </div>
        
        <h1 class="font-headline-lg text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          EMPOWERING THE <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-fixed">NEXT GENERATION</span> OF FAITH.
        </h1>
        
        <p class="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          We are a movement dedicated to unlock the spiritual potential of youth through prayer, community, and Worship.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none">
          <button id="hero-faith-btn" class="w-full sm:w-auto neon-glow-border px-8 py-3.5 sm:py-4 rounded-full font-label-md text-xs sm:text-sm text-primary uppercase flex items-center justify-center group bg-transparent border border-primary/50 cursor-pointer">
            Upcoming Events
            <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <a href="#about" class="w-full sm:w-auto glass-card px-8 py-3.5 sm:py-4 rounded-full font-label-md text-xs sm:text-sm text-on-surface uppercase border border-white/20 hover:bg-white/5 transition-all cursor-pointer text-center">
            Explore Ministry
          </a>
        </div>
      </div>
      
      <div class="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <a href="#about"><span class="material-symbols-outlined text-outline text-2xl">expand_more</span></a>
      </div>
    </section>
  `;
}
