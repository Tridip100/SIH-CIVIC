import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Report() {
  useGSAP(() => {
    gsap.from(".report-form input, .report-form select, .report-form textarea, .report-form button", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".report-image", {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
      
      <div className="report-image flex-1 hidden md:block">
        <img
          src="https://i.pinimg.com/1200x/80/f3/96/80f3960217c48c2f1a8eda45ff5da35b.jpg" 
          alt="Report Issue Illustration"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>

      
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          📝 Report an Issue
        </h2>
        <form className="report-form space-y-4">
          <input
            type="text"
            placeholder="Issue Title"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
          <select className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400">
            <option>Select Category</option>
            <option>🚧 Roads</option>
            <option>💡 Streetlights</option>
            <option>🗑️ Garbage</option>
            <option>💧 Water Supply</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Describe the issue..."
            rows="4"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          ></textarea>
          <input type="file" className="w-full border rounded-lg p-2" />
          <input
            type="text"
            placeholder="Location (Auto-detect in future)"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-transform duration-200"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}
