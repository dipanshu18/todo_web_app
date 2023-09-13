import { Link } from "react-router-dom";
import Todo from "../components/Todo";
import background from "../assets/bg.jpg";
import { FormEvent, useEffect, useState } from "react";

export interface UserData {
  id: String;
  name: String;
  email: String;
  todos?: TodoData[];
}

export interface TodoData {
  id: React.Key;
  title: String;
}

export default function Home() {
  const [user, setUser] = useState<UserData[]>([]);

  const [todos, setTodos] = useState<TodoData[]>([]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const request = await fetch("http://localhost:4000/api/user");
      const data = await request.json();
      console.log(data[0]);

      if (data) {
        setUser(data);
      }
    }

    async function fetchTodos() {
      const request = await fetch("http://localhost:4000/api/todos");
      const data = await request.json();
      console.log(data);

      if (data) {
        setTodos(data);
      }
    }

    fetchUser();
    fetchTodos();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = { title: newTodo, userId: user[0].id };
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
              todos.map((todo: TodoData) => <Todo key={todo.id} todo={todo} />)}
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
