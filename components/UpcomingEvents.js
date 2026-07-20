import { events } from '../js/eventsData.js';

export function UpcomingEvents() {
  const majorEvent = events.find(e => e.isMajor);

  return `
    <section id="events" class="py-24 bg-surface-container-lowest/20 relative scroll-mt-20">
      <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        <!-- Header & Category Filter Buttons -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div class="relative inline-block mb-4">
              <span class="font-label-md text-secondary tracking-[0.2em] uppercase">Upcoming Movements</span>
              <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
            </div>
            <h2 class="font-headline-lg text-headline-lg mb-2">Upcoming Movements</h2>
            <p class="font-body-md text-body-md text-on-surface-variant">Stay connected with our monthly gatherings and regional summits.</p>
          </div>
          
          <div class="flex items-center gap-2">
            <div class="flex bg-surface-container rounded-full p-1 border border-white/5 shadow-inner">
              <button id="filter-all" class="px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md transition-all duration-300">All</button>
              <button id="filter-local" class="px-6 py-2 text-on-surface-variant rounded-full font-label-md text-label-md hover:text-on-surface transition-colors duration-300">Local</button>
              <button id="filter-summit" class="px-6 py-2 text-on-surface-variant rounded-full font-label-md text-label-md hover:text-on-surface transition-colors duration-300">Summit</button>
            </div>
          </div>
        </div>

        <!-- Featured Major Event Camp Card -->
        <div id="major-event-container" class="mb-16 relative">
          <div class="glass-card rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden min-h-[500px] group border-primary/20 cursor-pointer hover:border-primary/50 transition-all duration-300">
            
            <div class="relative overflow-hidden h-full min-h-[350px]">
              <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${majorEvent.image}"/>
              <div class="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
              <div class="absolute top-8 left-8">
                <span class="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-md text-xs uppercase tracking-tighter flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  Major Event
                </span>
              </div>
            </div>
            
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-6">
                <span class="text-secondary-fixed-dim material-symbols-outlined">calendar_month</span>
                <span class="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">${majorEvent.date}</span>
              </div>
              <h3 class="font-display-lg-mobile md:text-4xl mb-6 bg-gradient-to-br from-white to-primary-container bg-clip-text text-transparent font-bold">
                ${majorEvent.title}
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                ${majorEvent.description}
              </p>
              
              <!-- Countdown Timer -->
              <div class="grid grid-cols-4 gap-4 mb-8 max-w-md">
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="days">45</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Days</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="hours">12</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Hrs</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="minutes">34</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Min</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div class="font-headline-md text-xl md:text-2xl text-primary font-bold" id="seconds">18</div>
                  <div class="font-label-md text-[9px] opacity-50 uppercase tracking-widest">Sec</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4 items-center">
                <button class="enroll-now-btn bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-label-md text-label-md uppercase font-bold hover:shadow-[0_0_25px_rgba(86,141,255,0.4)] transition-all flex items-center gap-2 cursor-pointer">
                  Enroll Now
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <div class="flex items-center gap-2 text-on-surface-variant px-4 py-2">
                  <span class="material-symbols-outlined text-primary text-sm">location_on</span>
                  <span class="font-body-md text-xs">${majorEvent.location}</span>
                </div>
              </div>
            </div>
            
            <div class="scanning-line"></div>
          </div>
        </div>

        <!-- Standard Events Grid -->
        <div id="events-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter transition-all duration-500">
          <!-- Dynamically Rendered Event Cards -->
        </div>

      </div>
    </section>
  `;
}

