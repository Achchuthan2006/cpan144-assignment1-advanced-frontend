export default function TaskItem({ task, onToggle }) {
  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
      <span>{task.title}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.done ? "Mark Active" : "Mark Complete"}
      </button>
    </li>
  );
}
