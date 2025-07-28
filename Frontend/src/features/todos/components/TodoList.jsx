import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '@/lib/useTheme';
import { useTodos, useCreateTodo } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";
import { Spinner } from "@/ui/Spinner";
import { Error } from "@/ui/Error";

export const TodoList = () => {
  const [newContent, setNewContent] = useState("");
  const { data: todos = [], isLoading, error } = useTodos();
  const { mutate: create } = useCreateTodo();
 const { theme, toggle } = useTheme();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newContent.trim()) return;
    create(newContent);
    setNewContent("");
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error message="Could not load todos" />;

  return (
    <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white">Tasks</h2>
        <button
          onClick={toggle}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      <form
        onSubmit={handleAdd}
        className="flex flex-col sm:flex-row gap-2 mb-4"
      >
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Add a new task…"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-brand text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Add
        </button>
      </form>

      <div className="max-h-[320px] overflow-y-auto pr-2">
        <motion.ul layout className="divide-y divide-gray-200">
          {todos.map((t) => (
            <TodoItem key={t._id} todo={t} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
