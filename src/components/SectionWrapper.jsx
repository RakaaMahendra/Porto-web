import { useReveal } from "../hooks/useReveal";

export default function SectionWrapper({ children, id, className = "" }) {
  const [ref, isVisible] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
