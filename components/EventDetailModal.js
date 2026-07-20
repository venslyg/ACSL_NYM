export function EventDetailModal() {
  return `
    <div id="event-modal" class="fixed inset-0 z-[100] hidden overflow-y-auto bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 transition-all duration-300">
      <!-- Modal Box -->
      <div class="relative w-full max-w-5xl bg-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        <!-- Header Image & Close -->
        <div class="relative h-[250px] md:h-[350px] overflow-hidden flex-shrink-0">
          <img id="modal-image" class="w-full h-full object-cover" src=""/>
          <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          
          <!-- Close Button -->
          <button id="modal-close" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface-container/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-surface-container transition-all cursor-pointer text-primary">
            <span class="material-symbols-outlined text-2xl">close</span>
          </button>

          <!-- Badges & Title -->
          <div class="absolute bottom-6 left-8 right-8">
            <span id="modal-badge" class="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-container/20 border border-primary/30 text-primary font-label-md text-xs uppercase tracking-wider">Annual Summer Summit</span>
            <h2 id="modal-title" class="font-headline-lg text-secondary text-2xl md:text-4xl uppercase tracking-tighter drop-shadow-md"></h2>
          </div>
        </div>

        <!-- Scrollable content area -->
        <div class="overflow-y-auto p-8 md:p-12 flex-grow">
          <!-- Description & Logistics Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <!-- Left Info column -->
            <div class="lg:col-span-7">
              <p id="modal-desc" class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10"></p>
              
              <!-- Custom Major Event Agenda target -->
              <div id="modal-major-agenda" class="hidden">
                <h3 class="font-headline-lg text-xl text-primary mb-8 flex items-center gap-3">
                  <span class="w-8 h-1px bg-primary/30"></span>
                  CAMP AGENDA
                </h3>
                
                <div id="agenda-timeline" class="space-y-4">
                  <!-- Injected Agenda Days -->
                </div>
              </div>
            </div>

            <!-- Right Logistics column -->
            <div class="lg:col-span-5 space-y-6">
              <!-- Logistics Card -->
              <div class="glass-card p-6 rounded-2xl space-y-4">
                <h4 class="font-label-md text-secondary uppercase tracking-widest text-xs">Event Logistics</h4>
                
                <div class="flex items-center gap-4">
                  <span class="material-symbols-outlined text-primary">calendar_today</span>
                  <div>
                    <p class="font-body-md text-xs text-outline">Date</p>
                    <p id="modal-date" class="font-body-md text-sm font-bold text-on-surface"></p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <span class="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <p class="font-body-md text-xs text-outline">Time</p>
                    <p id="modal-time" class="font-body-md text-sm font-bold text-on-surface"></p>
                  </div>
                </div>
                
                <div class="flex items-center gap-4">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p class="font-body-md text-xs text-outline">Location</p>
                    <p id="modal-location" class="font-body-md text-sm font-bold text-on-surface"></p>
                  </div>
                </div>

                <div id="modal-speaker-container" class="flex items-center gap-4">
                  <span class="material-symbols-outlined text-primary">record_voice_over</span>
                  <div>
                    <p class="font-body-md text-xs text-outline">Guest Speakers</p>
                    <p id="modal-speakers" class="font-body-md text-sm font-bold text-on-surface"></p>
                  </div>
                </div>
              </div>

              <!-- Custom Packing list target -->
              <div id="modal-major-packing" class="hidden glass-card p-6 rounded-2xl glow-border-top">
                <h3 class="font-headline-md text-sm text-primary mb-6 flex items-center gap-2 uppercase tracking-widest">
                  <span class="material-symbols-outlined text-lg">inventory_2</span>
                  WHAT TO BRING
                </h3>
                <ul id="packing-list" class="space-y-4">
                  <!-- Injected Packing Items -->
                </ul>
              </div>

            </div>
          </div>
        </div>

        <!-- Footer Action (Sticky at bottom) -->
        <div class="bg-surface-container-low border-t border-white/10 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div>
            <p class="text-xs text-outline font-label-md uppercase tracking-widest">Registration Action</p>
            <p id="modal-footer-caption" class="text-sm font-body-md text-on-surface-variant">Spaces are limited. Secure your spot today.</p>
          </div>
          <button id="modal-enroll-btn" class="bg-primary text-on-primary px-10 py-3.5 rounded-xl font-label-md text-sm uppercase font-black hover:shadow-[0_0_30px_rgba(86,141,255,0.6)] active:scale-95 transition-all cursor-pointer">
            Enroll Now
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initEventDetailModal() {
  const modal = document.getElementById('event-modal');
  const closeBtn = document.getElementById('modal-close');
  const enrollBtn = document.getElementById('modal-enroll-btn');

  // Modal elements
  const img = document.getElementById('modal-image');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const date = document.getElementById('modal-date');
  const time = document.getElementById('modal-time');
  const location = document.getElementById('modal-location');
  const speakers = document.getElementById('modal-speakers');
  const speakerContainer = document.getElementById('modal-speaker-container');
  const badge = document.getElementById('modal-badge');
  
  // Custom containers
  const majorAgenda = document.getElementById('modal-major-agenda');
  const majorPacking = document.getElementById('modal-major-packing');
  const agendaTimeline = document.getElementById('agenda-timeline');
  const packingList = document.getElementById('packing-list');

  let currentEventLink = "https://forms.google.com/placeholder-camp-enrollment";

  window.addEventListener('open-event-detail', (e) => {
    const event = e.detail;
    if (!event) return;

    // Set fields
    img.src = event.image;
    title.innerText = event.title;
    desc.innerText = event.description;
    date.innerText = event.date;
    time.innerText = event.time;
    location.innerText = `${event.venue || ''}, ${event.location || ''}`;
    currentEventLink = event.enrollLink || "https://forms.google.com/placeholder-camp-enrollment";

    if (event.badge) {
      badge.innerText = event.badge;
    } else {
      badge.innerText = event.isMajor ? "Major Event" : "Local gathering";
    }

    if (event.speakers) {
      speakerContainer.classList.remove('hidden');
      speakers.innerText = event.speakers;
    } else {
      speakerContainer.classList.add('hidden');
    }

    // Toggle custom camp details
    if (event.isMajor) {
      majorAgenda.classList.remove('hidden');
      majorPacking.classList.remove('hidden');
      
      // Inject Agenda
      agendaTimeline.innerHTML = event.agenda.map((day, idx) => `
        <div class="group relative pl-8 pb-8 border-l border-white/10 last:border-0 last:pb-0">
          <div class="absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full bg-background border-2 border-primary shadow-[0_0_6px_#b0c6ff]"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <p class="font-label-md text-xs text-primary">${day.day}</p>
              <h4 class="font-headline-md text-base text-secondary font-bold">${day.title}</h4>
            </div>
            <div class="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded text-xs font-label-md">${day.time}</div>
          </div>
          <p class="text-xs text-on-surface-variant font-body-md">${day.description}</p>
          ${day.subItems ? `
            <div class="mt-4 grid grid-cols-2 gap-2">
              ${day.subItems.map(item => `
                <div class="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5 text-[10px]">
                  <span class="material-symbols-outlined text-primary text-xs">bolt</span>
                  <span class="font-body-md">${item}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `).join('');

      // Inject Packing List
      packingList.innerHTML = event.packingList.map(item => `
        <li class="flex items-start gap-3">
          <input type="checkbox" class="mt-1 w-4 h-4 rounded border-white/20 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0"/>
          <div>
            <p class="font-body-md text-xs font-bold text-secondary">${item.item}</p>
            <p class="text-[10px] text-outline">${item.detail}</p>
          </div>
        </li>
      `).join('');

    } else {
      majorAgenda.classList.add('hidden');
      majorPacking.classList.add('hidden');
    }

    // Open Modal
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Lock body scroll
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      window.open(currentEventLink, '_blank');
    });
  }
}
