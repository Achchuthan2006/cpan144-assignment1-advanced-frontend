"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";

const starterTasks = [
  { id: 1, title: "Build reusable components", done: true },
  { id: 2, title: "Handle user events", done: false },
  { id: 3, title: "Apply conditional rendering", done: false }
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState(starterTasks);
  const [showCompleted, setShowCompleted] = useState(true);

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done);
  const completedCount = tasks.filter((task) => task.done).length;

  return (
    <section className="card">
      <h3>Task List</h3>
      <p>
        Completed: {completedCount} / {tasks.length}
      </p>
      <button onClick={() => setShowCompleted((value) => !value)}>
        {showCompleted ? "Hide Completed Tasks" : "Show All Tasks"}
      </button>
      <ul className="task-list">
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>
      {/* Conditional rendering based on current filter and task state */}
      {!showCompleted && completedCount > 0 ? (
        <p className="status">
          Completed tasks are currently hidden. Turn on "Show All Tasks" to view
          them.
        </p>
      ) : null}
    </section>
  );
}
