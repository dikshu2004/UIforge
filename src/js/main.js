import "../scss/main.scss";

// ============================================================
// UIForge Component Data
// ============================================================

const buttonVariants = [
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Success", "success"],
  ["Danger", "danger"],
  ["Warning", "warning"],
  ["Info", "info"],
  ["Black", "black"],
  ["White", "white"],
];

const alertVariants = [
  ["Your profile was updated successfully!", "primary"],
  ["Data sync completed with all endpoints.", "success"],
  ["Unable to reach authentication server. Please retry.", "danger"],
  ["Warning: This action cannot be undone.", "warning"],
  ["A new minor version update is available.", "info"],
];

const badgeVariants = [
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Success", "success"],
  ["Danger", "danger"],
  ["Warning", "warning"],
  ["Info", "info"],
  ["White", "white"],
  ["Black", "black"],
];

const avatarVariants = [
  ["JD", "primary"],
  ["MK", "secondary"],
  ["AS", "success"],
  ["RL", "danger"],
  ["TP", "warning"],
  ["UI", "info"],
  ["W", "white"],
  ["B", "black"],
];

const sampleTabs = [
  {
    id: "tab-html",
    label: "HTML",
    content:
      "<p><strong>HTML</strong> provides the structural backbone of UIForge components with clean, semantic, and accessible WAI-ARIA markup.</p>",
  },
  {
    id: "tab-scss",
    label: "SCSS",
    content:
      "<p><strong>SCSS</strong> powers the UIForge design system with centralized design tokens for colors, spacing, typography, borders, and CSS custom properties.</p>",
  },
  {
    id: "tab-js",
    label: "JavaScript",
    content:
      "<p><strong>Vanilla JavaScript</strong> brings components to life with lightweight, accessible, zero-dependency DOM manipulation and keyboard navigation.</p>",
  },
];

const sampleDropdownItems = [
  { type: "header", label: "Project Actions" },
  { type: "item", label: "Edit Component", link: "#" },
  { type: "item", label: "Duplicate", link: "#" },
  { type: "item", label: "Share Preview", link: "#" },
  { type: "divider" },
  { type: "header", label: "Danger Zone" },
  { type: "item", label: "Archive Component", link: "#" },
  { type: "item", label: "Delete", link: "#" },
];

// ============================================================
// Component Renderers
// ============================================================

function renderButton(label, variant = "primary") {
  return `<button type="button" class="btn btn-${variant}">${label}</button>`;
}

function renderAlert(message, variant = "primary") {
  const className = variant ? `alert alert-${variant}` : "alert";
  return `<div class="${className}">${message}</div>`;
}

function renderBadge(label, variant = "primary") {
  const className = variant ? `badge badge-${variant}` : "badge";
  return `<span class="${className}">${label}</span>`;
}

function renderAvatar(label, variant = "primary", size = "") {
  const sizeClass = size ? ` avatar-${size}` : "";
  const className = variant ? `avatar avatar-${variant}${sizeClass}` : `avatar${sizeClass}`;
  return `<span class="${className}">${label}</span>`;
}

function renderTabs(tabs, activeId) {
  const initialActive = activeId || (tabs.length > 0 ? tabs[0].id : "");

  const tabButtons = tabs
    .map((tab) => {
      const isActive = tab.id === initialActive;
      return `
        <button
          type="button"
          id="${tab.id}-tab"
          class="tab-btn ${isActive ? "is-active" : ""}"
          role="tab"
          aria-selected="${isActive ? "true" : "false"}"
          aria-controls="${tab.id}"
          tabindex="${isActive ? "0" : "-1"}"
          data-tab-target="#${tab.id}"
        >
          ${tab.label}
        </button>
      `;
    })
    .join("");

  const tabPanels = tabs
    .map((tab) => {
      const isActive = tab.id === initialActive;
      return `
        <div
          id="${tab.id}"
          class="tab-panel ${isActive ? "is-active" : ""}"
          role="tabpanel"
          aria-labelledby="${tab.id}-tab"
          aria-hidden="${isActive ? "false" : "true"}"
        >
          ${tab.content}
        </div>
      `;
    })
    .join("");

  return `
    <div class="tabs" role="region" aria-label="Component preview tabs">
      <div class="tabs-nav" role="tablist">
        ${tabButtons}
      </div>
      <div class="tabs-content">
        ${tabPanels}
      </div>
    </div>
  `;
}

