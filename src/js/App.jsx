import "../scss/main.scss";

const colors = ["primary", "secondary", "success", "danger", "warning", "info", "black"];
const badges = ["primary", "secondary", "danger", "success", "info", "warning", "white", "black"];

function ButtonShowcase() {
  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="text-primary">UIForge</h1>
        <p className="text-secondary">Button Component Showcase & Test Page</p>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">1. Solid Buttons</h3>
        <div className="d-flex flex-wrap gap-2">
          {colors.map((color) => (
            <button className={`btn btn-${color}`} key={color}>{color[0].toUpperCase() + color.slice(1)}</button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">2. Outline Buttons</h3>
        <div className="d-flex flex-wrap gap-2">
          {colors.map((color) => (
            <button className={`btn btn-outline-${color}`} key={color}>{color[0].toUpperCase() + color.slice(1)}</button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">3. Button Sizes</h3>
        <div className="d-flex align-center gap-2">
          <button className="btn btn-primary btn-sm">Small (.btn-sm)</button>
          <button className="btn btn-primary">Default</button>
          <button className="btn btn-primary btn-lg">Large (.btn-lg)</button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">4. Disabled State</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" disabled>Disabled Solid</button>
          <button className="btn btn-outline-primary" disabled>Disabled Outline</button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">5. Block Button</h3>
        <button className="btn btn-primary btn-block">Full Width Button (.btn-block)</button>
      </div>
    </div>
  );
}

function ComponentShowcase() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>UIForge</h3>
          <p>My own UI library.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>

      <div className="alert">Your profile was updated successfully!</div>
      <div className="alert alert-primary">a simple primary alert</div>
      <div className="alert alert-success">a simple success alert</div>
      <div className="alert alert-danger">a simple danger alert</div>
      <div className="alert alert-warning">a simple warning alert</div>

      <span className="badge">New</span>
      {badges.map((badge) => (
        <span className={`badge badge-${badge}`} key={badge}>{badge}</span>
      ))}
    </>
  );
}

export default function App() {
  return (
    <>
      <ButtonShowcase />
      <ComponentShowcase />
    </>
  );
}