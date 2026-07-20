export function Navbar() {
  return `
    <nav class="fixed top-0 w-full bg-surface/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(86,141,255,0.2)] z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 transition-all duration-300">
      <div class="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary cursor-pointer select-none">ARK YOUTH</div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <a id="nav-home" class="text-primary border-b-2 border-primary pb-1 font-body-md cursor-pointer" href="#home">Home</a>
        <a id="nav-about" class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md cursor-pointer" href="#about">About Us</a>
        <a id="nav-events" class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md cursor-pointer" href="#events">Events</a>
        <a id="nav-faith" class="text-on-surface-variant hover:text-on-surface transition-colors font-body-md cursor-pointer" href="#faith">Faith in Action</a>
      </div>
      
      <div class="flex items-center gap-4">
        <button id="enroll-btn" class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:shadow-[0_0_20px_rgba(0,244,254,0.4)] active:scale-95 transition-all duration-300">Enroll Now</button>
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" class="md:hidden text-primary focus:outline-none">
          <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-white/10 py-6 flex flex-col items-center space-y-6 shadow-2xl transition-all duration-300">
        <a id="mobile-nav-home" class="text-primary font-body-md text-lg" href="#home">Home</a>
        <a id="mobile-nav-about" class="text-on-surface-variant hover:text-on-surface font-body-md text-lg" href="#about">About Us</a>
        <a id="mobile-nav-events" class="text-on-surface-variant hover:text-on-surface font-body-md text-lg" href="#events">Events</a>
        <a id="mobile-nav-faith" class="text-on-surface-variant hover:text-on-surface font-body-md text-lg" href="#faith">Faith in Action</a>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const enrollBtn = document.getElementById('enroll-btn');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
      }
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = toggleBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      window.open('https://forms.google.com/placeholder-camp-enrollment', '_blank');
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
