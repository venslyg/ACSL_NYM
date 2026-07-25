export function EventDetailModal() {
  return `
    <div id="event-modal" class="fixed inset-0 z-[100] hidden overflow-y-auto no-scrollbar bg-background/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10 transition-all duration-300">
      <!-- Modal Box -->
      <div class="relative w-full max-w-4xl glass-card bg-surface-container/70 backdrop-blur-2xl border border-white/15 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        <!-- Header Image & Close -->
        <div class="relative h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden flex-shrink-0">
          <img id="modal-image" class="w-full h-full object-cover" src=""/>
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container/95 via-surface-container/40 to-transparent"></div>
          
          <!-- Official Event Logo -->
          <div class="absolute top-4 left-4 md:inset-0 md:flex md:items-center md:justify-center z-10 pointer-events-none">
            <img src="assets/images/event logo.png" alt="Faith in Action Logo" class="w-auto h-16 sm:h-20 md:h-28 object-contain opacity-80 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"/>
          </div>
          
          <!-- Close Button -->
          <button id="modal-close" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container/70 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-surface-container transition-all cursor-pointer text-primary z-20">
            <span class="material-symbols-outlined text-xl sm:text-2xl">close</span>
          </button>

          <!-- Badges & Title -->
          <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 z-10">
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span id="modal-badge" class="inline-block px-3 py-1 rounded-full bg-primary-container/20 border border-primary/30 text-primary font-label-md text-[10px] sm:text-xs uppercase tracking-wider">National Youth Camp</span>
              <span id="modal-fee" class="inline-block px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary font-label-md text-[10px] sm:text-xs uppercase tracking-wider">LKR 6,000 / person</span>
            </div>
            <h2 id="modal-title" class="font-headline-lg text-secondary text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter drop-shadow-md"></h2>
          </div>
        </div>

        <!-- Scrollable content area -->
        <div class="overflow-y-auto no-scrollbar p-5 sm:p-8 md:p-10 flex-grow">
          <!-- Description & Logistics Grid -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-6">
            <!-- Left Info column -->
            <div class="md:col-span-7 md:flex md:flex-col space-y-6">
              <p id="modal-desc" class="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed"></p>
              
              <!-- Payment Instructions Card -->
              <div class="glass-card p-5 sm:p-6 rounded-2xl border-white/10 space-y-4 md:flex-grow">
                <div class="flex items-center gap-2 text-primary">
                  <span class="material-symbols-outlined">payments</span>
                  <h3 class="font-headline-md text-xs sm:text-sm font-bold uppercase tracking-widest">Payment Instructions</h3>
                </div>
                
                <p class="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  The camp fee is <span class="text-secondary font-semibold">Rs. 6,000.00</span> per participant. Please be kind enough to deposit <span class="text-primary font-semibold">Rs. 2,000.00</span> At the time of registration into the “National Youth Ministry” account and upload the payment receipt to the google form.
                </p>

                <!-- Bank Details Box -->
                <div class="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                  <h4 class="font-label-md text-secondary uppercase tracking-wider text-[10px]">Bank Account Details</h4>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div>
                      <p class="text-[10px] text-outline tracking-wider">Bank Name</p>
                      <p class="font-bold text-on-surface">Hatton National Bank</p>
                    </div>
                    <div>
                      <p class="text-[10px] text-outline tracking-wider">Branch</p>
                      <p class="font-bold text-on-surface">Moratuwa</p>
                    </div>
                    <div>
                      <p class="text-[10px] text-outline tracking-wider">Account Name</p>
                      <p class="font-bold text-on-surface">ACSL- National Youth Ministry</p>
                    </div>
                    <div>
                      <p class="text-[10px] text-outline tracking-wider">Account Number</p>
                      <p class="font-bold text-secondary text-base">022020430553</p>
                    </div>
                  </div>
                </div>

                <!-- Special Note -->
                <div class="border-l-2 border-primary/40 pl-3 py-1">
                  <p class="text-xs text-outline leading-normal">
                    <strong class="text-primary uppercase tracking-wider text-[10px] block mb-0.5">Note:</strong>
                    please send the deposit slip to the given whatsapp number with a message of your name, church name and NIC (optional) <br>
                    Whatsapp Number : <a href="https://wa.me/94760093437" target="_blank" class="text-secondary hover:underline font-bold">0760093437</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Logistics column -->
            <div class="md:col-span-5 md:flex md:flex-col space-y-6">
              <!-- Logistics Card -->
              <div class="glass-card p-5 sm:p-6 rounded-2xl space-y-4 border-white/10">
                <h4 class="font-label-md text-secondary uppercase tracking-widest text-xs">Camp Details</h4>
                
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">calendar_today</span>
                  <div>
                    <p class="font-body-md text-[10px] text-outline uppercase tracking-wider">Dates</p>
                    <p id="modal-date" class="font-body-md text-xs sm:text-sm font-bold text-on-surface"></p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">payments</span>
                  <div>
                    <p class="font-body-md text-[10px] text-outline uppercase tracking-wider">Registration Fee</p>
                    <p class="font-body-md text-xs sm:text-sm font-bold text-secondary">LKR 6,000 per person</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">location_on</span>
                  <div>
                    <p class="font-body-md text-[10px] text-outline uppercase tracking-wider">Venue</p>
                    <p id="modal-location" class="font-body-md text-xs sm:text-sm font-bold text-on-surface"></p>
                  </div>
                </div>

                <div id="modal-speaker-container" class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-xl">church</span>
                  <div>
                    <p class="font-body-md text-[10px] text-outline uppercase tracking-wider">Organizers</p>
                    <p id="modal-speakers" class="font-body-md text-xs sm:text-sm font-bold text-on-surface"></p>
                  </div>
                </div>

                <div class="flex items-center gap-3 bg-tertiary/15 rounded-lg p-3 border-l-2 border-tertiary">
                  <span class="material-symbols-outlined text-tertiary text-xl">schedule</span>
                  <div>
                    <p class="font-body-md text-[10px] text-outline uppercase tracking-wider">Registration Deadline</p>
                    <p class="font-body-md text-xs sm:text-sm font-bold text-tertiary">August 15, 2026</p>
                  </div>
                </div>
              </div>

              <!-- Packing list -->
              <div id="modal-major-packing" class="glass-card p-5 sm:p-6 rounded-2xl border-white/10 md:flex-grow">
                <h3 class="font-headline-md text-xs sm:text-sm text-primary mb-4 flex items-center gap-2 uppercase tracking-widest font-bold">
                  <span class="material-symbols-outlined text-base">inventory_2</span>
                  WHAT TO BRING
                </h3>
                <ul id="packing-list" class="space-y-3">
                  <!-- Injected Packing Items -->
                </ul>
              </div>

            </div>
          </div>
        </div>

        <!-- Footer Action -->
        <div class="bg-surface-container-low/60 backdrop-blur-md border-t border-white/10 px-5 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div class="text-center sm:text-left">
            <p class="text-[10px] sm:text-xs text-outline font-label-md uppercase tracking-widest">Apostolic Church of Sri Lanka</p>
            <p class="text-xs sm:text-sm font-body-md text-on-surface-variant">Secure your delegate registration today via Google Forms.</p>
          </div>
          <button id="modal-enroll-btn" class="w-full sm:w-auto bg-primary text-on-primary px-6 sm:px-8 py-3 rounded-xl font-label-md text-xs sm:text-sm uppercase font-black hover:shadow-[0_0_30px_rgba(86,141,255,0.6)] active:scale-95 transition-all cursor-pointer">
            Register via Google Form
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

  const img = document.getElementById('modal-image');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const date = document.getElementById('modal-date');
  const location = document.getElementById('modal-location');
  const speakers = document.getElementById('modal-speakers');
  const packingList = document.getElementById('packing-list');

  let currentEventLink = "https://forms.gle/WJnq1x1UpzVyCNwH7";

  window.addEventListener('open-event-detail', (e) => {
    const event = e.detail;
    if (!event) return;

    if (event.modalImage) {
      img.src = event.modalImage;
      img.className = "w-full h-full object-contain p-4 bg-surface-container-low";
    } else {
      img.src = event.image;
      img.className = "w-full h-full object-cover";
    }
    title.innerText = event.title;
    desc.innerText = event.description;
    date.innerText = event.date;
    location.innerText = event.venue || event.location;
    speakers.innerText = event.speakers || "National Youth Ministry";
    currentEventLink = event.enrollLink || "https://forms.gle/WJnq1x1UpzVyCNwH7";

    // Inject Packing List
    if (event.packingList) {
      packingList.innerHTML = event.packingList.map(item => `
        <li class="flex items-start gap-2.5">
          <input type="checkbox" checked class="mt-0.5 w-3.5 h-3.5 rounded border-white/20 bg-black/40 text-primary focus:ring-primary focus:ring-offset-0"/>
          <div>
            <p class="font-body-md text-xs font-bold text-secondary">${item.item}</p>
            <p class="text-[10px] text-outline">${item.detail}</p>
          </div>
        </li>
      `).join('');
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
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
