import React, { useEffect, useState } from "react";
import gsap from "gsap";

const issues = [
  { id: 1, title: "Pothole near Main Road", status: "Pending" },
  { id: 2, title: "Streetlight not working at Park", status: "In Progress" },
  { id: 3, title: "Garbage not collected in Sector 5", status: "Resolved" },
  { id: 4, title: "Drainage overflow at Bus Stand", status: "Pending" },
  { id: 5, title: "Illegal dumping near Railway Station", status: "Resolved" },
];

export default function Tracker() {
  const [activity, setActivity] = useState([]);

  const pendingCount = issues.filter((i) => i.status === "Pending").length;
  const progressCount = issues.filter((i) => i.status === "In Progress").length;
  const resolvedCount = issues.filter((i) => i.status === "Resolved").length;

  useEffect(() => {
    // Animate stat cards
    gsap.fromTo(
      ".stat-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );

    // Animate issue cards
    gsap.fromTo(
      ".issue-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    // Animate activity feed
    gsap.fromTo(
      ".activity-feed",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Mock activity feed
    setActivity([
      "✅ Garbage issue in Sector 5 resolved",
      "🔧 Streetlight at Park under maintenance",
      "🚧 New complaint: Drainage overflow at Bus Stand",
    ]);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🏙️ Civic Issue Tracker Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="stat-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 text-center">
          <h2 className="text-lg font-semibold text-gray-600">🚧 Pending</h2>
          <p className="text-4xl font-extrabold text-red-600">{pendingCount}</p>
        </div>
        <div className="stat-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-yellow-500 text-center">
          <h2 className="text-lg font-semibold text-gray-600">🔧 In Progress</h2>
          <p className="text-4xl font-extrabold text-yellow-600">
            {progressCount}
          </p>
        </div>
        <div className="stat-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 text-center">
          <h2 className="text-lg font-semibold text-gray-600">✅ Completed</h2>
          <p className="text-4xl font-extrabold text-green-600">
            {resolvedCount}
          </p>
        </div>
      </div>

      {/* Issue List */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Reported Issues</h2>
      <div className="space-y-4 mb-10">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="issue-card bg-white p-4 rounded-xl shadow border border-gray-200 flex justify-between"
          >
            <span className="font-medium text-gray-700">{issue.title}</span>
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                issue.status === "Pending"
                  ? "bg-red-500 animate-pulse"
                  : issue.status === "In Progress"
                  ? "bg-yellow-500"
                  : "bg-green-600"
              }`}
            >
              {issue.status}
            </span>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📢 Recent Updates</h2>
      <div className="activity-feed bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {activity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
