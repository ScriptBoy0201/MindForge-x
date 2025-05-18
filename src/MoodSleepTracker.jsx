import React, { useState } from "react";

export default function MoodSleepTracker() {
  const [mood, setMood] = useState("");
  const [sleep, setSleep] = useState("");
  const [entries, setEntries] = useState([]);

  const moods = ["Happy", "Tired", "Stressed", "Excited", "Neutral"];

  function addEntry() {
    if (!mood || !sleep) return alert("Please fill mood and sleep!");
    const entry = {
      date: new Date().toLocaleDateString(),
      mood,
      sleep: Number(sleep),
    };
    setEntries([entry, ...entries]);
    setMood("");
    setSleep("");
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Mood & Sleep Tracker</h2>
      <div>
        <label>Mood: </label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select mood</option>
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Hours Slept: </label>
        <input
          type="number"
          min="0"
          max="24"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
        />
      </div>
      <button onClick={addEntry} style={{ marginTop: 10 }}>
        Add Entry
      </button>

      <h3>Entries:</h3>
      <ul>
        {entries.map(({ date, mood, sleep }, i) => (
          <li key={i}>
            {date} — Mood: {mood}, Sleep: {sleep} hrs
          </li>
        ))}
      </ul>
    </div>
  );
}
