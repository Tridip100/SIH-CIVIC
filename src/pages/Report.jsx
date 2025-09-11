import { useEffect, useContext, useRef } from "react";
import gsap from "gsap";
import { translation } from "../translation.js";
import { LanguageContext } from "../LanguageContext.jsx";

export default function Report() {
  const { lang } = useContext(LanguageContext);

  // ✅ fallback to English
  const t = translation[lang]?.["/report"] || translation.en["/report"];

  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (formRef.current) {
        gsap.fromTo(
          formRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
        );
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
        );
      }
    }, 100);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
      {/* Illustration */}
      <div ref={imageRef} className="report-image flex-1 hidden md:block">
        <img
          src="https://i.pinimg.com/1200x/80/f3/96/80f3960217c48c2f1a8eda45ff5da35b.jpg"
          alt="Report Issue Illustration"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>

      {/* Form */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          {t.title}
        </h2>
        <form ref={formRef} className="report-form space-y-4">
          <input
            type="text"
            placeholder={t.placeholders.title}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none">
            <option disabled selected>
              {t.placeholders.category}
            </option>
            <option>{t.placeholders.roads}</option>
            <option>{t.placeholders.streetlights}</option>
            <option>{t.placeholders.garbage}</option>
            <option>{t.placeholders.water}</option>
            <option>{t.placeholders.other}</option>
          </select>
          <textarea
            placeholder={t.placeholders.description}
            rows="4"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          ></textarea>
          <input
            type="file"
            className="w-full border rounded-lg p-3 outline-none"
          />
          <input
            type="text"
            placeholder={t.placeholders.location}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-transform duration-200"
          >
            {t.button}
          </button>
        </form>
      </div>
    </div>
  );
}
