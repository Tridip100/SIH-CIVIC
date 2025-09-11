import { useEffect, useContext, useState } from "react";
import gsap from "gsap";
import { translation } from "../translation.js";
import { LanguageContext } from "../LanguageContext.jsx";

export default function Contact() {
  const { lang, setLang } = useContext(LanguageContext);

  // Fix: use "/contact" key from translation.js
  const t = translation[lang]?.["/contact"] || translation.en["/contact"];

  // Map authorities and assign colors
  const colors = ["bg-blue-100", "bg-red-100", "bg-orange-100", "bg-green-100", "bg-yellow-100"];
  const authorities = (t?.authorities || []).map((auth, idx) => ({
    ...auth,
    color: colors[idx] || "bg-gray-100",
  }));

  // GSAP animation
  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        ".authority-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
      );
    }, 100);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Language Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
        >
          {lang === "en" ? "हिंदी" : "English"}
        </button>
      </div>

      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>

      {/* Authority Contacts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {authorities.map((auth, idx) => (
          <div
            key={idx}
            className={`authority-card ${auth.color} border rounded-xl shadow-lg p-5 hover:scale-105 hover:shadow-xl transition-all`}
          >
            <h3 className="text-lg font-bold mb-2">{auth.name}</h3>
            <p className="text-gray-700 font-mono text-lg">{auth.phone}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form bg-white p-8 rounded-xl shadow-lg border">
        <h3 className="text-xl font-semibold mb-4">{t.sendMsg}</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t.name}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder={t.email}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder={t.feedback}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            {t.button}
          </button>
        </form>
      </div>
    </div>
  );
}
