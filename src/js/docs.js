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
  const docsLayout = document.querySelector(".docs-layout");
  if (!docsLayout) return;

  const revealDocumentation = () => {
    const target = window.location.hash
      ? document.querySelector(window.location.hash)
      : null;

    if (!target || !docsLayout.contains(target)) {
      docsLayout.classList.remove("is-visible");
      document.body.classList.remove("has-docs-open");
      return;
    }

    docsLayout.classList.add("is-visible");
    document.body.classList.add("has-docs-open");
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
  };

  window.addEventListener("hashchange", revealDocumentation);
  revealDocumentation();
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

  // Dropdown Demo
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      dropdown.classList.toggle("is-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.is-open").forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
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
