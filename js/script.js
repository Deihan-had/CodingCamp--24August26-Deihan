document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================
  // 1. DATA MATERI PERJALANAN 5 HARI (JOURNEY TABS)
  // ==========================================================
  const journeyData = {
    1: {
      kicker: "HARI 01 — PONDASI HTML5",
      title: "Struktur & Aksesibilitas Web",
      desc: "Mempelajari pentingnya Semantic HTML5, hirarki tag (<header>, <main>, <section>, <article>), serta penerapan prinsip aksesibilitas (a11y) dan struktur meta tag untuk SEO.",
      tags: ["HTML5", "Semantic Markup", "A11y", "SEO Basics"]
    },
    2: {
      kicker: "HARI 02 — DESAIN CSS3 MODERN",
      title: "Layouting & Responsive Design",
      desc: "Menguasai CSS Custom Properties (Variables), Flexbox untuk komponen, CSS Grid untuk tata letak halaman utama, serta teknik Media Queries dengan pendekatan Mobile-First.",
      tags: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design"]
    },
    3: {
      kicker: "HARI 03 — INTERAKTIVITAS JAVASCRIPT",
      title: "DOM Manipulation & Event Handling",
      desc: "Memahami sintaks ES6+, penanganan event (click, scroll, submit), pembuatan komponen interaktif dinamis seperti menu hamburger mobile, tab switcher, dan kursor kustom.",
      tags: ["JavaScript ES6+", "DOM API", "Event Listeners", "Interactive UI"]
    },
    4: {
      kicker: "HARI 04 — VALIDASI & TINGKAT LANJUT",
      title: "Form Validation & Regex",
      desc: "Mengimplementasikan validasi input di sisi klien menggunakan Regular Expression (Regex) untuk email dan nama, penanganan state error, serta pembuatan efek modal popup interaktif.",
      tags: ["Regex", "Form Validation", "Modals", "Clean Code"]
    },
    5: {
      kicker: "HARI 05 — INTEGRASI & DEPLOYMENT",
      title: "Mini Project Finalization & Deployment",
      desc: "Proses scaffolding project, refactoring kode, penyusunan dokumentasi README.md yang profesional, serta publikasi website portofolio secara live menggunakan GitHub Pages.",
      tags: ["Git & GitHub", "GitHub Pages", "Deployment", "Documentation"]
    }
  };

  // ==========================================================
  // 2. DATA MODAL DETAIL PROYEK
  // ==========================================================
  const projectsData = {
    1: {
      title: "Personal Interactive Portfolio",
      kicker: "REVOU MINI PROJECT",
      meta: "HTML5 • CSS3 • JavaScript ES6+",
      desc: "Portofolio interaktif yang dirancang khusus untuk memenuhi standar tugas akhir RevoU Coding Camp. Dilengkapi dengan berbagai fitur interaktif modern tanpa bantuan library eksternal.",
      features: [
        "Tema gelap dan terang (Dark Mode) dinamis dengan penyimpanan preferensi di LocalStorage.",
        "Validasi input form kontak dengan indikator pesan kesalahan yang akurat menggunakan Regex.",
        "Pengalaman kursor kustom interaktif dengan mode label hover otomatis.",
        "Tampilan penuh responsif dengan teknik mobile-first CSS Grid & Flexbox."
      ],
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      demo: "https://username.github.io/revou-mini-project/",
      repo: "https://github.com/username/revou-mini-project"
    },
    2: {
      title: "Task Manager Web App",
      kicker: "PROJECT 02",
      meta: "JavaScript ES6+ • DOM API • LocalStorage",
      desc: "Aplikasi produktivitas berbasis browser untuk mengelola tugas harian pengguna dengan persistensi data lokal.",
      features: [
        "Tambah, edit, tandai selesai, dan hapus item tugas secara langsung.",
        "Filter kategori tugas (Semua, Aktif, Selesai).",
        "Penyimpanan otomatis menggunakan LocalStorage API.",
        "Pencarian tugas secara real-time."
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demo: "#",
      repo: "#"
    },
    3: {
      title: "SaaS Product Landing Page",
      kicker: "PROJECT 03",
      meta: "HTML5 • CSS Grid • Responsive Design",
      desc: "Halaman pendaratan produk SaaS dengan pendekatan tipografi tebal (bold editorial style) dan efek visual berperforma tinggi.",
      features: [
        "Layout grid kompleks yang beradaptasi sempurna di tablet dan mobile.",
        "Animasi reveal halus berbasis Intersection Observer API.",
        "Desain komponen pricing table yang jernih.",
        "Optimasi aset gambar dan skor performa Lighthouse yang tinggi."
      ],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      demo: "#",
      repo: "#"
    }
  };

  // ==========================================================
  // 3. DARK / LIGHT THEME TOGGLE
  // ==========================================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Baca preferensi terimpan
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);

  themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // ==========================================================
  // 4. KURSOR KUSTOM
  // ==========================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');

  // Aktifkan kursor khusus jika perangkat mendukung pointer halus
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('cc');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);

    // Event Hover pada Elemen Interaktif
    const hoverables = document.querySelectorAll('a, button, input, textarea, .day-tab, .skill-head, .p-card');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('p-card')) {
          cursorRing.classList.add('has-label');
          cursorLabel.textContent = 'LIHAT';
        } else {
          cursorRing.classList.add('is-hover');
        }
      });

      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('is-hover', 'has-label');
        cursorLabel.textContent = '';
      });
    });

    window.addEventListener('mousedown', () => cursorRing.classList.add('is-down'));
    window.addEventListener('mouseup', () => cursorRing.classList.remove('is-down'));
  }

  // ==========================================================
  // 5. SCROLL PROGRESS & BACK TO TOP BUTTON
  // ==========================================================
  const progressBar = document.getElementById('progress-bar');
  const toTopBtn = document.getElementById('to-top');
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight);

    if (progressBar) progressBar.style.transform = `scaleX(${scrollPercent})`;

    // Header Blur Effect on Scroll
    if (header) {
      if (scrollTop > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    // Show/Hide To-Top Button
    if (toTopBtn) {
      if (scrollTop > 400) toTopBtn.classList.add('show');
      else toTopBtn.classList.remove('show');
    }
  });

  toTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================================
  // 6. TYPING EFFECT (HERO)
  // ==========================================================
  const typedEl = document.getElementById('typed-text');
  const words = ["Frontend Web Developer.", "RevoU Coding Camp SE.", "Problem Solver."];
  let wordIdx = 0, charIdx = 0, isDeleting = false;

  function typeEffect() {
    if (!typedEl) return;
    const currentWord = words[wordIdx];

    if (isDeleting) {
      typedEl.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedEl.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentWord.length) {
      typeSpeed = 2000; // Pause di akhir kata
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // ==========================================================
  // 7. MOBILE MENU NAVIGATION
  // ==========================================================
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.m-link');

  function toggleMenu() {
    const isOpen = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  }

  burger?.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) toggleMenu();
    });
  });

  // ==========================================================
  // 8. JOURNEY TABS SWITCHER
  // ==========================================================
  const dayTabs = document.querySelectorAll('.day-tab');
  const dayContent = document.getElementById('day-content');

  function renderDayContent(dayNum) {
    const data = journeyData[dayNum];
    if (!data || !dayContent) return;

    dayContent.classList.remove('show');

    setTimeout(() => {
      dayContent.innerHTML = `
        <span class="day-kicker">${data.kicker}</span>
        <h4>${data.title}</h4>
        <p>${data.desc}</p>
        <div class="chips">
          ${data.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      `;
      dayContent.classList.add('show');
    }, 200);
  }

  // Render awal (Hari 1)
  renderDayContent(1);

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const day = tab.getAttribute('data-day');
      renderDayContent(day);
    });
  });

  // ==========================================================
  // 9. SKILLS ACCORDION
  // ==========================================================
  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(item => {
    const head = item.querySelector('.skill-head');
    const body = item.querySelector('.skill-body');

    head.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Tutup semua accordion yang terbuka
      skillItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.skill-head').setAttribute('aria-expanded', 'false');
        i.querySelector('.skill-body').style.maxHeight = null;
      });

      // Buka item jika sebelumnya tertutup
      if (!isOpen) {
        item.classList.add('open');
        head.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // ==========================================================
  // 10. PORTFOLIO FILTERING
  // ==========================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.p-card');
  const filterCount = document.getElementById('filter-count');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-cat').split(' ');

        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('p-hide');
          visibleCount++;
        } else {
          card.classList.add('p-hide');
        }
      });

      if (filterCount) {
        filterCount.textContent = `Menampilkan ${visibleCount} dari ${projectCards.length} project`;
      }
    });
  });

  // ==========================================================
  // 11. MODAL DETAIL PROJECT
  // ==========================================================
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal) return;

    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-kicker').textContent = data.kicker;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-meta').textContent = data.meta;
    document.getElementById('modal-desc').textContent = data.desc;

    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = data.features.map(f => `
      <li>
        <svg class="ic" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');

    document.getElementById('modal-demo').href = data.demo;
    document.getElementById('modal-repo').href = data.repo;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project');
      openModal(pId);
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  // Close Modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });

  // ==========================================================
  // 12. FORM VALIDATION DENGAN REGEX
  // ==========================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formSuccess = document.getElementById('form-success');

  // Pattern Regex
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error state
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    // Validasi Nama
    const nameValue = nameInput.value.trim();
    if (!nameValue) {
      nameError.textContent = 'Nama lengkap wajib diisi.';
      isValid = false;
    } else if (!nameRegex.test(nameValue)) {
      nameError.textContent = 'Nama hanya boleh berupa huruf (minimal 3 karakter).';
      isValid = false;
    }

    // Validasi Email
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailError.textContent = 'Alamat email wajib diisi.';
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Format email tidak valid (contoh: user@domain.com).';
      isValid = false;
    }

    // Validasi Pesan
    const messageValue = messageInput.value.trim();
    if (!messageValue) {
      messageError.textContent = 'Pesan wajib diisi.';
      isValid = false;
    } else if (messageValue.length < 10) {
      messageError.textContent = 'Pesan harus berisi minimal 10 karakter.';
      isValid = false;
    }

    // Jika valid
    if (isValid) {
      formSuccess.textContent = '✓ Terima kasih! Pesan Anda telah berhasil dikirim.';
      contactForm.reset();
    }
  });

  // Live input validation clear
  [nameInput, emailInput, messageInput].forEach(input => {
    input?.addEventListener('input', () => {
      const errEl = document.getElementById(`${input.id}-error`);
      if (errEl) errEl.textContent = '';
    });
  });

  // ==========================================================
  // 13. INTERSECTION OBSERVER REVEAL ANIMATION
  // ==========================================================
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

});