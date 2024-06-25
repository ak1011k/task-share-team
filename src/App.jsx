import "./App.css";
import { Header } from "./components/Header/Header";
import { TaskCards } from "./components/task/TaskCards";

function App() {
  return (
    <div className="bg-[url('src/images/sky.jpg')] min-h-[100vh] bg-repeat">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
