/* ============================================================
   BERT WEIGEL – Portfolio JavaScript
   ============================================================ */

// ─── Werkdaten ────────────────────────────────────────────────
const artworks = [
  // ── Heiligendamm ──────────────────────────────────────────
  {
    id: 1,
    title: "Heiligendamm",
    category: "heiligendamm",
    img: "images/heiligendamm/heiligendamm.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "60 × 80 cm",
    gradient: "linear-gradient(145deg, #1a3a5c 0%, #2d6a8a 40%, #c8b890 80%, #e8d8b0 100%)"
  },
  {
    id: 2,
    title: "Hohes Ufer",
    category: "heiligendamm",
    img: "images/heiligendamm/hohes-ufer.jpg",
    technique: "Acryl auf Leinwand",
    size: "70 × 90 cm",
    gradient: "linear-gradient(155deg, #0c2a4a 0%, #1e5070 45%, #8ab0cc 75%, #d4c8a8 100%)"
  },
  {
    id: 3,
    title: "Grandhotel",
    category: "heiligendamm",
    img: "images/heiligendamm/grandhotel.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "50 × 70 cm",
    gradient: "linear-gradient(140deg, #2a4060 0%, #5a80a0 50%, #c0d0e0 80%, #ecddc8 100%)"
  },
  {
    id: 4,
    title: "Buhnen",
    category: "heiligendamm",
    img: "images/heiligendamm/buhnen.jpg",
    technique: "Mischtechnik auf Holzfaser",
    size: "60 × 80 cm",
    gradient: "linear-gradient(150deg, #0a1e35 0%, #1a4060 40%, #6090b0 70%, #b0c8d8 100%)"
  },
  {
    id: 5,
    title: "Strandkörbe",
    category: "heiligendamm",
    img: "images/heiligendamm/strandkoerbe.jpg",
    technique: "Acryl auf Holzfaser",
    size: "45 × 65 cm",
    gradient: "linear-gradient(135deg, #1e3848 0%, #2e5878 45%, #a8c0d0 70%, #e8d8b8 100%)"
  },

  // ── Darß ──────────────────────────────────────────────────
  {
    id: 6,
    title: "Darß 1",
    category: "darss",
    img: "images/darss/darss-1.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "50 × 60 cm",
    gradient: "linear-gradient(155deg, #0f3525 0%, #1a5535 40%, #4a9060 70%, #90c880 100%)"
  },
  {
    id: 7,
    title: "Darß 2",
    category: "darss",
    img: "images/darss/darss-2.jpg",
    technique: "Acryl auf Holzfaser",
    size: "60 × 80 cm",
    gradient: "linear-gradient(145deg, #102e20 0%, #1e5838 45%, #4a8860 70%, #80b878 100%)"
  },
  {
    id: 8,
    title: "Darß 3",
    category: "darss",
    img: "images/darss/darss-3.jpg",
    technique: "Mischtechnik auf Holzfaser",
    size: "55 × 70 cm",
    gradient: "linear-gradient(160deg, #0a2818 0%, #154830 40%, #3a7850 68%, #6aaa70 100%)"
  },
  {
    id: 9,
    title: "Darß 4",
    category: "darss",
    img: "images/darss/darss-4.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "60 × 60 cm",
    gradient: "linear-gradient(140deg, #0d3020 0%, #1c5838 42%, #509868 70%, #8ac880 100%)"
  },
  {
    id: 10,
    title: "Darß 5",
    category: "darss",
    img: "images/darss/darss-5.jpg",
    technique: "Acryl auf Leinwand",
    size: "70 × 90 cm",
    gradient: "linear-gradient(150deg, #112a1c 0%, #205040 45%, #4a9065 70%, #7ab880 100%)"
  },
  {
    id: 11,
    title: "Darß 6",
    category: "darss",
    img: "images/darss/darss-6.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "50 × 65 cm",
    gradient: "linear-gradient(145deg, #0e2d1e 0%, #1c5035 42%, #48886a 70%, #85b87a 100%)"
  },
  {
    id: 12,
    title: "Darß 7",
    category: "darss",
    img: "images/darss/darss-7.jpg",
    technique: "Mischtechnik",
    size: "45 × 60 cm",
    gradient: "linear-gradient(158deg, #0c2c1a 0%, #1a4e30 40%, #4a8858 68%, #88b870 100%)"
  },
  {
    id: 13,
    title: "Darß 8",
    category: "darss",
    img: "images/darss/darss-8.jpg",
    technique: "Acryl auf Holzfaser",
    size: "60 × 75 cm",
    gradient: "linear-gradient(142deg, #0f2e1e 0%, #1e5238 44%, #4e906a 70%, #86b882 100%)"
  },

  // ── Architektur ───────────────────────────────────────────
  {
    id: 14,
    title: "Haus Weimar",
    category: "architektur",
    img: "images/architektur/haus-weimar.jpg",
    technique: "Acryl auf Holzfaser",
    size: "40 × 60 cm",
    gradient: "linear-gradient(145deg, #2e2820 0%, #5a4e3a 45%, #a09070 75%, #d0c0a0 100%)"
  },
  {
    id: 15,
    title: "Grandhotel Heiligendamm",
    category: "architektur",
    img: "images/architektur/grandhotel-architektur.jpg",
    technique: "Acryl/Frottage auf Holzfaser",
    size: "80 × 60 cm",
    gradient: "linear-gradient(150deg, #222c38 0%, #3a5068 45%, #8098b0 72%, #c8d8e8 100%)"
  },
  {
    id: 16,
    title: "Hafenblick",
    category: "architektur",
    img: "images/architektur/hafenblick.jpg",
    technique: "Acryl auf Leinwand",
    size: "50 × 70 cm",
    gradient: "linear-gradient(140deg, #1a2840 0%, #2e4860 48%, #6888a8 75%, #b8c8d8 100%)"
  },

  // ── Porträts ──────────────────────────────────────────────
  {
    id: 17,
    title: "Astrid",
    category: "portraets",
    img: "images/portraets/astrid.jpg",
    technique: "Acryl auf Leinwand",
    size: "50 × 70 cm",
    gradient: "linear-gradient(150deg, #301a18 0%, #683830 48%, #c88868 76%, #e8c8a8 100%)"
  },
  {
    id: 18,
    title: "Attis Rückblick",
    category: "portraets",
    img: "images/portraets/attis-rueckblick.jpg",
    technique: "Mischtechnik auf Leinwand",
    size: "60 × 80 cm",
    gradient: "linear-gradient(145deg, #201828 0%, #483060 48%, #9068a0 74%, #c8a8c8 100%)"
  },
];

