import { useState } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNowStrict } from "date-fns";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useUpdateTodo, useDeleteTodo } from "../hooks/useTodos";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState(todo.content);

  const { mutate: update } = useUpdateTodo();
  const { mutate: del } = useDeleteTodo();

  const handleToggle = () =>
    update({ id: todo._id, payload: { finished: !todo.finished } });

  const handleSave = () => {
    if (!draft.trim()) return;
    update({ id: todo._id, payload: { content: draft } });
    setEdit(false);
  };

  const handleDelete = () => del(todo._id);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0"
    >
     <div className="flex items-start space-x-3">
  <input
    type="checkbox"
    checked={todo.finished}
    onChange={handleToggle}
    className="h-5 w-5 accent-brand mt-0.5"
  />
  <div className="flex-1">
    {edit ? (
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        className="border px-2 py-1 rounded text-sm w-full"
        autoFocus
      />
    ) : (
      <span
        className={`text-sm ${
          todo.finished
            ? 'line-through text-gray-400'
            : 'text-gray-900 dark:text-white'
        }`}
      >
        {todo.content}
      </span>
    )}

    {/* Badges live here – no line-through applied */}
    <div className="flex items-center space-x-2 mt-1">
      <span className="flex items-center space-x-1 text-xs">
        <ClockIcon className="h-3.5 w-3.5 text-brand" />
        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
          {formatDistanceToNowStrict(new Date(todo.createdAt), { addSuffix: true })}
        </span>
      </span>
    </div>
  </div>
</div>

     <div className="flex items-center space-x-2">
  {edit ? (
    <>
      <button
        onClick={handleSave}
        className="p-1.5 rounded-full text-green-500 hover:bg-green-100 dark:hover:bg-green-900/30 transition"
        aria-label="Save"
      >
        <CheckIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setEdit(false)}
        className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        aria-label="Cancel"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => setEdit(true)}
        className="p-1.5 rounded-full text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
        aria-label="Edit"
      >
        <PencilSquareIcon className="h-5 w-5" />
      </button>
      <button
        onClick={handleDelete}
        className="p-1.5 rounded-full text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 transition"
        aria-label="Delete"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </>
  )}
</div>
    </motion.li>
  );
};
