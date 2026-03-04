import FeedbackForm from "../../components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <section className="stack">
      <div className="card">
        <h2>Feedback Form</h2>
        <p>
          This page demonstrates controlled form inputs, submit handling, and
          conditional rendering based on submission state.
        </p>
      </div>
      <FeedbackForm />
    </section>
  );
}
