import "./App.css";
import { Date } from "./components/Header/Date";
import { Header } from "./components/Header/Header";
import { TaskCards } from "./components/task/TaskCards";

function App() {
  return (
    <div className="bg-[url('src/images/wood.jpg')] min-h-[100vh] bg-repeat">
      <Header />
      <Date />
      <TaskCards />
    </div>
  );
}

export default App;
