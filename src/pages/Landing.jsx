import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export default function Landing() {
  const sections = [
    {
      image:
        "https://i.pinimg.com/736x/05/60/5a/05605a78b51bf5255af4b7514a1bfa99.jpg",
      title: " Report an Issue",
      link: "/report",
      layout: "hero",
    },
    {
      image:
        "https://i.pinimg.com/originals/10/58/c9/1058c9f739ea6feebdb361cb138bea6e.gif",
      title: "Chatbot",
      link: "/chatbot",
      layout: "half",
    },
    {
      image:
        "https://videocdn.pollo.ai/web-cdn/pollo/production/cmf9a7s2q027bn7by48yr1arf/image/1757224754419-22ee636e-c157-40fc-af74-bba3d6c1005a.jpeg",
      title: "Image Recognition",
      link: "/image",
      layout: "half",
    },
    {
      image:
        "https://i.pinimg.com/736x/64/e4/f6/64e4f60cf2019ad7fb7d44e2bed405ca.jpg",
      title: "Track Issues",
      link: "/tracker",
      layout: "third",
    },
    {
      image:
        "https://i.pinimg.com/1200x/e7/0c/28/e70c2855fcaa37402c96ea1d02411740.jpg",
      title: "Map",
      link: "/map",
      layout: "third",
    },
    {
      image:
        "https://i.pinimg.com/1200x/96/ee/02/96ee02b9a4af3df81faf0c3034bba03c.jpg",
      title: "Contact",
      link: "/contact",
      layout: "third",
    },
    {
      image:
        "https://i.pinimg.com/1200x/03/f8/02/03f802b629283e7ea6810def824bb28e.jpg",
      title: " About Platform",
      link: "/about",
      layout: "full",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate hero card
    gsap.from(".landing-hero", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".landing-wrapper",
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });

    // Animate row of 2 half cards
    gsap.from(".landing-half-row", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".landing-half-row",
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });

    // Animate row of 3 cards
    gsap.from(".landing-row", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".landing-row",
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });

    // Animate about card
    gsap.from(".landing-about", {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".landing-about",
        start: "top 85%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  });

  return (
    <div className="landing-wrapper h-full w-full p-0 m-0">
      {/* HERO (Report Issue) */}
      <a
        href={sections[0].link}
        className="landing-hero hover:rounded-4xl landing-card group relative block w-full h-[70vh] overflow-hidden"
      >
        <img
          src={sections[0].image}
          alt={sections[0].title}
          className="w-full h-full overflow-hidden object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 transition-all hover:bg-red-400/50 flex items-center justify-center">
          <h2 className="text-5xl font-extrabold text-white group-hover:text-green-400 transition-colors">
            {sections[0].title}
          </h2>
        </div>
      </a>

      <div className="p-10 flex flex-col gap-6">
        {/* Chatbot + Image Recognition (half-half row) */}
        <div className="landing-half-row flex gap-6 flex-wrap justify-between">
          {sections.slice(1, 3).map((sec, idx) => (
            <a
              key={idx}
              href={sec.link}
              className="landing-card group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex-1 min-w-[250px] max-w-[49%]"
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 hover:bg-purple-400/70 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {sec.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        {/* Track + Map + Contact (3 in same row) */}
        <div className="landing-row flex gap-6 flex-wrap justify-between">
          {sections.slice(3, 6).map((sec, idx) => (
            <a
              key={idx}
              href={sec.link}
              className="landing-card group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex-1 min-w-[250px] max-w-[32%]"
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 hover:bg-lime-300/80 flex items-center justify-center">
                <h2 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  {sec.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        {/* About (Full Width) */}
        <a
          href={sections[6].link} 
          className="landing-about landing-card group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-400 w-full"
        >
          <img
            src={sections[6].image}
            alt={sections[6].title}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 hover:bg-green-300/50 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
              {sections[6].title}
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}
