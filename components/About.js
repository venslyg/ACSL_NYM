export function About() {
  return `
    <!-- Bento Grid Section -->
    <section id="about" class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative overflow-hidden scroll-mt-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-16">
        <div class="md:col-span-8">
          <div class="relative inline-block mb-4">
            <span class="font-label-md text-secondary tracking-[0.2em] uppercase">Forging the Future</span>
            <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
          </div>
          <h2 class="font-headline-lg text-headline-lg mb-4">Our DNA</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant">Forging a path for the digitally native generation to encounter the timeless power of the Gospel.</p>
        </div>
      </div>
      
      <!-- Bento Layout -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-32">
        <!-- Vision Card (Large) -->
        <div class="md:col-span-8 relative glass-card rounded-xl p-8 md:p-12 overflow-hidden group">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20"></div>
          <div class="relative z-10">
            <span class="material-symbols-outlined text-secondary-container text-4xl mb-6" style="font-variation-settings: 'FILL' 1;">visibility</span>
            <h3 class="font-headline-lg text-headline-lg mb-4">Our Vision</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">To see a globally connected generation of young people activated in their divine purpose, operating with spiritual authority and technological excellence to redefine what it means to be a modern disciple.</p>
          </div>
          <div class="absolute bottom-[-15%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <span class="material-symbols-outlined text-[200px]" style="font-variation-settings: 'wght' 100;">hub</span>
          </div>
        </div>
        
        <!-- Mission Card (Medium) -->
        <div class="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-center relative overflow-hidden group">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20" style="animation-delay: 1s;"></div>
          <span class="material-symbols-outlined text-tertiary text-4xl mb-6" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
          <h3 class="font-headline-md text-headline-md mb-4">Our Mission</h3>
          <p class="font-body-md text-body-md text-on-surface-variant">Equipping youth through high-energy worship, deep doctrinal study, and hands-on digital ministry to carry the message of Jesus Christ into every corner of the modern world.</p>
        </div>
        
        <!-- Values Bento Items -->
        <div class="md:col-span-4 glass-card rounded-xl p-8 group relative overflow-hidden">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20" style="animation-delay: 1.5s;"></div>
          <span class="font-label-md text-primary mb-4 block">VALUE 01</span>
          <h4 class="font-headline-md text-headline-md text-xl mb-2">Radical Integrity</h4>
          <p class="font-body-md text-on-surface-variant">Walking in holiness both in the physical and digital realms.</p>
        </div>
        
        <div class="md:col-span-4 glass-card rounded-xl p-8 group relative overflow-hidden">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20" style="animation-delay: 2s;"></div>
          <span class="font-label-md text-primary mb-4 block">VALUE 02</span>
          <h4 class="font-headline-md text-headline-md text-xl mb-2">Tech Excellence</h4>
          <p class="font-body-md text-on-surface-variant">Using every tool available to amplify the Gospel with modern precision.</p>
        </div>
        
        <div class="md:col-span-4 glass-card rounded-xl p-8 group relative overflow-hidden">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20" style="animation-delay: 2.5s;"></div>
          <span class="font-label-md text-primary mb-4 block">VALUE 03</span>
          <h4 class="font-headline-md text-headline-md text-xl mb-2">Deep Unity</h4>
          <p class="font-body-md text-on-surface-variant">A brotherhood and sisterhood forged in the Spirit, unbreakable and inclusive.</p>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30 border-t border-b border-white/5">
      <div class="text-center mb-20">
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">The Command Center</h2>
        <p class="font-body-md text-on-surface-variant uppercase tracking-widest text-sm">Our Leadership Team</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        <!-- Leader 1 -->
        <div class="w-full max-w-sm flex flex-col group">
          <div class="relative mb-6">
            <div class="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary-container rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative glass-card rounded-xl overflow-hidden aspect-square">
              <img alt="Marcus Chen" class="w-full h-full object-cover" src="assets/images/leader-marcus.jpg"/>
              <div class="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                <span class="font-label-md text-secondary text-xs uppercase tracking-tighter">National Director</span>
              </div>
            </div>
          </div>
          <h3 class="font-headline-md text-headline-md text-center group-hover:text-primary transition-colors">Marcus Chen</h3>
          <p class="font-body-md text-on-surface-variant text-center">Visionary & Lead Coordinator</p>
        </div>
        
        <!-- Leader 2 -->
        <div class="w-full max-w-sm flex flex-col group">
          <div class="relative mb-6">
            <div class="absolute -inset-1 bg-gradient-to-tr from-tertiary to-error rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative glass-card rounded-xl overflow-hidden aspect-square">
              <img alt="Elena Rodriguez" class="w-full h-full object-cover" src="assets/images/leader-elena.jpg"/>
              <div class="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                <span class="font-label-md text-tertiary text-xs uppercase tracking-tighter">Communications</span>
              </div>
            </div>
          </div>
          <h3 class="font-headline-md text-headline-md text-center group-hover:text-tertiary transition-colors">Elena Rodriguez</h3>
          <p class="font-body-md text-on-surface-variant text-center">Engagement & Outreach</p>
        </div>
        
        <!-- Join the Team Card -->
        <div class="w-full max-w-sm flex flex-col group">
          <div class="relative mb-6">
            <div class="absolute -inset-1 bg-gradient-to-tr from-secondary-container to-primary rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div class="relative glass-card rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 bg-surface-container/50">
              <div class="text-center cursor-pointer select-none">
                <span class="material-symbols-outlined text-on-surface-variant text-6xl mb-4 group-hover:text-primary transition-colors">add_circle</span>
                <p class="font-label-md text-outline uppercase tracking-wider">Join the Team</p>
              </div>
            </div>
          </div>
          <h3 class="font-headline-md text-headline-md text-center group-hover:text-primary transition-colors">Your Name Here</h3>
          <p class="font-body-md text-on-surface-variant text-center">Apply for Leadership</p>
        </div>
      </div>
    </section>
  `;
}
