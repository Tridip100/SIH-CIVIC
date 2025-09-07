import { useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  const authorities = [
    { name: "🏢 Municipal Corporation", phone: "1800-123-456", color: "bg-blue-100 hover" },
    { name: "🚓 Local Police Station", phone: "100", color: "bg-red-100" },
    { name: "🚒 Fire Department", phone: "101", color: "bg-orange-100" },
    { name: "🏥 Health Department", phone: "102", color: "bg-green-100" },
    { name: "💡 Electricity Board", phone: "1912", color: "bg-yellow-100" },
  ];

  useEffect(() => {
    // Animate AFTER everything has rendered
    setTimeout(() => {
      gsap.fromTo(
        ".authority-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: "power3.out",
        }
      );
    }, 100);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">📞 Contact Us</h2>

      {/* Authority Contacts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {authorities.map((auth, idx) => (
          <div
            key={idx}
            className={`authority-card ${auth.color} border rounded-xl shadow-lg p-5 hover:scale-105 hover:shadow-xl hover:bg-green-400 transition-all`}
          >
            <h3 className="text-lg font-bold mb-2">{auth.name}</h3>
            <p className="text-gray-700 font-mono text-lg">{auth.phone}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form bg-white p-8 rounded-xl shadow-lg border">
        <h3 className="text-xl font-semibold mb-4">📩 Send us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder="Your Feedback"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
