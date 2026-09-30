import "../scss/docs.scss";

// ============================================================
// UIForge Documentation JavaScript
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initCodeCopyButtons();
  initScrollspy();
  initMobileNav();
  initSidebarFilter();
  initDocsInteractiveDemos();
  initDocumentationReveal();
  initNavbarToggle();
  initViewportSwitcher();
  initAlertDismiss();
});

// ============================================================
// 1. Theme Toggle (Light / Dark Mode)
// ============================================================

function initThemeToggle() {
  const toggleBtn = document.getElementById("docs-theme-toggle");
  const darkIcon = document.getElementById("theme-icon-dark");
  const lightIcon = document.getElementById("theme-icon-light");

  const getPreferredTheme = () => {
    const saved = localStorage.getItem("uiforge-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("uiforge-theme", theme);
    if (darkIcon && lightIcon) {
      if (theme === "dark") {
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
      } else {
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
      }
    }
  };

  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
}

// ============================================================
// Documentation Reveal
// ============================================================

function initDocumentationReveal() {
  const revealDocumentation = () => {
    const rawHash = window.location.hash;
    if (!rawHash || rawHash === "#") {
      return;
    }

    let target = null;
    try {
      target = document.querySelector(rawHash);
    } catch {
      return;
    }

    if (!target) {
      return;
    }

    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
  };

  window.addEventListener("hashchange", revealDocumentation);
  if (window.location.hash) {
    revealDocumentation();
  }
}

// ============================================================
// 2. Copy to Clipboard for Code Blocks
// ============================================================

function initCodeCopyButtons() {
  const copyButtons = document.querySelectorAll(".docs-copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const container = btn.closest(".docs-code-container, .docs-standalone-code");
      if (!container) return;

      const codeElement = container.querySelector("code");
      if (!codeElement) return;

      const codeText = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(codeText);
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("is-copied");

        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("is-copied");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy code: ", err);
      }
    });
  });
}

// ============================================================
// 3. Scrollspy Navigation
// ============================================================

function initScrollspy() {
  const sections = document.querySelectorAll(".docs-section");
  const navLinks = document.querySelectorAll(".docs-nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("is-active");
          } else {
            link.classList.remove("is-active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// ============================================================
// 4. Mobile Drawer Navigation
// ============================================================

function initMobileNav() {
  const toggleBtn = document.getElementById("docs-mobile-toggle");
  const sidebar = document.getElementById("docs-sidebar");
  const backdrop = document.getElementById("docs-sidebar-backdrop");
  const navLinks = document.querySelectorAll(".docs-nav-link");

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-open");
  };

  const openSidebar = () => {
    if (sidebar) sidebar.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-open");
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = sidebar && sidebar.classList.contains("is-open");
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeSidebar);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });
}

// ============================================================
// 5. Sidebar Filter / Search
// ============================================================

function initSidebarFilter() {
  const filterInput = document.getElementById("docs-nav-filter");
  if (!filterInput) return;

  const navGroups = document.querySelectorAll(".docs-nav-group");

  filterInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();

    navGroups.forEach((group) => {
      const items = group.querySelectorAll(".docs-nav-item");
      let visibleCount = 0;

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const matches = text.includes(query);
        item.style.display = matches ? "" : "none";
        if (matches) visibleCount += 1;
      });

      group.style.display = visibleCount > 0 ? "" : "none";
    });
  });
}

// ============================================================
// 6. Interactive Component Demos on Documentation Page
// ============================================================

