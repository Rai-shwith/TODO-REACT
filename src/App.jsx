import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen absolute inset-0">
      <NavBar />
      <div className="flex justify-between w-4/5 bg-slate-200 my-3 p-3 self-center rounded-lg">
        <input type="text" className="appearance-none  focus:ring-2 focus:ring-offset-2" />
        <h3 className="p-2 bg-slate-400 hover:scale-110 transition-transform ease-in-out rounded-md cursor-pointer">Add</h3>
      </div>
      <div className="flex flex-col justify-evenly items-start w-4/5 self-center my-5 rounded-3xl flex-grow bg-purple-300">
      </div>
    </div>
  );
}

export default App;
