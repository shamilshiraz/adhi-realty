import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Roadshow", path: "/roadshow" },
  { name: "Meetings", path: "/meetings" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show on scroll up or near top, hide on scroll down
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<motion.nav
  initial={{ y: -80 }}
  animate={{ y: visible ? 0 : -96 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  style={{ backgroundColor: "#ffffff" }} // force opaque, bypasses any Tailwind purge
  className="fixed top-0 left-0 z-50 w-full border-b border-black/10 shadow-sm"
>
        <div className="mx-auto flex h-24 w-[92%] max-w-7xl items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A86A] text-white font-bold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-900">
                Adhi Realty
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A]">
                Investments
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#C9A86A]"
                      : "text-slate-700 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Underline */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left bg-[#C9A86A] transition-transform duration-300 ease-out ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-[#C9A86A] px-6 py-3 text-sm font-medium text-white transition hover:scale-105 lg:block">
              Book Meeting
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-0 z-40 w-full border-b border-black/5 bg-white lg:hidden"
          >
            <div className="flex flex-col p-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-slate-100 py-4 text-slate-700"
                >
                  {link.name}
                </NavLink>
              ))}

              <button className="mt-6 rounded-full bg-[#C9A86A] px-6 py-3 text-white">
                Book Meeting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}