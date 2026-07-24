import { Navbar, initNavbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { UpcomingEvents, initUpcomingEvents } from '../components/UpcomingEvents.js';
import { EventDetailModal, initEventDetailModal } from '../components/EventDetailModal.js';
import { Footer, initFooter } from '../components/Footer.js';
import { upcomingEvents } from './eventsData.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  // Render components into the DOM
  app.innerHTML = `
    ${Navbar()}
    <main class="relative pt-12">
      ${Hero()}
      ${About()}
      ${UpcomingEvents()}
    </main>
    ${EventDetailModal()}
    ${Footer()}
  `;

  // Initialize interactive features
  initNavbar();
  initUpcomingEvents();
  initEventDetailModal();
  initFooter();

  // Scroll reveal zoom effect for cards
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.08
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

  // Active state link highlighters
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
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
