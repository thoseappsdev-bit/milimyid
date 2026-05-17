"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PawLogo, WaIcon } from "./icons";

const WA_URL =
  "https://wa.me/6282221626313?text=Halo%20Mili!%20Saya%20ingin%20tanya%20tentang%20layanan%20perawatan%20hewan.";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = ["layanan", "cara-kerja", "testimoni", "tentang"];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let active = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollY) active = id;
      });
      setActiveSection(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <PawLogo size={32} />
          <span className="font-display font-bold text-xl text-navy tracking-tight">
            mili.
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#layanan", label: "Layanan", id: "layanan" },
            { href: "#cara-kerja", label: "Cara Kerja", id: "cara-kerja" },
            { href: "#tentang", label: "Tentang Kami", id: "tentang" },
          ].map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`nav-link text-sm${activeSection === id ? " active" : ""}`}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5"
          >
            <WaIcon size={16} />
            Chat Sekarang
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-navy"
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4">
          <a
            href="#layanan"
            onClick={close}
            className="text-navy font-medium py-2 border-b border-navy/10"
          >
            Layanan
          </a>
          <a
            href="#cara-kerja"
            onClick={close}
            className="text-navy font-medium py-2 border-b border-navy/10"
          >
            Cara Kerja
          </a>
          <a
            href="#tentang"
            onClick={close}
            className="text-navy font-medium py-2 border-b border-navy/10"
          >
            Tentang Kami
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-whatsapp justify-center mt-1"
          >
            <WaIcon size={18} />
            Chat via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
