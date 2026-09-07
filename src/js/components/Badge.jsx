function Badge({ variant = "", children }) {
  let className = "badge";

  if (variant !== "") {
    className = `badge badge-${variant}`;
  }

  return (
    <span className={className}>
      {children}
    </span>
  );
}

export default Badge;
