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
            Relive the inspiring moments of prayer, worship, fellowship and spiritual growth. Photos load directly from Cloudinary.
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

      <!-- Lightbox Modal -->
      <div id="lightbox" class="fixed inset-0 bg-black/95 z-[200] hidden flex-col items-center justify-center p-4 transition-all duration-300 opacity-0">
        <!-- Close button -->
        <button id="lightbox-close" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all">
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>
        
        <!-- Navigation Controls -->
        <button id="lightbox-prev" class="absolute left-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer transition-all select-none">
          <span class="material-symbols-outlined text-3xl">chevron_left</span>
        </button>
        
        <!-- Main Image -->
        <div id="lightbox-img-container" class="max-w-full max-h-[80vh] flex items-center justify-center relative p-2">
          <img id="lightbox-img" src="" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-300"/>
        </div>
        
        <button id="lightbox-next" class="absolute right-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer transition-all select-none">
          <span class="material-symbols-outlined text-3xl">chevron_right</span>
        </button>
        
        <!-- Caption / Photo Count -->
        <div id="lightbox-caption" class="text-on-surface-variant text-xs sm:text-sm mt-4 font-body-md text-center bg-white/5 px-4 py-1.5 rounded-full border border-white/5"></div>
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
        ${photos.map((photo, index) => `
          <div class="memory-card glass-card rounded-2xl overflow-hidden aspect-[4/3] border-white/10 group relative cursor-pointer shadow-lg hover:scale-[1.02] transition-all duration-300" data-index="${index}">
            <img src="${photo}" alt="Memory photo ${index + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-3xl transform scale-75 group-hover:scale-100 transition-transform duration-300">zoom_in</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    setupLightbox(photos);
  }

  function renderEmptyState() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = `
      <div class="glass-card rounded-2xl p-10 sm:p-12 text-center border-white/10 max-w-md mx-auto">
        <span class="material-symbols-outlined text-outline text-5xl mb-4">photo_library</span>
        <h3 class="font-headline-md text-lg text-white font-bold mb-2">No photos found</h3>
        <p class="font-body-md text-on-surface-variant text-sm sm:text-base">Photos for this camp haven't been tagged in Cloudinary yet. Tag your photos with <strong>"${tag}"</strong> in Cloudinary to show them here.</p>
      </div>
    `;
  }

  function renderErrorState(tag, cloudName) {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = `
      <div class="glass-card rounded-2xl p-6 sm:p-8 border-white/10 max-w-xl mx-auto flex flex-col gap-4 text-left">
        <div class="flex items-center gap-3 text-warning">
          <span class="material-symbols-outlined text-3xl animate-pulse">warning</span>
          <h3 class="font-headline-md text-lg text-white font-bold">Cloudinary Access Restricted</h3>
        </div>
        
        <p class="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          The website tried to fetch the photo list from Cloudinary under the tag <strong>"${tag}"</strong>, but the request was blocked. This happens because Cloudinary restricts public list access by default.
        </p>

        <div class="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
          <h4 class="font-label-md text-xs text-primary uppercase tracking-wide font-bold">How to unlock this (One-time Setup):</h4>
          <ol class="list-decimal pl-4 text-xs text-on-surface-variant space-y-2.5 leading-relaxed">
            <li>Log into your <strong>Cloudinary Management Console</strong>.</li>
            <li>Click the <strong>Settings (Gear Icon)</strong> in the bottom-left corner.</li>
            <li>Select <strong>Security</strong> from the settings menu.</li>
            <li>Scroll down to the <strong>Restricted media types</strong> section.</li>
            <li><strong>Uncheck</strong> the checkbox next to <strong>Resource list</strong>.</li>
            <li>Click <strong>Save</strong> at the bottom.</li>
            <li>Ensure you upload photos and tag them exactly with: <code class="bg-black/40 px-1.5 py-0.5 rounded text-secondary font-mono">${tag}</code></li>
          </ol>
        </div>

        <button onclick="window.location.reload()" class="w-full sm:w-max px-6 py-2.5 rounded-full bg-primary text-white text-xs font-label-md uppercase tracking-wider hover:bg-opacity-90 transition-all text-center self-center sm:self-start cursor-pointer">
          Retry Connection
        </button>
      </div>
    `;
  }

  function setupLightbox(photos) {
    const cards = document.querySelectorAll('.memory-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCaption = document.getElementById('lightbox-caption');

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      setTimeout(() => {
        lightbox.classList.add('opacity-100');
        lightbox.classList.remove('opacity-0');
      }, 10);
    }

    function closeLightbox() {
      lightbox.classList.add('opacity-0');
      lightbox.classList.remove('opacity-100');
      setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 300);
    }

    function updateLightbox() {
      if (!lightboxImg) return;
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = photos[currentIndex];
        lightboxCaption.innerText = `Image ${currentIndex + 1} of ${photos.length}`;
        lightboxImg.style.opacity = '1';
      }, 150);
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % photos.length;
      updateLightbox();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + photos.length) % photos.length;
      updateLightbox();
    }

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'));
        openLightbox(idx);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    // Close on backdrop click
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.id === 'lightbox-img-container') {
          closeLightbox();
        }
      });
    }

    // Keyboard Navigation
    const keyHandler = (e) => {
      if (lightbox && !lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
      }
    };

    document.addEventListener('keydown', keyHandler);
    lightbox._keyHandler = keyHandler;
  }
}