function initDocsInteractiveDemos() {
  // Tabs Demo
  document.querySelectorAll(".tabs").forEach((container) => {
    const tabButtons = Array.from(container.querySelectorAll(".tab-btn"));
    const tabPanels = Array.from(container.querySelectorAll(".tab-panel"));

    tabButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-tab-target");
        if (!targetSelector) return;

        tabButtons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle("is-active", isActive);
          b.setAttribute("aria-selected", String(isActive));
          b.setAttribute("tabindex", isActive ? "0" : "-1");
        });

        tabPanels.forEach((panel) => {
          const isActive = panel.id === targetSelector.replace("#", "");
          panel.classList.toggle("is-active", isActive);
          panel.setAttribute("aria-hidden", String(!isActive));
        });

        // Ensure active tab stays visible when scrolled
        btn.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
      });

      btn.addEventListener("keydown", (e) => {
        let nextIndex = index;
        if (e.key === "ArrowRight") {
          nextIndex = (index + 1) % tabButtons.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        } else {
          return;
        }
        e.preventDefault();
        tabButtons[nextIndex].click();
        tabButtons[nextIndex].focus();
      });
    });
  });

  // Dropdown Demo with Viewport Boundary Edge Detection
  const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  };

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      closeAllDropdowns();
      if (!isOpen) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");

        // Edge detection: keep dropdown menu inside viewport bounds
        if (menu) {
          menu.classList.remove("is-flipped-x", "is-flipped-y");
          const rect = menu.getBoundingClientRect();
          if (rect.right > window.innerWidth - 12) {
            menu.classList.add("is-flipped-x");
          }
          if (rect.bottom > window.innerHeight - 12) {
            menu.classList.add("is-flipped-y");
          }
        }
      }
    });

    // Close on item click and prevent default navigation on demo items
    dropdown.querySelectorAll(".dropdown-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        closeAllDropdowns();
      });
    });
  });

  document.addEventListener("click", closeAllDropdowns);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
    }
  });

  // Pagination Demo
  document.querySelectorAll(".pagination").forEach((pagination) => {
    const totalPages = parseInt(pagination.getAttribute("data-total-pages"), 10) || 5;
    let currentPage = 1;

    const updatePage = (newPage) => {
      if (newPage < 1 || newPage > totalPages) return;
      currentPage = newPage;

      const pageButtons = pagination.querySelectorAll("[data-page]");
      pageButtons.forEach((btn) => {
        const p = parseInt(btn.getAttribute("data-page"), 10);
        const isActive = p === currentPage;
        btn.classList.toggle("is-active", isActive);
        if (isActive) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      });

      const prev = pagination.querySelector(".pagination-prev");
      const next = pagination.querySelector(".pagination-next");

      if (prev) {
        prev.disabled = currentPage === 1;
        prev.classList.toggle("is-disabled", currentPage === 1);
      }

      if (next) {
        next.disabled = currentPage === totalPages;
        next.classList.toggle("is-disabled", currentPage === totalPages);
      }
    };

    pagination.addEventListener("click", (e) => {
      const target = e.target.closest(".pagination-btn");
      if (!target || target.disabled || target.classList.contains("is-disabled")) return;

      if (target.classList.contains("pagination-prev")) {
        updatePage(currentPage - 1);
      } else if (target.classList.contains("pagination-next")) {
        updatePage(currentPage + 1);
      } else if (target.hasAttribute("data-page")) {
        updatePage(parseInt(target.getAttribute("data-page"), 10));
      }
    });
  });
}

// ============================================================
// 7. Responsive Mobile Navbar Toggle
// ============================================================

function initNavbarToggle() {
  document.querySelectorAll(".navbar-toggle").forEach((toggle) => {
    const nav = toggle.closest(".navbar");
    if (!nav) return;
    const collapse = nav.querySelector(".navbar-collapse");
    if (!collapse) return;

    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !collapse.classList.contains("is-open");
      collapse.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    collapse.querySelectorAll(".nav-link a, a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          toggleMenu(false);
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        toggleMenu(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && collapse.classList.contains("is-open")) {
        toggleMenu(false);
        toggle.focus();
      }
    });
  });
}

// ============================================================
// 8. Alert Dismiss Handler
// ============================================================

function initAlertDismiss() {
  document.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".alert-close");
    if (!closeBtn) return;
    const alert = closeBtn.closest(".alert");
    if (!alert) return;

    alert.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    alert.style.opacity = "0";
    alert.style.transform = "translateY(-4px)";
    setTimeout(() => {
      alert.remove();
    }, 200);
  });
}

// ============================================================
// 9. Interactive Viewport Preview Toolbar
// Allows toggling preview widths between Full, 1024, 768, 375, 320
// ============================================================

function initViewportSwitcher() {
  document.querySelectorAll(".docs-viewport-buttons").forEach((group) => {
    const containerCard = group.closest(".docs-component-card");
    if (!containerCard) return;
    const frame = containerCard.querySelector(".docs-preview-frame");
    if (!frame) return;

    const buttons = group.querySelectorAll(".docs-vp-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const width = btn.getAttribute("data-viewport");
        if (width === "full") {
          frame.style.maxWidth = "100%";
        } else {
          frame.style.maxWidth = `${width}px`;
        }
      });
    });
  });
}
