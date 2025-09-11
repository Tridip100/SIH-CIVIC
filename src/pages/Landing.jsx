import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext.jsx"; 
import { translation } from "../translation.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Landing() {
  const { lang } = useContext(LanguageContext);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  const sections = [
    {
      image:
        "https://i.pinimg.com/736x/f1/af/1e/f1af1e7d7dc9a6471ee6b75f835ebeba.jpg",
      title: translation[lang]?.["/"]?.report || "Report Issue",
      link: "/report",
    },
    {
      image:
        "https://i.pinimg.com/1200x/b4/4b/f0/b44bf09200a0a91b021f57eb75af92af.jpg",
      title: translation[lang]?.["/"]?.chatbot || "Chatbot",
      link: "/chatbot",
    },
    {
      image:
        "https://i.pinimg.com/1200x/86/22/ee/8622ee9686941e43ea39e408448476d7.jpg",
      title: translation[lang]?.["/"]?.imageRecognition || "Image Recognition",
      link: "/image",
    },
    {
      image:
        "https://i.pinimg.com/1200x/27/9a/3e/279a3ee6efff66cad7e3c53fcc972b65.jpg",
      title: translation[lang]?.["/"]?.tracker || "Admin", // ✅ fixed key
      link: "/tracker",
    },
    {
      image:
        "https://i.pinimg.com/1200x/45/c2/27/45c227b3bfc9750377d127e2bed1fea1.jpg",
      title: translation[lang]?.["/"]?.map || "Map",
      link: "/map",
    },
    {
      image:
        "https://i.pinimg.com/736x/61/c3/7e/61c37ee64436d972c83d889f7c129992.jpg",
      title: translation[lang]?.["/"]?.contact || "Contact",
      link: "/contact",
    },
    {
      image:
        "https://i.pinimg.com/1200x/03/f8/02/03f802b629283e7ea6810def824bb28e.jpg",
      title: translation[lang]?.["/"]?.about || "About",
      link: "/about",
    },
  ];

   useEffect(() => {
    // ensure ScrollTrigger registered
    gsap.registerPlugin(ScrollTrigger);

    // scope selectors to this component using wrapperRef
    const ctx = gsap.context(() => {
      // use immediateRender:false so GSAP doesn't force initial inline styles before render
      gsap.from(".landing-card", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          // don't persist weird pinned or scrub state
          markers: false,
        },
      });

      // ensure ScrollTrigger calculates positions after paint
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, wrapperRef);

    // cleanup: kill animations and revert any inline styles GSAP set
    return () => {
      ctx.revert(); // kills timelines/ScrollTrigger created inside context and clears inline styles
      ScrollTrigger.getAll().forEach((st) => st.kill && st.kill());
    };
  }, []);


  return (
    <div
      ref={wrapperRef}
      className="landing-wrapper min-h-screen w-full"
    >
      {/* HERO */}
      <Link
        to={sections[0].link}
        className="landing-card group relative block w-full h-[70vh] overflow-hidden"
      >
        <img
          src={sections[0].image}
          alt={sections[0].title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-orange-300/80 flex items-center justify-center transition-colors">
          <h2 className="text-5xl font-extrabold text-yellow-300 group-hover:text-white transition-colors">
            {sections[0].title}
          </h2>
        </div>
      </Link>

      <div ref={triggerRef} className="p-10 space-y-10">
        {/* 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(1, 3).map((sec, idx) => (
            <Link
              key={idx}
              to={sec.link}
              className="landing-card group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-orange-400/60 flex items-center justify-center transition-colors">
                <h2 className="text-2xl font-bold text-yellow-300 group-hover:text-white transition-colors">
                  {sec.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.slice(3, 6).map((sec, idx) => (
            <Link
              key={idx}
              to={sec.link}
              className="landing-card group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-orange-400/60 flex items-center justify-center transition-colors">
                <h2 className="text-xl font-bold text-yellow-300 group-hover:text-white transition-colors">
                  {sec.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* FULL WIDTH */}
        <Link
          to={sections[6].link}
          className="landing-card group relative block rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-400 w-full"
        >
          <img
            src={sections[6].image}
            alt={sections[6].title}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-green-300/50 flex items-center justify-center transition-colors">
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
              {sections[6].title}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
