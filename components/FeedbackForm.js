"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    topic: "State Management",
    message: ""
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...form, submittedAt: new Date().toLocaleString() });
    setForm((current) => ({ ...current, message: "" }));
  };

  return (
    <section className="card">
      <h3>Share Your Learning Feedback</h3>
      <form className="form-grid" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="topic">Topic</label>
        <select
          id="topic"
          name="topic"
          value={form.topic}
          onChange={handleChange}
        >
          <option>State Management</option>
          <option>Props</option>
          <option>Event Handling</option>
          <option>Conditional Rendering</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What did you find most useful?"
          rows={4}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Conditional rendering shows result only after submission */}
      {submittedData ? (
        <div className="feedback-result">
          <h4>Submission Received</h4>
          <p>
            Thank you, <strong>{submittedData.name}</strong>.
          </p>
          <p>
            Selected topic: <strong>{submittedData.topic}</strong>
          </p>
          <p>Message: {submittedData.message}</p>
          <p className="meta">Submitted on: {submittedData.submittedAt}</p>
        </div>
      ) : (
        <p className="status">
          No feedback submitted yet. Fill the form and click "Submit Feedback".
        </p>
      )}
    </section>
  );
}
