import { Link } from "react-router-dom";
import background from "../assets/bg.jpg";

export default function SignUp() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" p-10 bg-slate-900 rounded-lg shadow-2xl">
        <form className="w-96">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="max-w-lg text-center">
            <Link to="/home">
              <button type="submit" className="btn bg-slate-800">
                Submit
              </button>
            </Link>
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
