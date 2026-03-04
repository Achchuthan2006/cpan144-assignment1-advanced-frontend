import CounterPanel from "../../components/CounterPanel";
import TaskBoard from "../../components/TaskBoard";

export default function TasksPage() {
  return (
    <section className="stack">
      <div className="card">
        <h2>Task Dashboard</h2>
        <p>
          This page demonstrates component state, props, button click events,
          and conditional rendering with task status feedback.
        </p>
      </div>
      <CounterPanel initialCount={2} step={1} />
      <TaskBoard />
    </section>
  );
}
