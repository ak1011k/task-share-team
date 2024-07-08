import { Link } from "react-router-dom";
import { React, useState } from "react";
import { Header } from "./components/Header/Header";

export const Login = () => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[url('src/images/back.jpg')] min-h-[100vh] bg-repeat ">
      <Header />
      <div className="w-full max-w-md mx-auto border rounded-lg p-6 shadow-md bg-gray-50 mt-6">
        <h2 className="text-2xl font-bold mb-4 italic">プロジェクト名</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              プロジェクト名
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="プロジェクト名を入力"
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
              つくる
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
