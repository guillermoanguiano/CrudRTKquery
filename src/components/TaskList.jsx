import { useDeleteTaskMutation, useGetTasksQuery } from "../api/apiSlice";

export const TaskList = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  const [deleteTask] = useDeleteTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <input type="checkbox" id={task.id} />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
};
