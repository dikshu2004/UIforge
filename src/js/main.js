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

  const links = navLinks
    .map(({ text, link }) => `<a href="${link}">${text}</a>`)
    .join("");

  return `
    <div class="container py-4">
      <div class="mb-4">
        <h2>Buttons</h2>
        <div class="d-flex flex-wrap gap-2 mb-2">${buttons}</div>
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
