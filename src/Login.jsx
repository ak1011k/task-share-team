import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Header } from "./components/Header/Header";

const Login = () => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("プロジェクト名:", projectName);
    // ここでプロジェクト名を保存するロジックを追加できます
  };

  return (
    <div className="bg-[url('src/images/wood.jpg')] min-h-[100vh] bg-repeat">
      <Header />
      <div className="w-full max-w-md mx-auto border rounded-lg p-6 shadow-md bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 italic">Input Project Name</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="input project"
              className="w-full px-3 py-2 border border-black rounded-md "
              required
            />
          </div>

          <Link to="/app">
            {" "}
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
            >
              {" "}
              Create
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
