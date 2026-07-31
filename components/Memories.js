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
    <section class="min-h-screen pt-10 pb-16 w-full max-w-none relative scroll-mt-20">
      
      <!-- Back Navigation & Header -->
      <div class="mb-10 flex flex-col gap-4 px-margin-mobile md:px-margin-desktop">
        <div class="flex items-center gap-4">
          <a href="#events" class="flex items-center gap-2 text-primary hover:text-secondary transition-colors w-max font-label-md text-xs uppercase font-bold">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            Back to Events
          </a>
          <span class="text-white/20 select-none">|</span>
          <a href="#home" class="flex items-center gap-2 text-primary hover:text-secondary transition-colors w-max font-label-md text-xs uppercase font-bold">
            <span class="material-symbols-outlined text-sm">home</span>
            Return to Home
          </a>
        </div>
        
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
      <div id="gallery-container" class="w-full px-margin-mobile md:px-margin-desktop">
        <!-- Skeleton Loading State -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 animate-pulse w-full">
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full"></div>
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full"></div>
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full"></div>
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full hidden sm:block"></div>
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full hidden md:block"></div>
          <div class="bg-white/5 border border-white/5 rounded-xl aspect-[4/3] w-full hidden md:block"></div>
        </div>
      </div>

    </section>

    <!-- Lightbox Modal -->
    <div id="memories-lightbox" class="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[100] hidden flex-col items-center justify-center select-none opacity-0 transition-opacity duration-300">
      <!-- Close Button -->
      <button id="lightbox-close" class="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[110] w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
        <span class="material-symbols-outlined text-2xl">close</span>
      </button>

      <!-- PC Arrow Left -->
      <button id="lightbox-prev" class="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] w-14 h-14 rounded-full items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
        <span class="material-symbols-outlined text-3xl">chevron_left</span>
      </button>

      <!-- PC Arrow Right -->
      <button id="lightbox-next" class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] w-14 h-14 rounded-full items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
        <span class="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      <!-- Image Wrapper -->
      <div id="lightbox-wrapper" class="relative w-full max-w-5xl h-full max-h-[80vh] px-4 flex items-center justify-center overflow-hidden">
        <img id="lightbox-img" src="" alt="Enlarged memory" class="max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl opacity-0 transition-opacity duration-300"/>
      </div>

      <!-- Counter -->
      <div id="lightbox-counter" class="absolute bottom-6 font-label-md text-white/50 text-xs sm:text-sm tracking-widest uppercase"></div>
    </div>
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

  let currentPage = 1;
  const itemsPerPage = 32; // Multiple of 4 columns, about 30 images, fills the page cleanly
  let allPhotos = [];

  // Fetch list of files from Cloudinary Tag List API
  fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(data => {
      allPhotos = (data.resources || []).map(resource => {
        // Construct optimized Cloudinary URLs using on-the-fly transformations
        return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_800/v${resource.version}/${resource.public_id}.${resource.format}`;
      });

      if (allPhotos.length === 0) {
        renderEmptyState();
        return;
      }

      updateGallery();
    })
    .catch(error => {
      console.error("Cloudinary load error: ", error);
      renderErrorState(tag, CLOUD_NAME);
    });

  // Keep pagination responsive to resizing
  if (window.currentMemoriesResizeHandler) {
    window.removeEventListener('resize', window.currentMemoriesResizeHandler);
  }
  window.currentMemoriesResizeHandler = () => {
    updateGallery();
  };
  window.addEventListener('resize', window.currentMemoriesResizeHandler);

  function updateGallery() {
    if (!galleryContainer || allPhotos.length === 0) return;

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pagePhotos = allPhotos.slice(startIndex, endIndex);

      renderGallery(pagePhotos);
      renderPagination(allPhotos.length);
    } else {
      renderGallery(allPhotos);
    }
  }

  function renderGallery(photos) {
    if (!galleryContainer) return;

    galleryContainer.innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full animate-fade-in">
        ${photos.map((photo, index) => {
          // Calculate the correct absolute index for the image card
          const absoluteIndex = (currentPage - 1) * itemsPerPage + index;
          
          // Generate sequential bento small tiles pattern
          let bentoClass = "col-span-1";
          const mod = absoluteIndex % 12;
          if (mod === 1 || mod === 5 || mod === 6) {
            bentoClass = "col-span-1 md:col-span-2";
          } else if (mod === 4 || mod === 7 || mod === 10) {
            bentoClass = "col-span-2 md:col-span-1";
          }
          if (mod === 10) {
            bentoClass = "col-span-2 md:col-span-2";
          }

          return `
            <div class="gallery-image-card glass-card rounded-xl sm:rounded-2xl overflow-hidden border-white/10 group relative shadow-lg hover:scale-[1.01] transition-all duration-300 w-full h-[180px] sm:h-[220px] md:h-[260px] cursor-pointer ${bentoClass}" data-index="${absoluteIndex}">
              <img src="${photo}" alt="Memory photo ${absoluteIndex + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" loading="lazy"/>
            </div>
          `;
        }).join('')}
      </div>
      <div id="memories-pagination" class="hidden md:flex items-center justify-center gap-2 mt-12 w-full"></div>
    `;
  }

  function renderPagination(totalItems) {
    const paginationEl = document.getElementById('memories-pagination');
    if (!paginationEl) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) {
      paginationEl.classList.add('hidden');
      return;
    }

    paginationEl.classList.remove('hidden');

    let buttonsHtml = `
      <button id="prev-page" class="glass-card w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === 1 ? 'disabled' : ''}>
        <span class="material-symbols-outlined text-sm">chevron_left</span>
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        buttonsHtml += `
          <button class="bg-primary/20 border border-primary/40 text-primary w-10 h-10 rounded-full flex items-center justify-center font-bold font-label-md text-xs select-none shadow-[0_0_15px_rgba(86,141,255,0.3)]">${i}</button>
        `;
      } else {
        buttonsHtml += `
          <button data-page="${i}" class="page-num-btn glass-card text-on-surface-variant hover:text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-label-md text-xs select-none">${i}</button>
        `;
      }
    }

    buttonsHtml += `
      <button id="next-page" class="glass-card w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === totalPages ? 'disabled' : ''}>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    `;

    paginationEl.innerHTML = buttonsHtml;

    // Add event listeners
    const prevBtn = document.getElementById('prev-page');
    if (prevBtn && currentPage > 1) {
      prevBtn.addEventListener('click', () => {
        currentPage--;
        updateGallery();
        galleryContainer.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const nextBtn = document.getElementById('next-page');
    if (nextBtn && currentPage < totalPages) {
      nextBtn.addEventListener('click', () => {
        currentPage++;
        updateGallery();
        galleryContainer.scrollIntoView({ behavior: 'smooth' });
      });
    }

    paginationEl.querySelectorAll('.page-num-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentPage = parseInt(e.currentTarget.getAttribute('data-page'));
        updateGallery();
        galleryContainer.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Lightbox Modal Functionality
  let lightboxCurrentIndex = 0;
  const lightbox = document.getElementById('memories-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    lightboxCurrentIndex = index;
    updateLightboxImage();
    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.remove('opacity-0');
      lightbox.classList.add('opacity-100');
    }, 50);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('opacity-100');
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    if (!lightboxImg || !lightboxCounter) return;
    const photoUrl = allPhotos[lightboxCurrentIndex];
    lightboxImg.classList.add('opacity-0');
    setTimeout(() => {
      lightboxImg.src = photoUrl;
      lightboxImg.onload = () => {
        lightboxImg.classList.remove('opacity-0');
      };
      lightboxCounter.textContent = `${lightboxCurrentIndex + 1} / ${allPhotos.length}`;
    }, 150);
  }

  function showNextImage() {
    if (allPhotos.length === 0) return;
    lightboxCurrentIndex = (lightboxCurrentIndex + 1) % allPhotos.length;
    updateLightboxImage();
  }

  function showPrevImage() {
    if (allPhotos.length === 0) return;
    lightboxCurrentIndex = (lightboxCurrentIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightboxImage();
  }

  // Open Lightbox on gallery card click (event delegation)
  if (galleryContainer) {
    galleryContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.gallery-image-card');
      if (card) {
        const index = parseInt(card.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          openLightbox(index);
        }
      }
    });
  }

  // Swipe support for mobile view
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNextImage();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrevImage();
    }
  }

  // Lightbox control button actions
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.id === 'lightbox-wrapper') {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  };
  window.addEventListener('keydown', handleKeyDown);

  // Keydown handler cleanup
  if (window.currentMemoriesKeydownHandler) {
    window.removeEventListener('keydown', window.currentMemoriesKeydownHandler);
  }
  window.currentMemoriesKeydownHandler = handleKeyDown;

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
