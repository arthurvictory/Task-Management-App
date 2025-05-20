import { createContext, useState, ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Task } from "../models/Task";

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { user, isAuthenticated } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!isAuthenticated || !user?.sub) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      userId: user.sub,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleCompletion = (taskId: string) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleCompletion, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};