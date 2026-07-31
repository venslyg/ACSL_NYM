import { Navbar, initNavbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { UpcomingEvents, initUpcomingEvents } from '../components/UpcomingEvents.js';
import { EventDetailModal, initEventDetailModal } from '../components/EventDetailModal.js';
import { Footer, initFooter } from '../components/Footer.js';
import { Memories, initMemories } from '../components/Memories.js';
import { upcomingEvents } from './eventsData.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  // Initialize Home specific observers and event handlers
  function initHome() {
    // Scroll reveal zoom effect for cards
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-zoom-card').forEach(card => {
      cardObserver.observe(card);
    });

    // Hero Faith in Action button listener
    const heroBtn = document.getElementById('hero-faith-btn');
    if (heroBtn) {
      heroBtn.addEventListener('click', () => {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const eventDetailEvent = new CustomEvent('open-event-detail', {
              detail: upcomingEvents[0]
            });
            window.dispatchEvent(eventDetailEvent);
          }, 800);
        }
      });
    }
  }

  // Routing Handler
  function handleRoute() {
    const hash = window.location.hash || '#home';

    if (hash.startsWith('#memories')) {
      const urlParams = new URLSearchParams(hash.split('?')[1] || '');
      const campId = urlParams.get('camp');

      app.innerHTML = `
        ${Navbar()}
        <main class="relative pt-12">
          ${Memories(campId)}
        </main>
      `;

      initNavbar();
      initMemories(campId);
      window.scrollTo(0, 0);
    } else {
      // Clean up memories page resize listener if it exists
      if (window.currentMemoriesResizeHandler) {
        window.removeEventListener('resize', window.currentMemoriesResizeHandler);
        window.currentMemoriesResizeHandler = null;
      }
      if (window.currentMemoriesKeydownHandler) {
        window.removeEventListener('keydown', window.currentMemoriesKeydownHandler);
        window.currentMemoriesKeydownHandler = null;
      }

      // Default Home route
      app.innerHTML = `
        ${Navbar()}
        <main class="relative pt-12">
          ${Hero()}
          ${UpcomingEvents()}
          ${About()}
        </main>
        ${EventDetailModal()}
        ${Footer()}
      `;

      initNavbar();
      initUpcomingEvents();
      initEventDetailModal();
      initFooter();
      initHome();

      // If we landed on or navigated to a section hash, scroll to it
      if (hash && hash !== '#home' && hash.startsWith('#')) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  // Listen for hash routing updates
  window.addEventListener('hashchange', handleRoute);

  // Run initial route match
  handleRoute();

  // Bind mousemove tracking for glass-card hover glow effects
  document.addEventListener('mousemove', (e) => {
    const overlay = document.querySelector('.diagonal-accents');
    if (overlay) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      overlay.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }

    document.querySelectorAll('.glass-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Active state link highlighters
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    let currentId = 'home';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    const activeClass = ['text-primary', 'border-b-2', 'border-primary', 'pb-1'];
    const inactiveClass = ['text-on-surface-variant', 'hover:text-on-surface'];

    const links = {
      home: [document.getElementById('nav-home'), document.getElementById('mobile-nav-home')],
      about: [document.getElementById('nav-about'), document.getElementById('mobile-nav-about')],
      events: [document.getElementById('nav-events'), document.getElementById('mobile-nav-events')]
    };

    Object.keys(links).forEach(key => {
      links[key].forEach(el => {
        if (!el) return;
        if (key === currentId) {
          el.classList.add(...activeClass);
          el.classList.remove(...inactiveClass);
        } else {
          el.classList.remove(...activeClass);
          el.classList.add(...inactiveClass);
        }
      });
    });
  });

});
