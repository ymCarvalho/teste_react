import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1 className="text-red-500">GERENCIADOR DE TAREFAS</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}
export default App;