let dropdownCounter = 0;
function renderDropdown(
  label = "Options",
  variant = "primary",
  items = sampleDropdownItems
) {
  dropdownCounter += 1;
  const menuId = `dropdown-menu-${dropdownCounter}`;

  const renderedItems = items
    .map((item) => {
      if (item.type === "header") {
        return `<li class="dropdown-header">${item.label}</li>`;
      }
      if (item.type === "divider") {
        return `<li class="dropdown-divider"></li>`;
      }
      return `
        <li>
          <a
            class="dropdown-item"
            href="${item.link || "#"}"
            role="menuitem"
            tabindex="-1"
          >
            ${item.label}
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <div class="dropdown">
      <button
        class="btn btn-${variant} dropdown-toggle"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${menuId}"
      >
        ${label}
      </button>

      <ul
        id="${menuId}"
        class="dropdown-menu"
        role="menu"
      >
        ${renderedItems}
      </ul>
    </div>
  `;
}

function renderPagination(totalPages = 5, activePage = 1) {
  let pageButtons = "";

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === activePage;
    pageButtons += `
      <li>
        <button
          type="button"
          class="pagination-btn ${isActive ? "is-active" : ""}"
          data-page="${i}"
          ${isActive ? 'aria-current="page"' : ""}
        >
          ${i}
        </button>
      </li>
    `;
  }

  return `
    <nav class="pagination-nav" aria-label="Pagination Navigation">
      <ul class="pagination" data-total-pages="${totalPages}">
        <li>
          <button
            type="button"
            class="pagination-btn pagination-prev ${activePage === 1 ? "is-disabled" : ""}"
            ${activePage === 1 ? "disabled" : ""}
            aria-label="Previous page"
          >
            &laquo; Prev
          </button>
        </li>
        ${pageButtons}
        <li>
          <button
            type="button"
            class="pagination-btn pagination-next ${activePage === totalPages ? "is-disabled" : ""}"
            ${activePage === totalPages ? "disabled" : ""}
            aria-label="Next page"
          >
            Next &raquo;
          </button>
        </li>
      </ul>
    </nav>
  `;
}

function renderFormPreview() {
  return `
    <form class="form" id="showcase-form" onsubmit="event.preventDefault()">
      <h3 class="form-title">Contact Form</h3>
      <p class="form-description">Send us a message or test out dynamic validation states.</p>

      <div class="form-group">
        <label class="form-label" for="form-name">Full Name</label>
        <input class="form-input" id="form-name" type="text" placeholder="John Doe" value="Alex Morgan">
      </div>

      <div class="form-group">
        <label class="form-label" for="form-email">Email address</label>
        <input class="form-input is-valid" id="form-email" type="email" value="alex@example.com">
        <div class="valid-feedback">Looks great! Email is verified.</div>
      </div>

      <div class="form-group">
        <label class="form-label" for="form-username">Username</label>
        <input class="form-input is-invalid" id="form-username" type="text" value="invalid user name!">
        <div class="invalid-feedback">Username contains invalid characters or spaces.</div>
      </div>

      <div class="form-group">
        <label class="form-label" for="form-topic">Inquiry Topic</label>
        <select class="form-select" id="form-topic">
          <option value="ui">UI Component Library</option>
          <option value="tokens">Design Tokens & Themes</option>
          <option value="contrib">Open Source Contribution</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="form-message">Message</label>
        <textarea class="form-textarea" id="form-message" placeholder="Type your message here...">UIForge components showcase</textarea>
      </div>

      <div class="form-group">
        <label class="form-check">
          <input class="form-check-input" type="checkbox" checked>
          <span class="form-check-label">Subscribe to library releases & changelogs</span>
        </label>
      </div>

      <div class="form-group">
        <label class="form-switch">
          <input class="form-switch-input" type="checkbox" checked>
          <span class="form-check-label">Enable notification updates</span>
        </label>
      </div>

      <div class="form-actions">
        <button type="reset" class="btn btn-secondary">Reset</button>
        <button type="submit" class="btn btn-primary">Submit Form</button>
      </div>
    </form>
  `;
}

// ============================================================
// Showcase Layout
// ============================================================

function renderApp() {
  const renderedButtons = buttonVariants
    .map(([label, variant]) => renderButton(label, variant))
    .join(" ");

  const renderedBadges = badgeVariants
    .map(([label, variant]) => renderBadge(label, variant))
    .join(" ");

  const renderedAvatars = avatarVariants
    .map(([label, variant]) => renderAvatar(label, variant))
    .join(" ");

  const renderedAlerts = alertVariants
    .map(([msg, variant]) => renderAlert(msg, variant))
    .join("");

  return `
    <div class="container" style="padding: 2rem 1rem;">
      <header style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--uf-border); padding-bottom: 1rem;">
        <div>
          <h1 style="margin: 0 0 0.5rem;">UIForge Showcase</h1>
          <p style="margin: 0; color: var(--uf-text-muted);">Component library and design system</p>
        </div>
        <div>
          <button type="button" class="btn btn-secondary" id="theme-toggle-btn">Toggle Theme</button>
        </div>
      </header>

      <section style="margin-bottom: 2.5rem;">
        <h2>Navbar</h2>
        <nav class="navbar" style="width: 100%;">
          <a href="#" class="navbar-brand">
            <strong>UIForge</strong>
          </a>
          <ul class="nav-link">
            <li><a href="#buttons">Buttons</a></li>
            <li><a href="#forms">Forms</a></li>
            <li><a href="#tabs">Tabs</a></li>
            <li><a href="#dropdowns">Dropdowns</a></li>
          </ul>
        </nav>
      </section>

      <section style="margin-bottom: 2.5rem;" id="buttons">
        <h2>Buttons</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
          ${renderedButtons}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Badges</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
          ${renderedBadges}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Avatars</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
          ${renderedAvatars}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Alerts</h2>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${renderedAlerts}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Card</h2>
        <div class="card">
          <div class="card-body">
            <span class="card-tag">NEW RELEASE</span>
            <h3>UIForge v1.0</h3>
            <p>A modern, tokenized SCSS & JavaScript UI library built from first principles for performance and accessibility.</p>
            <div class="card-footer">
              <span class="card-meta">SCSS • Vanilla JS</span>
              <button type="button" class="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;" id="forms">
        <h2>Forms & Validation</h2>
        ${renderFormPreview()}
      </section>

      <section style="margin-bottom: 2.5rem;" id="tabs">
        <h2>Tabs</h2>
        ${renderTabs(sampleTabs)}
      </section>

      <section style="margin-bottom: 2.5rem;" id="dropdowns">
        <h2>Dropdowns</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
          ${renderDropdown("Primary Menu", "primary")}
          ${renderDropdown("Secondary Menu", "secondary")}
          ${renderDropdown("Danger Actions", "danger")}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Pagination</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${renderPagination(5, 1)}
          ${renderPagination(7, 3)}
        </div>
      </section>

      <section style="margin-bottom: 2.5rem;">
        <h2>Grid System</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 1rem;">
            <div style="background: var(--uf-surface-subtle); padding: 1rem; border-radius: 0.5rem; text-align: center; border: 1px solid var(--uf-border);">col-12 col-md-6 col-lg-4</div>
          </div>
          <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 1rem;">
            <div style="background: var(--uf-surface-subtle); padding: 1rem; border-radius: 0.5rem; text-align: center; border: 1px solid var(--uf-border);">col-12 col-md-6 col-lg-4</div>
          </div>
          <div class="col-12 col-md-12 col-lg-4" style="margin-bottom: 1rem;">
            <div style="background: var(--uf-surface-subtle); padding: 1rem; border-radius: 0.5rem; text-align: center; border: 1px solid var(--uf-border);">col-12 col-md-12 col-lg-4</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

// ============================================================
// Interactive Handlers
// ============================================================

function initTabs() {
  const tabContainers = document.querySelectorAll(".tabs");

  tabContainers.forEach((container) => {
    const tabButtons = Array.from(container.querySelectorAll(".tab-btn"));
    const tabPanels = Array.from(container.querySelectorAll(".tab-panel"));

    const activateTab = (button, moveFocus = false) => {
      const targetSelector = button.getAttribute("data-tab-target");
      if (!targetSelector) return;

      tabButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", String(isActive));
        btn.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.id === targetSelector.slice(1);
        panel.classList.toggle("is-active", isActive);
        panel.setAttribute("aria-hidden", String(!isActive));
      });

      if (moveFocus) {
        button.focus();
      }
    };

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => activateTab(button));

      button.addEventListener("keydown", (e) => {
        let nextIndex = index;
        if (e.key === "ArrowRight") {
          nextIndex = (index + 1) % tabButtons.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = tabButtons.length - 1;
        } else {
          return;
        }

        e.preventDefault();
        activateTab(tabButtons[nextIndex], true);
      });
    });
  });
}

function initDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  const closeDropdown = (dropdown, returnFocus = false) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.classList.remove("is-open");
    if (toggleBtn) {
      toggleBtn.setAttribute("aria-expanded", "false");
      if (returnFocus) toggleBtn.focus();
    }
    if (menu) {
      menu.classList.remove("is-open");
    }
  };

  const closeAllDropdowns = (except = null, returnFocus = false) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== except && dropdown.classList.contains("is-open")) {
        closeDropdown(dropdown, returnFocus);
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!toggleBtn || !menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      closeAllDropdowns(dropdown);

      dropdown.classList.toggle("is-open", !isOpen);
      menu.classList.toggle("is-open", !isOpen);
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));

      if (!isOpen && menuItems.length > 0) {
        menuItems[0].setAttribute("tabindex", "0");
      }
    });

    toggleBtn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!dropdown.classList.contains("is-open")) {
          toggleBtn.click();
        }
        if (menuItems.length > 0) {
          menuItems[0].focus();
        }
      }
    });

    menuItems.forEach((item, index) => {
      item.addEventListener("keydown", (e) => {
        let nextIndex = index;
        if (e.key === "ArrowDown") {
          nextIndex = (index + 1) % menuItems.length;
        } else if (e.key === "ArrowUp") {
          nextIndex = (index - 1 + menuItems.length) % menuItems.length;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = menuItems.length - 1;
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeDropdown(dropdown, true);
          return;
        } else if (e.key === "Tab") {
          closeDropdown(dropdown);
          return;
        } else {
          return;
        }

        e.preventDefault();
        menuItems[index].setAttribute("tabindex", "-1");
        menuItems[nextIndex].setAttribute("tabindex", "0");
        menuItems[nextIndex].focus();
      });
    });
  });

  document.addEventListener("click", () => closeAllDropdowns());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllDropdowns(null, true);
  });
}

function initPagination() {
  document.querySelectorAll(".pagination").forEach((pagination) => {
    const totalPages = parseInt(pagination.getAttribute("data-total-pages"), 10) || 1;

    let currentPage =
      parseInt(
        pagination.querySelector(".pagination-btn.is-active")?.getAttribute("data-page"),
        10
      ) || 1;

    const updateState = (newPage) => {
      if (newPage < 1 || newPage > totalPages) return;
      currentPage = newPage;

      const prevBtn = pagination.querySelector(".pagination-prev");
      const nextBtn = pagination.querySelector(".pagination-next");
      const pageBtns = pagination.querySelectorAll("[data-page]");

      pageBtns.forEach((btn) => {
        const pageNum = parseInt(btn.getAttribute("data-page"), 10);
        const isActive = pageNum === currentPage;
        btn.classList.toggle("is-active", isActive);

        if (isActive) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      });

      if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.classList.toggle("is-disabled", currentPage === 1);
      }

      if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.classList.toggle("is-disabled", currentPage === totalPages);
      }
    };

    pagination.addEventListener("click", (e) => {
      const target = e.target.closest(".pagination-btn");
      if (!target || target.disabled || target.classList.contains("is-disabled")) {
        return;
      }

      if (target.classList.contains("pagination-prev")) {
        updateState(currentPage - 1);
      } else if (target.classList.contains("pagination-next")) {
        updateState(currentPage + 1);
      } else if (target.hasAttribute("data-page")) {
        updateState(parseInt(target.getAttribute("data-page"), 10));
      }
    });
  });
}

function initThemeToggle() {
  const toggleBtn = document.querySelector("#theme-toggle-btn");
  if (!toggleBtn) return;

  const currentTheme =
    localStorage.getItem("uiforge-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", currentTheme);

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("uiforge-theme", nextTheme);
  });
}

// ============================================================
// Application Entry Point
// ============================================================

const root = document.querySelector("#root");
if (root) {
  root.innerHTML = renderApp();

  initTabs();
  initDropdowns();
  initPagination();
  initThemeToggle();
}
