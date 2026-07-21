export function About() {
  return `
    <section id="about" class="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative overflow-hidden scroll-mt-20">
      
      <!-- Section Header -->
      <div class="mb-12">
        <div class="relative inline-block mb-4">
          <span class="font-label-md text-secondary tracking-[0.2em] uppercase">Who We Are</span>
          <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
        </div>
        <h2 class="font-headline-lg text-headline-lg mb-4">Our Vision & Mission</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Empowering young believers across Sri Lanka to stand firm in faith, grow in spiritual maturity, and impact their communities.
        </p>
      </div>

      <!-- Vision & Mission Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <!-- Vision Card -->
        <div class="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group border-primary/20">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-xl bg-secondary-container/10 border border-secondary-container/30 flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-secondary-container text-3xl" style="font-variation-settings: 'FILL' 1;">visibility</span>
            </div>
            <h3 class="font-headline-lg text-2xl md:text-3xl mb-4 text-secondary">Our Vision</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              To see a globally connected generation of young people activated in their divine purpose, operating with spiritual authority and kingdom excellence to redefine what it means to be a modern disciple.
            </p>
          </div>
          <div class="absolute bottom-[-15%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <span class="material-symbols-outlined text-[180px]" style="font-variation-settings: 'wght' 100;">hub</span>
          </div>
        </div>

        <!-- Mission Card -->
        <div class="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group border-primary/20">
          <div class="scanner-line absolute top-0 left-0 w-full opacity-20" style="animation-delay: 1s;"></div>
          <div class="relative z-10">
            <div class="w-14 h-14 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-tertiary text-3xl" style="font-variation-settings: 'FILL' 1;">rocket_launch</span>
            </div>
            <h3 class="font-headline-lg text-2xl md:text-3xl mb-4 text-tertiary">Our Mission</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Equipping youth through high-energy worship, deep doctrinal study, and hands-on ministry to carry the message of Jesus Christ into every corner of Sri Lanka and beyond.
            </p>
          </div>
          <div class="absolute bottom-[-15%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <span class="material-symbols-outlined text-[180px]" style="font-variation-settings: 'wght' 100;">church</span>
          </div>
        </div>

      </div>

      <!-- Introduction to the Apostolic Church of Sri Lanka -->
      <div class="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/30 bg-surface-container-lowest/50">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-3xl">church</span>
          </div>
          <div>
            <span class="font-label-md text-xs text-primary uppercase tracking-widest">National Church Movement</span>
            <h3 class="font-headline-lg text-2xl md:text-3xl text-primary font-bold">The Apostolic Church of Sri Lanka</h3>
          </div>
        </div>
        
        <div class="space-y-4 font-body-lg text-on-surface-variant leading-relaxed">
          <p>
            The <strong class="text-on-surface">Apostolic Church of Sri Lanka</strong> is a spirit-filled church movement established across the nation, dedicated to preaching the uncompromised Gospel of Jesus Christ, planting vibrant churches, and discipling generations.
          </p>
          <p>
            Through the <strong class="text-primary">ACSL National Youth Ministry</strong>, we unite youth from all regions of Sri Lanka—including Colombo, Jaffna, Wennappuwa, Madampe, and surrounding districts. Our passion is to raise up an empowered generation that stands firm in prayer, worships in truth, and transforms society through God's love.
          </p>
        </div>
      </div>

    </section>
  `;
}
