import { Link } from "react-router-dom";
import ToDo from "../components/ToDo";
import AddToDo from "../components/AddToDo";
import background from "../../public/bg.jpg";

export default function Home() {
  return (
    <>
      <nav>
        <div className="navbar bg-slate-500">
          <div className="navbar-start">
            <Link to="/home">
              <a className="btn btn-ghost text-white normal-case text-xl">
                ToDoify
              </a>
            </Link>
          </div>
          <div className="navbar-end">
            <Link to="/">
              <a className="btn bg-slate-800">Logout</a>
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
            <ToDo />
            <ToDo />
            <ToDo />
            <div className="max-w-lg text-center my-4">
              <AddToDo />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
