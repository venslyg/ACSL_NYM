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
              To empower and equip youth leaders across Sri Lanka, fostering spiritual growth, leadership skills, and community service, while creating dynamic teams to support the national youth ministry's mission.
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
              To strengthen local church leadership and expand the reach of the national youth ministry by cultivating a culture of prayer, enhancing biblical knowledge, empowering a spirit of service, and mobilizing specialized support teams across Sri Lanka.
            </p>
          </div>
          <div class="absolute bottom-[-15%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <span class="material-symbols-outlined text-[180px]" style="font-variation-settings: 'wght' 100;">church</span>
          </div>
        </div>

      </div>

      <!-- Vision 2030 Strategic Roadmap Section -->
      <div class="mb-16 border-t border-white/10 pt-16">
        <div class="mb-12 text-center md:text-left">
          <div class="relative inline-block mb-4">
            <span class="font-label-md text-primary tracking-[0.2em] uppercase">Strategic Roadmap</span>
            <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"></div>
          </div>
          <h2 class="font-headline-lg text-3xl md:text-4xl mb-4 font-bold">Vision 2030</h2>
          <p class="font-body-lg text-lg text-secondary italic max-w-3xl">
            "Raising a generation rooted in Christ, united as one family, and empowered to IMPACT Sri Lanka."
          </p>
        </div>

        <!-- Goals & Core Areas Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <!-- Column 1: Where We Are Heading (Goals) -->
          <div class="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border-white/10">
            <h3 class="font-headline-md text-xl text-primary font-bold mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined">explore</span>
              Where We Are Heading
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                <p class="font-body-md text-sm sm:text-base text-on-surface-variant">Build spiritually strong youth in every local church.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                <p class="font-body-md text-sm sm:text-base text-on-surface-variant">Develop trained youth leaders across all regions of Sri Lanka.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                <p class="font-body-md text-sm sm:text-base text-on-surface-variant">Create united national youth teams.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                <p class="font-body-md text-sm sm:text-base text-on-surface-variant">Strengthen connection and alignment between local churches.</p>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                <p class="font-body-md text-sm sm:text-base text-on-surface-variant">Raise young people who actively serve God and society.</p>
              </li>
            </ul>
          </div>

          <!-- Column 2: Areas & Teams -->
          <div class="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border-white/10 flex flex-col justify-between">
            <div>
              <h3 class="font-headline-md text-xl text-primary font-bold mb-6 flex items-center gap-2">
                <span class="material-symbols-outlined">groups</span>
                Areas of Youth Ministry
              </h3>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <p class="text-xs font-bold text-secondary mb-1">Spiritual Growth</p>
                  <p class="text-[10px] text-outline">Discipleship & word study</p>
                </div>
                <div class="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <p class="text-xs font-bold text-secondary mb-1">Worship & Prayer</p>
                  <p class="text-[10px] text-outline">National prayer movement</p>
                </div>
                <div class="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <p class="text-xs font-bold text-secondary mb-1">Leadership</p>
                  <p class="text-[10px] text-outline">Trained leadership teams</p>
                </div>
                <div class="bg-white/5 border border-white/5 p-3 rounded-xl">
                  <p class="text-xs font-bold text-secondary mb-1">Evangelism</p>
                  <p class="text-[10px] text-outline">Outreach across communities</p>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-white/5 text-center bg-primary/5 rounded-xl p-4">
              <span class="font-label-md text-xs text-primary uppercase tracking-widest block mb-1">Our Commitment</span>
              <p class="text-sm font-bold text-white italic">"One vision, One Generation, One mission"</p>
            </div>
          </div>

        </div>

        <!-- National Youth Teams (To Be Built) -->
        <div class="glass-card rounded-2xl p-6 sm:p-8 border-white/10 mb-12">
          <h3 class="font-headline-md text-xl text-primary font-bold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined">hub</span>
            National Youth Teams (To Be Built)
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">music_note</span>
              <span class="text-xs font-medium">Worship Team</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">church</span>
              <span class="text-xs font-medium">Prayer Team</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">photo_camera</span>
              <span class="text-xs font-medium">Media & Photo</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">terminal</span>
              <span class="text-xs font-medium">IT & Technical</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">palette</span>
              <span class="text-xs font-medium">Design & Creative</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">medical_services</span>
              <span class="text-xs font-medium">Medical & Support</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">campaign</span>
              <span class="text-xs font-medium">Evangelism Team</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl">
              <span class="material-symbols-outlined text-primary text-base">event</span>
              <span class="text-xs font-medium">Event Coordination</span>
            </div>
            <div class="flex items-center gap-2 bg-white/5 border border-white/5 p-3 rounded-xl col-span-2 sm:col-span-1">
              <span class="material-symbols-outlined text-primary text-base">sports_soccer</span>
              <span class="text-xs font-medium">Sports Ministry</span>
            </div>
          </div>
        </div>

        <!-- Timeline Journey Roadmap -->
        <div class="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border-white/10 relative">
          <!-- Background accent lines -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none rounded-3xl"></div>
          
          <h3 class="font-headline-md text-xl text-primary font-bold mb-10 flex items-center gap-2 relative z-10">
            <span class="material-symbols-outlined">map</span>
            Vision 2030 Roadmap
          </h3>

          <!-- Visual Timeline Path -->
          <div class="relative z-10 ml-2 sm:ml-6 pl-6 sm:pl-8 border-l-2 border-dashed border-white/10 space-y-12">
            
            <!-- 2024 Milestone -->
            <div class="relative">
              <!-- Pin dot -->
              <div class="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-surface border-2 border-secondary flex items-center justify-center shadow-lg">
                <span class="material-symbols-outlined text-secondary text-base">check</span>
              </div>
              <div class="glass-card rounded-2xl p-5 border-white/10 hover:border-secondary/40 transition-colors max-w-3xl">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl font-black text-secondary tracking-tight">2024</span>
                    <span class="bg-secondary/10 border border-secondary/20 text-secondary text-[10px] px-2.5 py-0.5 rounded-full font-label-md uppercase tracking-wider">Empower</span>
                  </div>
                  <span class="text-xs text-outline font-label-md">Completed</span>
                </div>
                <h4 class="text-base font-bold text-white mb-2">Leadership Empowering Camp</h4>
                <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  A foundational gathering dedicated to empowering and equipping the next generation of youth leaders across ACSL churches to step into their divine calling.
                </p>
              </div>
            </div>

            <!-- 2025 Milestone -->
            <div class="relative">
              <!-- Pin dot -->
              <div class="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-surface border-2 border-secondary flex items-center justify-center shadow-lg">
                <span class="material-symbols-outlined text-secondary text-base">groups</span>
              </div>
              <div class="glass-card rounded-2xl p-5 border-white/10 hover:border-secondary/40 transition-colors max-w-3xl">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl font-black text-secondary tracking-tight">2025</span>
                    <span class="bg-secondary/10 border border-secondary/20 text-secondary text-[10px] px-2.5 py-0.5 rounded-full font-label-md uppercase tracking-wider">Level Up</span>
                  </div>
                  <span class="text-xs text-outline font-label-md">Completed</span>
                </div>
                <h4 class="text-base font-bold text-white mb-2">Regional Youth Activation</h4>
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xl">
                    More than <strong class="text-white">250+ young people</strong> united in faith to experience the real spiritual transformation promised in <strong class="text-primary font-bold">Romans 12:2</strong>.
                  </p>
                  <div class="bg-secondary/10 border border-secondary/30 rounded-xl px-4 py-2 text-center flex-shrink-0 w-full sm:w-auto">
                    <span class="block text-xl font-black text-secondary">250+</span>
                    <span class="text-[9px] text-outline uppercase tracking-wider font-label-md">Delegates</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2026 Milestone (Active / Winding path) -->
            <div class="relative">
              <!-- Animated current pin dot -->
              <div class="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-[0_0_15px_#568dff] animate-pulse z-10">
                <span class="material-symbols-outlined text-white text-base">navigation</span>
              </div>
              
              <div class="glass-card rounded-2xl p-5 sm:p-6 border-primary/40 bg-primary/5 shadow-xl max-w-3xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                
                <div class="flex flex-wrap items-center justify-between gap-2 mb-4 relative z-10">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl font-black text-primary tracking-tight">2026</span>
                    <span class="bg-primary/20 border border-primary/30 text-primary text-[10px] px-2.5 py-0.5 rounded-full font-label-md uppercase tracking-wider font-bold">Build</span>
                  </div>
                  <span class="bg-primary text-on-primary text-[9px] px-2.5 py-0.5 rounded-full font-label-md uppercase tracking-widest font-black">Active Phase</span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-white mb-4 relative z-10">Regional Alignment & National Summit</h4>
                <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                  Strengthening local leadership and aligning the regions through structured camps and intensive national youth preparations.
                </p>

                <!-- Sub-timeline Winding Path for 2026 -->
                <div class="space-y-4 border-l border-primary/20 pl-4 ml-2">
                  <!-- Step 1 -->
                  <div class="relative">
                    <div class="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-secondary"></div>
                    <div class="flex items-center gap-2 text-xs mb-1">
                      <span class="font-bold text-secondary uppercase tracking-wider">March</span>
                      <span class="text-outline">|</span>
                      <span class="text-white font-bold">Regional Integration</span>
                    </div>
                    <p class="text-[11px] sm:text-xs text-on-surface-variant">Jaffna Regional Camp & Colombo Regional Camp (Rapha) alignment.</p>
                  </div>
                  
                  <!-- Step 2 -->
                  <div class="relative">
                    <div class="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-secondary"></div>
                    <div class="flex items-center gap-2 text-xs mb-1">
                      <span class="font-bold text-secondary uppercase tracking-wider">May</span>
                      <span class="text-outline">|</span>
                      <span class="text-white font-bold">Area Expansion</span>
                    </div>
                    <p class="text-[11px] sm:text-xs text-on-surface-variant">Wennappuwa - Pallewela & Anuradhapura - Puttalam Area Youth Camps.</p>
                  </div>
                  
                  <!-- Step 3 -->
                  <div class="relative">
                    <div class="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-secondary"></div>
                    <div class="flex items-center gap-2 text-xs mb-1">
                      <span class="font-bold text-secondary uppercase tracking-wider">June - July</span>
                      <span class="text-outline">|</span>
                      <span class="text-white font-bold">Team Preparation</span>
                    </div>
                    <p class="text-[11px] sm:text-xs text-on-surface-variant">Intensive preparations: Worship practices, Ushering, Media, Photography, and Prayers.</p>
                  </div>

                  <!-- Step 4 -->
                  <div class="relative bg-primary/10 border border-primary/20 rounded-xl p-3.5 mt-2">
                    <div class="absolute -left-[21px] top-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_#568dff]"></div>
                    <div class="flex items-center gap-2 text-xs mb-1">
                      <span class="font-bold text-primary uppercase tracking-wider">August 2026</span>
                      <span class="text-outline">|</span>
                      <span class="text-white font-bold">The National Summit</span>
                    </div>
                    <p class="text-[11px] sm:text-xs text-on-surface-variant">National Youth Camp at Madampe. Commissioning the movement.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- 2027-2030 Milestone -->
            <div class="relative">
              <!-- Pin dot -->
              <div class="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-surface border-2 border-white/20 flex items-center justify-center shadow-lg">
                <span class="material-symbols-outlined text-outline text-base">tour</span>
              </div>
              <div class="glass-card rounded-2xl p-5 border-white/10 hover:border-primary/20 transition-colors max-w-3xl">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl font-black text-outline tracking-tight">2027 - 2030</span>
                    <span class="bg-white/5 border border-white/10 text-outline text-[10px] px-2.5 py-0.5 rounded-full font-label-md uppercase tracking-wider">Impact</span>
                  </div>
                  <span class="text-xs text-primary font-label-md uppercase tracking-wider">Destination</span>
                </div>
                <h4 class="text-base font-bold text-white mb-2">Strong National Youth Movement</h4>
                <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Fully mobilizing specialized support teams nationwide, establishing self-sustaining local church leadership structures, and impacting communities across Sri Lanka.
                </p>
              </div>
            </div>

          </div>

          <div class="mt-10 pt-6 border-t border-white/5 text-center text-xs text-outline uppercase tracking-widest relative z-10 font-bold">
            "We are not building events. We are building a generation."
          </div>
        </div>

      </div>

      <!-- Introduction to the Apostolic Church of Sri Lanka -->
      <div class="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-white/10 shadow-2xl">
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
