import "../scss/main.scss";

const navLinks = [
  { text: "Home", link: "#" },
  { text: "Components", link: "#" },
  { text: "About", link: "#" },
  { text: "Contact", link: "#" },
];

const buttonVariants = [
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Success", "success"],
  ["Danger", "danger"],
  ["Warning", "warning"],
  ["Info", "info"],
  ["Black", "black"],
];

const alertVariants = [
  ["Your profile was updated successfully!", ""],
  ["a simple primary alert", "primary"],
  ["a simple success alert", "success"],
  ["a simple danger alert", "danger"],
  ["a simple warning alert", "warning"],
];

const badgeVariants = [
  ["New", ""],
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Danger", "danger"],
  ["Success", "success"],
  ["Info", "info"],
  ["Warning", "warning"],
  ["White", "white"],
  ["Black", "black"],
];

const sampleTabs = [
  {
    id: "tab-html",
    label: "HTML",
    content: "<p><strong>HTML</strong> provides the structural backbone of UIForge components with clean, semantic, and accessible markup.</p>",
  },
  {
    id: "tab-scss",
    label: "SCSS",
    content: "<p><strong>SCSS</strong> powers the UIForge design system with centralized design tokens for colors, spacing, typography, and borders.</p>",
  },
  {
    id: "tab-js",
    label: "JavaScript",
    content: "<p><strong>Vanilla JavaScript</strong> brings components to life with lightweight, clean, and beginner-friendly DOM manipulation.</p>",
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

function renderButton(label, variant = "primary") {
  return `<button class="btn btn-${variant}">${label}</button>`;
}

function renderAlert(message, variant = "") {
  const className = variant ? `alert alert-${variant}` : "alert";
  return `<div class="${className}">${message}</div>`;
}

function renderBadge(label, variant = "") {
  const className = variant ? `badge badge-${variant}` : "badge";
  return `<span class="${className}">${label}</span>`;
}

function renderAvatar(label, variant = "") {
  const className = variant ? `avatar avatar-${variant}` : "avatar";
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
          class="tab-btn ${isActive ? "is-active" : ""}"
          role="tab"
          aria-selected="${isActive ? "true" : "false"}"
          aria-controls="${tab.id}"
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

function renderDropdown(label = "Options", variant = "primary", items = sampleDropdownItems) {
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
          <a class="dropdown-item" href="${item.link || "#"}">${item.label}</a>
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
      >
        ${label}
      </button>
      <ul class="dropdown-menu" role="menu">
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
          aria-current="${isActive ? "page" : "false"}"
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

function renderForm() {
  return `
    <form class="form">
      <h2 class="form-title">Contact us</h2>
      <p class="form-description">Tell us how we can help with your next project.</p>

      <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input class="form-input" id="name" name="name" type="text" placeholder="Your name" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input class="form-input" id="email" name="email" type="email" placeholder="you@example.com" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="subject">Subject</label>
        <select class="form-select" id="subject" name="subject" required>
          <option value="">Choose a subject</option>
          <option value="support">Component support</option>
          <option value="feedback">Product feedback</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="message">Message</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Write your message" required></textarea>
      </div>

      <div class="form-group">
        <label class="form-label">
          <input name="updates" type="checkbox">
          Send me occasional updates
        </label>
      </div>

      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Send message</button>
      </div>
    </form>
  `;
}

function initTabs() {
  const tabContainers = document.querySelectorAll(".tabs");

  tabContainers.forEach((container) => {
    const tabButtons = container.querySelectorAll(".tab-btn");
    const tabPanels = container.querySelectorAll(".tab-panel");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetSelector = button.getAttribute("data-tab-target");
        if (!targetSelector) return;

        tabButtons.forEach((btn) => {
          btn.classList.remove("is-active");
          btn.setAttribute("aria-selected", "false");
        });

        tabPanels.forEach((panel) => {
          panel.classList.remove("is-active");
        });

        button.classList.add("is-active");
        button.setAttribute("aria-selected", "true");

        const targetPanel = container.querySelector(targetSelector);
        if (targetPanel) {
          targetPanel.classList.add("is-active");
        }
      });
    });
  });
}

function initDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");

      // Close any other open dropdowns first
      document.querySelectorAll(".dropdown.is-open").forEach((openDd) => {
        if (openDd !== dropdown) {
          openDd.classList.remove("is-open");
          const otherToggle = openDd.querySelector(".dropdown-toggle");
          const otherMenu = openDd.querySelector(".dropdown-menu");
          if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
          if (otherMenu) otherMenu.classList.remove("is-open");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("is-open", !isOpen);
      menu.classList.toggle("is-open", !isOpen);
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.is-open").forEach((openDd) => {
      openDd.classList.remove("is-open");
      const toggle = openDd.querySelector(".dropdown-toggle");
      const menu = openDd.querySelector(".dropdown-menu");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (menu) menu.classList.remove("is-open");
    });
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".dropdown.is-open").forEach((openDd) => {
        openDd.classList.remove("is-open");
        const toggle = openDd.querySelector(".dropdown-toggle");
        const menu = openDd.querySelector(".dropdown-menu");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
        if (menu) menu.classList.remove("is-open");
      });
    }
  });
}

function initPagination() {
  document.querySelectorAll(".pagination").forEach((pagination) => {
    const totalPages = parseInt(pagination.getAttribute("data-total-pages"), 10) || 1;
    let currentPage = parseInt(pagination.querySelector(".pagination-btn.is-active")?.getAttribute("data-page"), 10) || 1;

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
        btn.setAttribute("aria-current", isActive ? "page" : "false");
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
      if (!target || target.disabled || target.classList.contains("is-disabled")) return;

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

function renderApp() {
  const buttons = buttonVariants
    .map(([label, variant]) => renderButton(label, variant))
    .join("");

  const alerts = alertVariants
    .map(([message, variant]) => renderAlert(message, variant))
    .join("");

  const badges = badgeVariants
    .map(([label, variant]) => renderBadge(label, variant))
    .join("");

  const avatars = avatarVariants
    .map(([label, variant]) => renderAvatar(label, variant))
    .join("");

  const links = navLinks
    .map(({ text, link }) => `<a href="${link}">${text}</a>`)
    .join("");

  return `
    <div class="container py-4">
      <div class="mb-4">
        <h2>Buttons</h2>
        <div class="d-flex flex-wrap gap-2 mb-2">${buttons}</div>
      </div>

      <div class="mb-4">
        <h2>Avatar</h2>
        <div class="d-flex flex-wrap gap-2 mb-2">${avatars}</div>
      </div>

      <div class="mb-4">
        <h2>Dropdowns</h2>
        <div class="d-flex flex-wrap gap-3 mb-2">
          ${renderDropdown("Primary Actions", "primary")}
          ${renderDropdown("Secondary Menu", "secondary")}
          ${renderDropdown("More Options", "black")}
        </div>
      </div>

      <div class="mb-4">
        <h2>Tabs</h2>
        <div class="row">
          <div class="col-12">
            ${renderTabs(sampleTabs)}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h2>Pagination</h2>
        <div class="d-flex flex-column gap-3 mb-2">
          ${renderPagination(5, 1)}
          ${renderPagination(8, 4)}
        </div>
      </div>

      <div class="mb-4">
        <h2>Form</h2>
        <div class="row">
          <div class="col-12">
            ${renderForm()}
          </div>
        </div>
      </div>

      <div class="card">
  <div class="card-body">
    <span class="card-tag">UI COMPONENT</span>

    <h3>Build Faster</h3>

    <p>
      Create clean and reusable interfaces with UIForge components
      designed for modern web applications.
    </p>

    <div class="card-footer">
      <span class="card-meta">Reusable • SCSS</span>
      <button class="btn btn-primary">Explore</button>
    </div>
  </div>
</div>

      <nav class="navbar">
        <h2>UIForge</h2>
        <div class="nav-link">${links}</div>
      </nav>

      ${alerts}
      <div>${badges}</div>
    </div>
  `;
}

const root = document.querySelector("#root");
root.innerHTML = renderApp();
initTabs();
initDropdowns();
initPagination();
