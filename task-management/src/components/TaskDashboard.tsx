// components/TaskDashboard.tsx
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Task } from "../models/Task";

const TaskDashboard = () => {
  const taskContext = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  if (!taskContext) return <p>Loading...</p>;

  const { tasks, addTask, toggleCompletion, deleteTask } = taskContext;

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask: string = newTaskTitle;
    addTask(newTask);
    setNewTaskTitle("");
  };

  return (
    <div>
      <h2>Task Dashboard</h2>

      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;