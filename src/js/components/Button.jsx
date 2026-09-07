function Button({ variant = "primary", className = "", children, ...props }) {
  let btnClass = "btn";

  if (variant !== "") {
    btnClass = `btn btn-${variant}`;
  }

  const finalClassName = `${btnClass} ${className}`.trim();

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;

