import { upcomingEvents, pastEvents } from '../js/eventsData.js';

export function UpcomingEvents() {
  const majorEvent = upcomingEvents[0];

  return `
    <section id="events" class="py-24 bg-surface-container-lowest/20 relative scroll-mt-20">
      <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        <!-- Header -->
        <div class="mb-16">
          <div class="relative inline-block mb-4">
            <span class="font-label-md text-secondary tracking-[0.2em] uppercase">National Gathering</span>
            <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
          </div>
          <h2 class="font-headline-lg text-headline-lg mb-2">Upcoming National Event</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">The major annual gathering for all youth of the Apostolic Church of Sri Lanka.</p>
        </div>

        <!-- Featured Major Event Camp Card -->
        <div id="major-event-container" class="mb-24 relative">
          <div class="glass-card rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden min-h-[520px] group border-primary/30 shadow-2xl">
            
            <div class="relative overflow-hidden h-full min-h-[350px]">
              <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${majorEvent.image}"/>
              <div class="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
              <div class="absolute top-8 left-8 flex flex-col gap-2">
                <span class="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-tighter flex items-center gap-2 w-max">
                  <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  National Youth Camp
                </span>
                <span class="bg-surface/80 backdrop-blur-md text-secondary border border-secondary/30 px-3 py-1 rounded-full font-label-md text-xs uppercase tracking-wider w-max">
                  ${majorEvent.fee}
                </span>
              </div>
            </div>
            
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-secondary-fixed-dim material-symbols-outlined">calendar_month</span>
                <span class="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">${majorEvent.date}</span>
              </div>
              
              <h3 class="font-display-lg-mobile md:text-4xl mb-4 bg-gradient-to-br from-white to-primary-container bg-clip-text text-transparent font-bold">
                ${majorEvent.title}
              </h3>
              
              <div class="flex items-center gap-2 text-primary mb-6">
                <span class="material-symbols-outlined text-sm">location_on</span>
                <span class="font-label-md text-xs uppercase tracking-wider">${majorEvent.venue}</span>
              </div>

              <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl leading-relaxed">
                ${majorEvent.description}
              </p>
              
              <!-- Countdown Timer -->
              <div class="grid grid-cols-4 gap-3 mb-8 max-w-md">
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="days">35">35</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Days</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="hours">14">14</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Hrs</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="minutes">20">20</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Min</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="seconds">45">45</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Sec</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4 items-center">
                <a href="${majorEvent.enrollLink}" target="_blank" class="bg-primary-container text-on-primary-container px-8 py-3.5 rounded-xl font-label-md text-label-md uppercase font-bold hover:shadow-[0_0_25px_rgba(86,141,255,0.4)] transition-all flex items-center gap-2 cursor-pointer">
                  Register Now
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <button id="view-camp-details-btn" class="glass-card px-6 py-3.5 rounded-xl font-label-md text-label-md uppercase border border-white/20 hover:bg-white/5 transition-all cursor-pointer">
                  View Full Agenda
                </button>
              </div>
            </div>
            
            <div class="scanning-line"></div>
          </div>
        </div>

        <!-- Regional Camps Section 2026 -->
        <div class="pt-8 border-t border-white/10">
          <div class="mb-12">
            <div class="relative inline-block mb-3">
              <span class="font-label-md text-tertiary tracking-[0.2em] uppercase">2026 Milestones</span>
              <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-tertiary to-transparent"></div>
            </div>
            <h3 class="font-headline-lg text-2xl md:text-3xl font-bold mb-2">Regional Camps in 2026</h3>
            <p class="font-body-md text-on-surface-variant">Three major regional camps conducted across Sri Lanka leading up to the national summit.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${pastEvents.map(event => `
              <div class="glass-card rounded-2xl p-6 flex flex-col group transition-all duration-300 border-white/10">
                <div class="relative h-48 rounded-xl overflow-hidden mb-6">
                  <img src="${event.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  <div class="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg">
                    <span class="font-label-md text-[12px] text-tertiary uppercase">${event.badge}</span>
                  </div>
                </div>
                
                <h4 class="font-headline-md text-xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300">${event.title}</h4>
                <p class="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">${event.description}</p>
                
                <div class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-on-surface-variant font-label-md">
                  <span class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm text-primary">location_on</span>
                    ${event.location}
                  </span>
                  <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-outline">${event.date}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}

// Countdown timer for August 26, 2026
function startCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl) return;

  const targetDate = new Date('2026-08-26T09:00:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minutesEl.innerText = '00';
      secondsEl.innerText = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

export function initUpcomingEvents() {
  const viewDetailsBtn = document.getElementById('view-camp-details-btn');

  if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', () => {
      const modalEvent = new CustomEvent('open-event-detail', { detail: upcomingEvents[0] });
      window.dispatchEvent(modalEvent);
    });
  }

  startCountdown();
}
