import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    // Animate brand
    gsap.from(".nav-brand", {
      y: -15,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate links (no opacity change to avoid vanish bug)
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
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand */}
          <h1 className="nav-brand text-2xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform">
            CivicApp
          </h1>

          {/* Links */}
          <ul className="flex space-x-6 text-lg">
            {[
              { to: "/", label: "Home" },
              { to: "/report", label: "Report" },
              { to: "/tracker", label: "Tracker" },
              { to: "/map", label: "Map" },
              { to: "/contact", label: "Contact" },
              { to:"/admin" , label: "Admin"},
            ].map((item, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={item.to}
                  className="nav-link relative hover:text-gray-200 transition-colors duration-300"
                >
                  {item.label}
                  {/* Underline effect */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

     
      <div className="pt-20"></div>
    </>
  );
}
