// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

// meta.env → Vite style
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // e.g. http://localhost:8000

const Dashboard = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      if (!API_BASE_URL) {
        setAnswer(
          "Set VITE_API_BASE_URL in your .env file to connect the backend."
        );
      } else {
        const res = await fetch(`${API_BASE_URL}/ask`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
        });

        const data = await res.json();
        setAnswer(data.answer || "No answer received from API.");
      }
    } catch (err) {
      console.error(err);
      setAnswer("Something went wrong while asking the question.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex">

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        {/* Header */}
        <header>
          <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500">
            AI insights for XYZ Teaching Classes
          </p>
        </header>

        {/* Top row – Students & Fees */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Total Students by Batch */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-800">
              Total Students by Batch
            </h3>

            <div className="flex items-end justify-around h-40 mt-6">
              {/* Batch A */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 rounded-t-md bg-blue-500 h-28" />
                <span className="text-xs text-gray-500">Batch A</span>
                <span className="text-sm font-semibold text-gray-800">45</span>
              </div>
              {/* Batch B */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 rounded-t-md bg-green-500 h-24" />
                <span className="text-xs text-gray-500">Batch B</span>
                <span className="text-sm font-semibold text-gray-800">38</span>
              </div>
              {/* Batch C */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 rounded-t-md bg-red-500 h-32" />
                <span className="text-xs text-gray-500">Batch C</span>
                <span className="text-sm font-semibold text-gray-800">52</span>
              </div>
            </div>
          </div>

          {/* Total Fees Collected */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-800">
              Total Fees Collected (per month)
            </h3>

            <div className="flex items-end justify-around h-40 mt-6">
              {/* Oct */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 rounded-t-md bg-purple-400 h-16" />
                <span className="text-xs text-gray-500">Oct</span>
              </div>
              {/* Nov */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 rounded-t-md bg-purple-400 h-28" />
                <span className="text-xs text-gray-500">Nov</span>
              </div>
              {/* Dec */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 rounded-t-md bg-purple-400 h-20" />
                <span className="text-xs text-gray-500">Dec</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-2xl font-semibold text-[#c7243b]">$12,450</p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>
          </div>
        </section>

        {/* Middle row – Pending Fees & Attendance */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Pending Fees Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-800">
              Pending Fees Summary
            </h3>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Batch A</span>
                <span className="text-orange-500">$500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Batch B</span>
                <span className="text-orange-500">$200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Batch C</span>
                <span className="text-orange-500">$800</span>
              </div>
            </div>

            <div className="mt-4 border-t pt-3 flex justify-between text-sm font-semibold">
              <span className="text-gray-700">Total Pending</span>
              <span className="text-[#c7243b]">$1,500</span>
            </div>
          </div>

          {/* Attendance Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center">
            <h3 className="font-semibold text-gray-800 mb-4">
              Attendance Overview
            </h3>

            <div className="relative">
              <div className="w-32 h-32 rounded-full border-[10px] border-[#c7243b]/80 border-t-gray-200 border-l-gray-200 flex items-center justify-center">
                <span className="text-xl font-semibold text-[#c7243b]">
                  87%
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Average attendance rate
            </p>
          </div>
        </section>

        {/* Bottom – AI Assistant (Ask Question) */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-1">AI Assistant</h3>
          <p className="text-xs text-gray-500 mb-4">
            Ask me anything about your class data…
          </p>

          <div className="space-y-4">
            <textarea
              className="w-full min-h-[80px] rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c7243b]/70 focus:border-transparent resize-none bg-gray-50"
              placeholder="e.g. What is the total count of students? How much fee is collected this month?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <button
                onClick={handleAskQuestion}
                disabled={loading}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-[#c7243b] text-white hover:bg-[#a81c30] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Thinking..." : "Ask Question"}
              </button>

              {API_BASE_URL && (
                <span className="text-[11px] text-gray-400">
                  Using API: {API_BASE_URL}
                </span>
              )}
            </div>

            {answer && (
              <div className="mt-4 rounded-lg bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800">
                <span className="font-semibold text-gray-700 block mb-1">
                  Answer
                </span>
                <p>{answer}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
