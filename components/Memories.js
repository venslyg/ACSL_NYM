import { pastEvents, upcomingEvents } from '../js/eventsData.js';

export function Memories(campId) {
  const allCamps = [...upcomingEvents, ...pastEvents];
  const camp = allCamps.find(c => c.id === campId);

  if (!camp) {
    return `
      <div class="min-h-screen flex flex-col items-center justify-center pt-24 px-margin-mobile">
        <span class="material-symbols-outlined text-error text-6xl mb-4">error</span>
        <h2 class="font-headline-lg text-2xl font-bold mb-2">Camp Not Found</h2>
        <p class="font-body-md text-on-surface-variant text-center mb-6">The requested camp memories could not be located.</p>
        <a href="#home" class="glass-card px-6 py-2.5 rounded-full text-on-surface uppercase text-xs font-label-md">Back to Home</a>
      </div>
    `;
  }

  return `
    <section class="min-h-screen pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative scroll-mt-20">
      
      <!-- Back Navigation & Header -->
      <div class="mb-10 flex flex-col gap-4">
        <a href="#events" class="flex items-center gap-2 text-primary hover:text-secondary transition-colors w-max font-label-md text-xs uppercase font-bold">
          <span class="material-symbols-outlined text-sm">arrow_back</span>
          Back to Events
        </a>
        
        <div>
          <div class="relative inline-block mb-2">
            <span class="font-label-md text-secondary tracking-[0.2em] uppercase text-xs">${camp.badge || 'Summit'} memories</span>
            <div class="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
          </div>
          <h1 class="font-headline-lg text-2xl sm:text-4xl md:text-5xl bg-gradient-to-br from-white to-primary-container bg-clip-text text-transparent font-extrabold uppercase mt-2">
            ${camp.title}
          </h1>
          <p class="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            Relive the inspiring moments of prayer, worship, fellowship and spiritual growth.
          </p>
        </div>
      </div>

      <!-- Gallery Container (Loaded Dynamically) -->
      <div id="gallery-container">
        <!-- Skeleton Loading State -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-pulse">
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3]"></div>
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3]"></div>
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3]"></div>
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3] hidden sm:block"></div>
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3] hidden md:block"></div>
          <div class="bg-white/5 border border-white/5 rounded-2xl aspect-[4/3] hidden md:block"></div>
        </div>
      </div>

    </section>
  `;
}

export function initMemories(campId) {
  const allCamps = [...upcomingEvents, ...pastEvents];
  const camp = allCamps.find(c => c.id === campId);
  if (!camp) return;

  const CLOUD_NAME = "ppa82cai"; // Client's Cloudinary cloud name
  const tag = camp.cloudinaryTag;
  const galleryContainer = document.getElementById('gallery-container');

  if (!tag) {
    if (galleryContainer) {
      galleryContainer.innerHTML = `
        <div class="glass-card rounded-2xl p-10 sm:p-12 text-center border-white/10 max-w-md mx-auto">
          <span class="material-symbols-outlined text-outline text-5xl mb-4">settings</span>
          <p class="font-body-md text-on-surface-variant text-sm sm:text-base">This camp is not configured with a Cloudinary tag. Please add 'cloudinaryTag' to the event data.</p>
        </div>
      `;
    }
    return;
  }

  // Fetch list of files from Cloudinary Tag List API
  fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(data => {
      const photos = (data.resources || []).map(resource => {
        // Construct optimized Cloudinary URLs using on-the-fly transformations
        return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_800/v${resource.version}/${resource.public_id}.${resource.format}`;
      });

      if (photos.length === 0) {
        renderEmptyState();
        return;
      }

      renderGallery(photos);
    })
    .catch(error => {
      console.error("Cloudinary load error: ", error);
      renderErrorState(tag, CLOUD_NAME);
    });

  function renderGallery(photos) {
    if (!galleryContainer) return;

    galleryContainer.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:auto-rows-[220px] md:grid-flow-row-dense animate-fade-in">
        ${photos.map((photo, index) => {
          let bentoClass = "md:col-span-1 md:row-span-1";
          const mod = index % 6;
          if (mod === 0) {
            bentoClass = "md:col-span-2 md:row-span-2";
          } else if (mod === 3) {
            bentoClass = "md:col-span-1 md:row-span-2";
          } else if (mod === 4) {
            bentoClass = "md:col-span-2 md:row-span-1";
          }

          return `
            <div class="memory-card glass-card rounded-2xl overflow-hidden border-white/10 group relative shadow-lg hover:scale-[1.01] transition-all duration-300 h-[240px] md:h-full ${bentoClass}">
              <img src="${photo}" alt="Memory photo ${index + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" loading="lazy"/>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderEmptyState() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = `
      <div class="glass-card rounded-2xl p-10 sm:p-12 text-center border-white/10 max-w-md mx-auto flex flex-col items-center justify-center gap-4 animate-fade-in">
        <span class="material-symbols-outlined text-outline text-5xl">photo_library</span>
        <h3 class="font-headline-md text-lg text-white font-bold">No Memories to Display Yet</h3>
        <p class="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
          Photos and highlights from this camp are currently being prepared. Please check back soon to relive these inspiring moments!
        </p>
        <a href="#events" class="mt-2 px-6 py-2.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-label-md uppercase tracking-wider hover:bg-primary/30 transition-all text-center">
          Back to Events
        </a>
      </div>
    `;
  }

  function renderErrorState(tag, cloudName) {
    // Fall back 
    renderEmptyState();
  }
}
