export function Footer() {
  return `
    <!-- Final Newsletter CTA -->
    <section class="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
      <div class="max-w-container-max mx-auto glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>
        <h3 class="font-headline-lg text-headline-lg mb-6 relative z-10 font-bold">Sync with the Movement.</h3>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto relative z-10">
          Get the latest event drops, spiritual directives, and digital resources delivered directly to your inbox.
        </p>
        <div class="flex flex-col md:flex-row max-w-md mx-auto gap-4 relative z-10">
          <input type="email" class="flex-grow bg-black/40 border-b-2 border-white/10 px-6 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all rounded-lg" placeholder="Your encrypted email..."/>
          <button id="subscribe-btn" class="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-pointer">Subscribe</button>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="w-full mt-auto bg-surface-container-lowest border-t border-white/5 no shadow py-12 px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
        <div class="md:col-span-5 mb-8 md:mb-0">
          <div class="font-headline-md text-headline-md font-bold text-primary mb-4">ARK YOUTH</div>
          <p class="font-body-md text-body-md text-outline mb-6 max-w-sm">Empowering the next generation of digital disciples through action, faith, and technology.</p>
          <div class="flex gap-4">
            <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all" href="#">
              <span class="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all" href="#">
              <span class="material-symbols-outlined text-[20px]">alternate_email</span>
            </a>
          </div>
        </div>

        <div class="md:col-span-2 md:col-start-7">
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Ministry</h4>
          <ul class="space-y-2">
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#about">Our Vision</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#about">Staff</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#events">Contact Us</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Legal</h4>
          <ul class="space-y-2">
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#">Privacy Policy</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#">Terms of Service</a></li>
            <li><a class="font-body-md text-body-md text-outline hover:text-on-surface transition-colors" href="#">Statement of Faith</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-secondary font-bold font-body-md mb-4 uppercase text-sm tracking-wider">Contact</h4>
          <ul class="space-y-3 font-body-md text-outline text-sm">
            <li class="flex items-center space-x-2">
              <span class="material-symbols-outlined text-primary text-sm">mail</span>
              <span>mission@arkyouth.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="material-symbols-outlined text-primary text-sm">location_on</span>
              <span>HQ: New York Digital Hub</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-container-max mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-label-md text-label-md text-outline text-xs">© 2024 ARK National Youth Ministry. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">face</span></a>
          <a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">photo_camera</span></a>
          <a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">movie</span></a>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  const subscribeBtn = document.getElementById('subscribe-btn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
      alert('Subscription encrypted. Welcome to the movement!');
    });
  }
}
