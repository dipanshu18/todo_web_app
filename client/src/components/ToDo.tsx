import { FormEvent, useState } from "react";

export default function Todo({ todo }) {
  const [newTitle, setNewTitle] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = todo.id;
    const updates = { title: newTitle };
    const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updates),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setNewTitle("");
      console.log("successfully updated");
      document.getElementById(todo.id).close();
    }
  }

  async function handleDelete(e: FormEvent) {
    e.preventDefault();
    const id = todo.id;
    const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("successfully deleted");
    }
  }

  async function handleDone(e: FormEvent) {
    e.preventDefault();
    const id = todo.id;
    const response = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ progress: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("successfully completed");
      handleDelete(e);
    }
  }

  return (
    <>
      <div className="bg-slate-900 w-[500px] p-6 my-2 rounded-lg shadow-2xl flex items-center">
        <div className="">
          <h1 className="font-bold">{todo.title}</h1>
        </div>
        <div className="flex ml-auto">
          <div className="flex items-center mx-2">
            <>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() => document.getElementById(todo.id).showModal()}
              >
                Edit
              </button>
              <dialog id={todo.id} className="modal">
                <div className="modal-box">
                  <p className="pb-8 text-center">
                    Press ESC key or click outside to close
                  </p>
                  <form onSubmit={handleSubmit} className="w-full mx-auto">
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
                        value={newTitle}
                        onChange={(e) => {
                          setNewTitle(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required
                      />
                    </div>
                    <div className="max-w-lg text-center">
                      <button type="submit" className="btn bg-slate-800">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </>
          </div>
          <div className="flex items-center mx-2">
            <button
              onClick={handleDelete}
              className="btn text-white bg-red-600 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
          <div className="flex items-center ml-2">
            <button onClick={handleDone} className="btn btn-primary">
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
