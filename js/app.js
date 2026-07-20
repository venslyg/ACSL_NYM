import { Navbar, initNavbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { UpcomingEvents, initUpcomingEvents } from '../components/UpcomingEvents.js';
import { EventDetailModal, initEventDetailModal } from '../components/EventDetailModal.js';
import { Footer, initFooter } from '../components/Footer.js';

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

  // Bind mousemove tracking for glass-card hover glow effects
  document.addEventListener('mousemove', (e) => {
    // Subtle parallax for diagonal lines
    const overlay = document.querySelector('.diagonal-accents');
    if (overlay) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      overlay.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }

    // Glass card 3D lighting reflection
    document.querySelectorAll('.glass-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Hero Faith in Action button listener (scrolling to events or opening detailed view directly)
  const heroBtn = document.getElementById('hero-faith-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
        // Let's trigger opening details after brief scroll
        setTimeout(() => {
          const eventDetailEvent = new CustomEvent('open-event-detail', {
            detail: {
              id: "faith-in-action-camp",
              title: "Faith in Action Camp",
              description: "Ignite your purpose. Experience 5 days of high-octane growth, digital discipleship, and extreme worship in the heart of the mountains. Join hundreds of young leaders as we dive into what it means to live out our faith in a modern world.",
              date: "July 15 - 20, 2024",
              time: "Check-in: 09:00 AM",
              location: "Summit Ridge, CO",
              venue: "Altitude Peak Grounds",
              category: "summit",
              isMajor: true,
              image: "assets/images/event-camp.jpg",
              speakers: "Dave Cho & Friends (+ Surprise Guests)",
              enrollLink: "https://forms.google.com/placeholder-camp-enrollment",
              agenda: [
                {
                  day: "01 / ARRIVAL DAY",
                  title: "Registration & Ignition Session",
                  time: "09:00 - 21:00",
                  description: "Unpack, meet your squad, and kick off the week with a high-energy evening service designed to set the pace."
                },
                {
                  day: "02-04 / CORE DAYS",
                  title: "The Deep Dive Series",
                  time: "DAILY SCHEDULE",
                  description: "Intensive training, Adventure Labs, Workshop Tracks, and Evening Neon Rallies.",
                  subItems: ["Morning Intensity", "Adventure Labs", "Workshop Tracks", "Evening Neon Rally"]
                },
                {
                  day: "05 / FINALE",
                  title: "Commissioning Gala",
                  time: "ALL DAY",
                  description: "Celebrate the transformation. A night of awards, testimonies, and the final commissioning service."
                }
              ],
              packingList: [
                { item: "Bible & Notebook", detail: "Digital or analog acceptable." },
                { item: "Outdoor Gear", detail: "Hiking shoes and warm layers for nights." },
                { item: "Neon/White Clothing", detail: "For the 'Lumina' Night Rally." },
                { item: "Tech Essentials", detail: "Portable chargers and headphones." }
              ]
            }
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
      events: [document.getElementById('nav-events'), document.getElementById('mobile-nav-events')],
      faith: [document.getElementById('nav-faith'), document.getElementById('mobile-nav-faith')]
    };

    // If we're looking at events section, and the user scrolls there, highlight both events and faith (since faith camp is in events)
    const highlightedId = (currentId === 'events') ? 'events' : currentId;

    Object.keys(links).forEach(key => {
      links[key].forEach(el => {
        if (!el) return;
        if (key === highlightedId) {
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
