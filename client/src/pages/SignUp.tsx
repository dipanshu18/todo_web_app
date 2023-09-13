import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import background from "../assets/bg.jpg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: FormEvent) {
    e.preventDefault();
    const user = { name, email, password };
    const response = await fetch("http://localhost:4000/api/user/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const createdUser = await response.json();

    if (response.ok) {
      console.log(createdUser);
    }
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" p-10 bg-slate-900 rounded-lg shadow-2xl">
        <form onSubmit={handleSignup} className="w-96">
          <h1 className="text-white text-6xl font-bold mb-6 text-center">
            Sign up
          </h1>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="janedoe@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="max-w-lg text-center">
            <button type="submit" className="btn bg-slate-800">
              Submit
            </button>
          </div>
          <div className="mt-6 text-white">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="underline font-medium">
                  <button>Login</button>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
