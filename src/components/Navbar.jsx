import { useEffect, useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { translation } from "../translation.js";
import { LanguageContext } from "../LanguageContext.jsx";

export default function Navbar() {
  const { lang, setLang } = useContext(LanguageContext); 
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ pick from correct namespace (/navbar)
  const t = translation[lang]?.["/navbar"] || {};

  useEffect(() => {
    gsap.from(".nav-brand", { y: -15, duration: 0.8, ease: "power3.out" });
    gsap.from(".nav-link", {
      y: -10,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 text-white py-3 px-6 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between relative">
          
          {/* Left: Logo + Text */}
          <div className="nav-brand flex flex-col cursor-pointer hover:scale-105 transition-transform">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Jharkhand_Rajakiya_Chihna.svg"
                alt="Ashok Stambha"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div className="flex flex-col ml-2">
                <span className="text-sm sm:text-base md:text-lg font-bold">
                  {t.govt}
                </span>
                <h1 className="block md:hidden text-base font-extrabold text-blue-500">
                  {t.civic}
                </h1>
              </div>
            </div>
          </div>

          {/* Middle: CivicApp (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-extrabold tracking-wide text-blue-500">
              {t.civic}
            </h1>
          </div>

          {/* Right: Desktop Links + Toggle */}
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6 text-base">
              {[
                { to: "/", label: t.home },
                { to: "/report", label: t.report },
                { to: "/tracker", label: t.tracker },
                { to: "/map", label: t.map },
                { to: "/contact", label: t.contact },
                { to: "/admin", label: t.admin },
              ].map((item, idx) => (
                <li key={idx} className="relative group">
                  <Link
                    to={item.to}
                    className="nav-link relative hover:text-gray-200 transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Toggle Button (desktop) */}
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="hidden md:block bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
            >
              {lang === "en" ? "हिंदी" : "English"}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 ml-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-orange-400 text-white py-4 px-6 space-y-4"
          >
            {[
              { to: "/", label: t.home },
              { to: "/report", label: t.report },
              { to: "/tracker", label: t.tracker },
              { to: "/map", label: t.map },
              { to: "/contact", label: t.contact },
              
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block py-2 border-b border-white/30"
              >
                {item.label}
              </Link>
            ))}

            {/* Toggle Button (mobile) */}
            <button
              onClick={() => {
                setLang(lang === "en" ? "hi" : "en");
                setIsOpen(false);
              }}
              className="mt-3 bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition w-full"
            >
              {lang === "en" ? "हिंदी" : "English"}
            </button>
          </div>
        )}
      </nav>

      {/* Add space below navbar */}
      <div className="pt-24"></div>
    </>
  );
}
