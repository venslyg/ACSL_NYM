export function Navbar() {
  return `
    <nav class="fixed top-0 w-full bg-surface/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(86,141,255,0.2)] z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 transition-all duration-300">
      <!-- Logo & Title -->
      <div class="flex items-center gap-3 font-headline-md text-lg md:text-xl font-extrabold tracking-tighter text-primary cursor-pointer select-none">
        <img src="assets/images/final logo.png" alt="ACSL Logo" class="h-9 md:h-11 w-auto object-contain"/>
        <span class="hidden sm:inline">ACSL National Youth Ministry</span>
        <span class="sm:hidden">ACSL NYM</span>
      </div>
      
      <!-- Centered Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
        <a id="nav-home" class="text-primary border-b-2 border-primary pb-1 font-body-md cursor-pointer transition-colors" href="#home">Home</a>
        <a id="nav-about" class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md cursor-pointer" href="#about">About Us</a>
        <a id="nav-events" class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md cursor-pointer" href="#events">Events</a>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <div class="flex items-center gap-4 md:hidden">
        <button id="mobile-menu-toggle" class="text-primary focus:outline-none">
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-white/10 py-6 flex flex-col items-center space-y-6 shadow-2xl transition-all duration-300 md:hidden">
        <a id="mobile-nav-home" class="text-primary font-body-md text-lg" href="#home">Home</a>
        <a id="mobile-nav-about" class="text-on-surface-variant hover:text-on-surface font-body-md text-lg" href="#about">About Us</a>
        <a id="mobile-nav-events" class="text-on-surface-variant hover:text-on-surface font-body-md text-lg" href="#events">Events</a>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = toggleBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // Active Link Tracking and Header Shrinking
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > 20) {
        nav.classList.add('py-2');
        nav.classList.remove('py-4');
      } else {
        nav.classList.add('py-4');
        nav.classList.remove('py-2');
      }
    }
  });
}
