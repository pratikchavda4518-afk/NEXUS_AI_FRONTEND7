import "./Widget.css";

export default function Widget({
  title,
  children,
  className = "",
}) {
  return (
    <div className={`widget ${className}`}>
      <div className="widget-header">
        <h3>{title}</h3>
      </div>

      <div className="widget-body">
        {children}
      </div>
    </div>
  );
}