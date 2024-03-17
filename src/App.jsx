import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main className="mx-auto container w-[80%] h-screen justify-center items-center p-5">
      <h1 className="text-center font-bold text-xl mb-24">CRUD Practicing with RTK Query</h1>

      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 ">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
