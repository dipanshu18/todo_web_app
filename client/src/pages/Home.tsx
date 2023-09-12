import { Link } from "react-router-dom";
import ToDo from "../components/ToDo";
import background from "../assets/bg.jpg";
import { useEffect, useState } from "react";

export interface TodoData {
  id: String;
  title: String;
}

export default function Home() {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const request = await fetch("http://localhost:4000/api/todos");
      const data = await request.json();
      console.log(data);

      if (data) {
        setTodos(data);
      }
    }

    fetchTodos();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { title: newTodo };
    const response = await fetch("http://localhost:4000/api/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setNewTodo("");
      console.log("added todo:", response.json());
    }
  }

  return (
    <>
      <nav>
        <div className="navbar bg-slate-500">
          <div className="navbar-start">
            <Link to="/home">
              <button className="btn btn-ghost text-white normal-case text-xl">
                ToDoify
              </button>
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/">
              <button className="btn bg-slate-800">Logout</button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content flex-col">
            <h1 className="mb-5 w-full text-4xl text-white font-bold">
              Hey {"{UserName}"}, what are the tasks today?
            </h1>

            {todos &&
              todos.map((todo: TodoData) => <ToDo key={todo.id} todo={todo} />)}
            <form
              onSubmit={handleSubmit}
              className="flex max-w-2xl text-center my-4"
            >
              <input
                type="text"
                placeholder="Type here"
                value={newTodo}
                onChange={(e) => {
                  setNewTodo(e.target.value);
                }}
                className="input input-bordered w-full mr-4"
              />
              <button className="btn btn-primary">Add Todo</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
