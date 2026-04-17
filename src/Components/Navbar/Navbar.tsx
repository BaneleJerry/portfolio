import { useState, useEffect } from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "experience", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.01 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a
        href="#"
        className="navbar__logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
        BT<span>.dev</span>
      </a>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {links.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`navbar__link ${activeSection === id ? "navbar__link--active" : ""}`}
              onClick={(e) => handleNavClick(e, id)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/BaneleJerry"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta">
            GitHub ↗
          </a>
        </li>
      </ul>

      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
