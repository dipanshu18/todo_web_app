import { Link } from "react-router-dom";
import background from "../assets/bg.jpg";

export default function Landing() {
  return (
    <>
      <main>
        <nav>
          <div className="navbar bg-slate-500">
            <div className="navbar-start">
              <Link to="/">
                <button className="btn btn-ghost text-white normal-case text-xl">
                  ToDoify
                </button>
              </Link>
            </div>
            <div className="navbar-end">
              <Link to="/login">
                <button className="btn bg-slate-800">Login</button>
              </Link>
            </div>
          </div>
        </nav>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-7xl text-white font-extrabold">
                Hello there!
              </h1>
              <p className="mb-5 px-8 text-2xl font-medium text-slate-300">
                This is a To-Do Web Application build with React, DaisyUI,
                Typescript, Prisma and PostgreSQL. Here the todo has CRUD
                operations rather than creating and deleting them.
              </p>
              <Link to="/signup">
                <button className="btn bg-slate-800">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