// ─── Konfiguration ────────────────────────────────────────────
const CATEGORY_LABELS = {
  heiligendamm: "Heiligendamm",
  darss:        "Darß",
  architektur:  "Architektur",
  portraets:    "Porträts",
};

const CATEGORY_CLASS = {
  heiligendamm: "cat-heiligendamm",
  darss:        "cat-darss",
  architektur:  "cat-architektur",
  portraets:    "cat-portraets",
};

// ─── Galerie rendern ──────────────────────────────────────────
function renderGallery(filter = 'all') {
  const gallery  = document.getElementById('gallery');
  const hint     = document.getElementById('gallery-hint');
  const filtered = filter === 'all'
    ? artworks
    : artworks.filter(a => a.category === filter);

  // Karten mit gestaffelten Delays
  gallery.innerHTML = filtered.map((art, i) => `
    <div class="gallery-card"
         data-id="${art.id}"
         style="transition-delay: ${i * 45}ms"
         onclick="openLightbox(${art.id})"
         role="button"
         tabindex="0"
         aria-label="${art.title} öffnen"
         onkeydown="if(event.key==='Enter'||event.key===' ')openLightbox(${art.id})">
      <div class="gallery-card-bg" style="background: ${art.gradient}"></div>
      <img src="${art.img}"
           alt="${art.title} – ${art.technique}"
           loading="lazy"
           onerror="this.style.opacity='0'">
      <div class="gallery-card-overlay">
        <div class="gallery-card-info">
          <div class="gallery-card-category ${CATEGORY_CLASS[art.category]}">
            ${CATEGORY_LABELS[art.category]}
          </div>
          <div class="gallery-card-title">${art.title}</div>
          <div class="gallery-card-meta">${art.technique}&ensp;·&ensp;${art.size}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Hinweis einblenden
  hint.classList.toggle('hidden', filtered.length < 6);

  // Karten animiert einblenden
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.gallery-card').forEach(el => {
        el.classList.add('visible');
      });
    });
  });
}

// ─── Filter-Buttons ───────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const gallery = document.getElementById('gallery');
    gallery.style.opacity = '0';
    gallery.style.transform = 'translateY(8px)';

    setTimeout(() => {
      renderGallery(btn.dataset.filter);
      gallery.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      gallery.style.opacity = '1';
      gallery.style.transform = 'translateY(0)';
    }, 220);
  });
});

// ─── Lightbox ─────────────────────────────────────────────────
function openLightbox(id) {
  const art = artworks.find(a => a.id === id);
  if (!art) return;

  document.getElementById('lightbox-category').textContent  = CATEGORY_LABELS[art.category];
  document.getElementById('lightbox-title').textContent     = art.title;
  document.getElementById('lightbox-technique').textContent = art.technique;
  document.getElementById('lightbox-size').textContent      = art.size;

  const contactLink = document.getElementById('lightbox-contact');
  contactLink.href = `mailto:bert.weigel@gmx.de?subject=Anfrage: ${encodeURIComponent(art.title)}`;

  const container = document.getElementById('lightbox-img-container');
  container.innerHTML = `
    <div style="position:absolute;inset:0;background:${art.gradient}"></div>
    <img src="${art.img}"
         alt="${art.title}"
         style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"
         onerror="this.style.opacity='0'">
  `;

  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    lightbox.style.display = 'none';
  }, 300);
}

// ESC-Taste
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ─── Mobile Menu ──────────────────────────────────────────────
const menuBtn       = document.getElementById('menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const menuIconOpen  = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  menuIconOpen.classList.toggle('hidden', !isOpen);
  menuIconClose.classList.toggle('hidden', isOpen);
});

// Menü bei Link-Klick schließen
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  });
});

// ─── Navbar-Hintergrund beim Scrollen ────────────────────────
const navEl   = document.getElementById('navbar');
const navGlass = navEl.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
  navGlass.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── Scroll-Fade-In (IntersectionObserver) ───────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ─── Smooth-Scroll für interne Links ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = 90; // Navbar-Höhe
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Initialisierung ──────────────────────────────────────────
renderGallery();
