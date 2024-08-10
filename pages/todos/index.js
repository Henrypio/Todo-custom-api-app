// pages/todos/index.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todoSlice";
import TodoItem from "../../components/TodoItem";
import Link from "next/link";
import TodoForm from "@/components/TodoForm";

const TodoListPage = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 pb-3">Todo List</h1>
      <TodoForm />
      {/* <Link
        href="/todos/new"
        className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
      >
        Add New Todo
      </Link> */}

      <div>
        {list.length === 0 ? (
          <p>No todos available</p>
        ) : (
          list.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoListPage;
