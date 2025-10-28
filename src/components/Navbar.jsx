import { useState, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* NAVBAR DESKTOP + MOBILE */}
      <header
        className={`fixed top-0 inset-x-0 z-50 ${
          active ? "bg-[#222831] shadow-lg" : "bg-[#222831]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="py-4 flex items-center justify-between">
            {/* Logo (hidden di mobile) */}
            <a href="#" className="hidden md:inline-flex items-center">
              <img
                src="/assets/logo.svg"
                alt="Logo"
                className="h-10 w-auto md:h-12"
              />
            </a>

            {/* Menu desktop */}
            <ul className="hidden md:flex gap-8 sm:text-lg text-base font-medium text-white">
              <li><a href="#about" className="hover:text-[#00ADB5]">About Me</a></li>
              <li><a href="#skills" className="hover:text-[#00ADB5]">Skills</a></li>
              <li><a href="#projects" className="hover:text-[#00ADB5]">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#00ADB5]">Contact</a></li>
            </ul>

            {/* Tombol hamburger (mobile only, kiri posisi) */}
            <button
              className="md:hidden p-2 rounded-lg ring-1 ring-white/10 hover:bg-white/10 text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER (menu kiri) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#222831] shadow-xl transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header drawer */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <a href="#" className="inline-flex items-center">
            <img src="/assets/logo.svg" alt="logo" className="h-8 w-auto" />
          </a>
          <button
            className="p-2 rounded-lg ring-1 ring-white/10 hover:bg-white/10 text-white"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <HiX size={22} />
          </button>
        </div>

        {/* List menu */}
        <nav className="mt-4 flex flex-col space-y-1 text-white">
          <a href="#about" className="px-6 py-3 hover:bg-[#00ADB5]/10" onClick={() => setOpen(false)}>About Me</a>
          <a href="#skills" className="px-6 py-3 hover:bg-[#00ADB5]/10" onClick={() => setOpen(false)}>Skill</a>
          <a href="#projects" className="px-6 py-3 hover:bg-[#00ADB5]/10" onClick={() => setOpen(false)}>Project</a>
          <a href="#contact" className="px-6 py-3 hover:bg-[#00ADB5]/10" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Spacer biar konten tidak ketutup */}
      <div className="h-[72px] md:h-[80px]" />
    </>
  );
};
