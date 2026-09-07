function Alert({ variant = "", children }) {
  let className = "alert";

  if (variant !== "") {
    className = `alert alert-${variant}`;
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Alert;
