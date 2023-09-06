import { Link } from "react-router-dom";

export default function ToDo() {
  return (
    <>
      <div className="bg-slate-900 max-w-2xl p-6 my-2 rounded-lg shadow-2xl flex">
        <div className="mr-10">
          <h1 className="font-bold">ToDo Title</h1>
          <p className=" font-normal">
            ToDo Description here all the content goes
          </p>
        </div>
        <div className="mx-4 flex items-center">
          <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal").showModal()}
            >
              Edit
            </button>
            <dialog id="my_modal" className="modal">
              <div className="modal-box">
                <p className="pb-8 text-center">
                  Press ESC key or click outside to close
                </p>
                <form className="w-full mx-auto">
                  <div className="mb-6">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Go for walk"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Take 3-4 rounds of the park and do some pushups"
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
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        </div>
        <div className="mr-2 flex items-center ">
          <button className="btn text-white bg-red-600 hover:bg-red-700">
            Delete
          </button>
        </div>
        <div className="ml-2 flex items-center">
          <button className="btn btn-primary">Done</button>
        </div>
      </div>
    </>
  );
}
