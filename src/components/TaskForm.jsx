import { useCreateTaskMutation } from "../api/apiSlice";

export const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    // const { name, description, checked } = e.target.elements;
    createTask({ name, description, completed });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="name">Name: </label>
        <input className="rounded p-1" placeholder="Task..." type="text" name="name" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="description">Description: </label>
        <input className="rounded p-1" placeholder="Description..." type="text" name="description" />
      </div>
      <div className="flex gap-2 items-center">
        <label className="font-bold" htmlFor="completed">Is it done? </label>
        <input className="rounded p-1 mt-1" type="checkbox" name="completed" />
      </div>

      <button
        className="p-2 bg-cyan-500 text-white font-bold w-24 rounded-lg self-end"
      >
        Add Task
      </button>
    </form>
  );
};
