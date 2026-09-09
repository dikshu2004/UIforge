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
          <h3>UIForge</h3>
          <p>My own UI library.</p>
          ${renderButton("Learn More")}
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
