import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function AdminPanel() {
  const [issues, setIssues] = useState([]);
  const tableRef = useRef(null);

  // Fetch all issues
  const fetchIssues = async () => {
    const res = await fetch("http://localhost:5000/api/issues");
    const data = await res.json();
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  // Animate table + rows when issues load
  useEffect(() => {
    if (issues.length > 0) {
      // Run after DOM updates
      setTimeout(() => {
        gsap.from(tableRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(".issue-row", {
          opacity: 0,
          x: -40,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        });
      }, 0);
    }
  }, [issues]);

  // Update status
  const updateStatus = async (id, newStatus) => {
    const res = await fetch(`http://localhost:5000/api/issues/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    const data = await res.json();
    alert(data.message);
    fetchIssues(); // refresh after update
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">👩‍💼 Admin Panel</h2>

      <table
        ref={tableRef}
        className="w-full border-collapse border border-gray-400 rounded-lg shadow-md overflow-hidden"
      >
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">User Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr
              key={issue.id}
              className="issue-row hover:bg-gray-100 transition-colors"
            >
              <td className="border p-2">{issue.id}</td>
              <td className="border p-2">{issue.category}</td>
              <td className="border p-2">{issue.description}</td>
              <td className="border p-2">{issue.email}</td>
              <td className="border p-2 font-semibold">{issue.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => updateStatus(issue.id, "In Progress")}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 shadow transform transition-transform duration-200 hover:scale-105"
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus(issue.id, "Resolved")}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 shadow transform transition-transform duration-200 hover:scale-105"
                >
                  Resolved
                </button>
                <button
                  onClick={() => updateStatus(issue.id, "Rejected")}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 shadow transform transition-transform duration-200 hover:scale-105"
                >
                  Rejected
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
