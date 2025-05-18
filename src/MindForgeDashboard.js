import React from 'react';

export default function MindForgeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-2">MindForge X</h1>
        <p className="text-gray-300 text-lg">
          Your ultimate productivity & wellness dashboard.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Homework Helper</h2>
        <textarea
          placeholder="Type your homework tasks here..."
          className="w-full p-4 rounded-lg bg-gray-800 text-white resize-none h-40 mb-4"
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
          onClick={() => alert('Homework saved! (Feature coming soon)')}
        >
          Save Homework
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Mood & Sleep Tracker</h2>
        <p className="text-gray-400 mb-6">
          Track your mood and sleep patterns to optimize your energy.
        </p>
        {/* Placeholder for mood and sleep tracker UI */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="italic text-gray-500">Mood and sleep tracking coming soon!</p>
        </div>
      </section>
    </div>
  );
}
