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
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Contact</h4>
          <ul class="space-y-3 font-body-md text-outline text-sm">
            <li class="flex items-center space-x-2">
              <span class="material-symbols-outlined text-primary text-sm">mail</span>
              <span>acslnym2026@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-container-max mx-auto pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-center">
        <p class="font-label-md text-label-md text-outline text-xs">© 2026 ACSL National Youth Ministry. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">church</span></a>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  // Simple footer init if needed
}
