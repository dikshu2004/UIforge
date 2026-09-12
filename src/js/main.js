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
