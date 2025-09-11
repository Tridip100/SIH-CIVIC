import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Report from "./pages/Report";
import Tracker from "./pages/Tracker";
import Map from "./pages/Map";
import Contact from "./pages/Contact";
import Chatbot from "./pages/Chatbot";
import ImageRecognition from "./pages/ImageRecognition";
import AdminPanel from "./pages/AdminPanel";
import { LanguageProvider } from "./LanguageContext.jsx"; // ✅ correct path

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/report" element={<Report />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/image" element={<ImageRecognition />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}
