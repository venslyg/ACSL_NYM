export function Footer() {
  return `
    <!-- Main Footer -->
    <footer class="w-full mt-auto bg-surface-container-lowest border-t border-white/10 py-12 px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
        
        <!-- Brand Info -->
        <div class="md:col-span-5 mb-8 md:mb-0">
          <div class="flex items-center gap-3 font-headline-md text-headline-md font-bold text-primary mb-4">
            <img src="assets/images/final logo.png" alt="ACSL Logo" class="h-10 w-auto object-contain"/>
            <span class="text-xl">ACSL National Youth Ministry</span>
          </div>
          <p class="font-body-md text-body-md text-outline mb-6 max-w-sm leading-relaxed">
            The Youth Ministry of the Apostolic Church of Sri Lanka. Empowering the next generation of disciples through prayer, action, and faith.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-3 md:col-start-7">
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Navigation</h4>
          <ul class="space-y-2">
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#home">Home</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#about">About Us</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#events">Upcoming Camp</a></li>
          </ul>
        </div>

        <div class="md:col-span-3 md:col-start-10">
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Contact & Social</h4>
          <ul class="space-y-3 font-body-md text-outline text-sm">
            <li class="flex items-center space-x-2">
              <span class="material-symbols-outlined text-primary text-sm">mail</span>
              <a href="mailto:acslnym2026@gmail.com" class="hover:text-primary transition-colors">acslnym2026@gmail.com</a>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <a href="https://www.facebook.com/share/1EYFsnfFkN/" target="_blank" class="hover:text-primary transition-colors font-bold text-white">ACSL Youth Ministry</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-container-max mx-auto pt-8 border-t border-white/5 text-center">
        <p class="font-label-md text-label-md text-outline text-xs">© 2026 ACSL National Youth Ministry. All rights reserved.</p>
      </div>
    </footer>
  `;
}

export function initFooter() {
  // Simple footer init if needed
}
