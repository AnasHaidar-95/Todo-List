import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoList } from '@/features/todos/components/TodoList';
import '@/styles/index.css';

const qc = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <main
        className="min-h-screen w-full flex items-center justify-center p-4
                   bg-gradient-to-br [background:var(--color-gradient-start)]
                   via-[var(--color-gradient-mid)] to-[var(--color-gradient-end)]
                   dark:[background:var(--color-gradient-start-dark)]
                   dark:via-[var(--color-gradient-mid-dark)]
                   dark:to-[var(--color-gradient-end-dark)]"
      >
        <div className="w-full max-w-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg
                        text-gray-900 dark:text-white rounded-3xl shadow-2xl p-6">
          <h1 className="text-3xl font-bold text-center text-brand mb-6">
            My To-Do List
          </h1>
          <TodoList />
        </div>
      </main>
    </QueryClientProvider>
  );
}