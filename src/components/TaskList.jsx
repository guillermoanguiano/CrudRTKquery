import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice";

export const TaskList = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();

  const [deleteTask] = useDeleteTaskMutation();

  const handleChange = ( e, task ) => {
    updateTask({
      ...task,
      completed: e.target.checked
    })
  }

  const handleDelete = ( id ) => {
    deleteTask(id);
  }

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul className="w-full max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md p-6 gap-10 flex flex-col text-slate-900">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center border-b-2 py-2">
          <li className="flex flex-col justify-center gap-2 w-[80%]">
            <h3 className="first-letter:uppercase">{task.name}</h3>
            <p>{task.description}</p>
            <div className="flex items-center gap-2">
              <label htmlFor={task.id}>Completed</label>
              <input
                className="mt-[2px]"
                type="checkbox"
                id={task.id}
                checked={task.completed}
                onChange={(e) => handleChange(e, task)}
              />
            </div>
          </li>
          <button
            onClick={() => handleDelete(task.id)}
            className="py-2 px-3 rounded-lg bg-red-500 h-fit w-fit self-center text-white font-bold hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};