export function renderEventCards(category = 'all') {
  const grid = document.getElementById('events-grid');
  const majorContainer = document.getElementById('major-event-container');
  if (!grid) return;

  // Filter events (Major is handled separately in header, but shown under "All" and "Summit")
  // Let's filter out Major event from standard grid to keep grid clean, or include it if not filtered.
  const filteredEvents = events.filter(e => {
    if (e.isMajor) return false; // Render major camp separately
    if (category === 'all') return true;
    return e.category === category;
  });

  // Handle visibility of Major event container depending on filter
  if (majorContainer) {
    if (category === 'all' || category === 'summit') {
      majorContainer.classList.remove('hidden');
    } else {
      majorContainer.classList.add('hidden');
    }
  }

  grid.innerHTML = filteredEvents.map(event => `
    <div data-id="${event.id}" class="event-card glass-card rounded-2xl p-6 flex flex-col group neon-glow transition-all duration-300 cursor-pointer hover:border-primary/40 hover:-translate-y-1">
      <div class="relative h-48 rounded-xl overflow-hidden mb-6">
        <img src="${event.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div class="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg">
          <span class="font-label-md text-[12px] text-tertiary">${event.date}</span>
        </div>
      </div>
      
      <h3 class="font-headline-md text-headline-md text-xl mb-3 text-secondary group-hover:text-primary transition-colors duration-300">${event.title}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">${event.description}</p>
      
      <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <div class="flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-[18px]">schedule</span>
          <span class="font-label-md text-[12px]">${event.time}</span>
        </div>
        <button class="text-primary font-label-md text-label-md flex items-center gap-1 group/btn cursor-pointer bg-transparent border-0 outline-none">
          View Details
          <span class="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-1">chevron_right</span>
        </button>
      </div>
    </div>
  `).join('');

  // Re-bind click event handlers to standard event cards
  grid.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });
}

// Countdown timer logic
function startCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl) return;

  function update() {
    let days = parseInt(daysEl.innerText);
    let hours = parseInt(hoursEl.innerText);
    let minutes = parseInt(minutesEl.innerText);
    let seconds = parseInt(secondsEl.innerText);

    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
          if (days > 0) {
            days--;
          }
        }
      }
    }

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');

    // Visual flicker effect on timer numbers
    if (Math.random() > 0.98) {
      const els = [daysEl, hoursEl, minutesEl, secondsEl];
      const randomEl = els[Math.floor(Math.random() * els.length)];
      randomEl.style.opacity = '0.3';
      setTimeout(() => randomEl.style.opacity = '1', 100);
    }
  }

  setInterval(update, 1000);
}

export function initUpcomingEvents() {
  const filterAll = document.getElementById('filter-all');
  const filterLocal = document.getElementById('filter-local');
  const filterSummit = document.getElementById('filter-summit');
  const majorContainer = document.getElementById('major-event-container');

  const btns = [filterAll, filterLocal, filterSummit];

  function setActive(activeBtn) {
    btns.forEach(btn => {
      if (btn) {
        btn.classList.remove('bg-primary-container', 'text-on-primary-container');
        btn.classList.add('text-on-surface-variant', 'hover:text-on-surface');
      }
    });
    if (activeBtn) {
      activeBtn.classList.remove('text-on-surface-variant', 'hover:text-on-surface');
      activeBtn.classList.add('bg-primary-container', 'text-on-primary-container');
    }
  }

  if (filterAll) {
    filterAll.addEventListener('click', () => {
      setActive(filterAll);
      renderEventCards('all');
    });
  }

  if (filterLocal) {
    filterLocal.addEventListener('click', () => {
      setActive(filterLocal);
      renderEventCards('local');
    });
  }

  if (filterSummit) {
    filterSummit.addEventListener('click', () => {
      setActive(filterSummit);
      renderEventCards('summit');
    });
  }

  // Major card triggers modal open
  if (majorContainer) {
    majorContainer.addEventListener('click', (e) => {
      // Don't open modal if they clicked direct Enroll Now button
      if (e.target.closest('.enroll-now-btn')) {
        window.open('https://forms.google.com/placeholder-camp-enrollment', '_blank');
        return;
      }
      openModal('faith-in-action-camp');
    });
  }

  renderEventCards('all');
  startCountdown();
}

function openModal(id) {
  const event = events.find(e => e.id === id);
  if (!event) return;

  const modalEvent = new CustomEvent('open-event-detail', { detail: event });
  window.dispatchEvent(modalEvent);
}
