import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ToDoContainer from "./components/ToDoContainer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleAdd = (e) => {
    if (toDo.trim() && e.key == "Enter") {
      setToDos([...toDos, { id: uuidv4(),toDo: toDo, isCompleted: false }]);
      setToDo("");
    } 
  };


  const handleTodoChange = (e) => {
    setToDo(e.target.value);
  };



  return (
    <div className="bg-slate-50 flex flex-col min-h-screen absolute inset-0">
      <NavBar />
      <div className="flex justify-between w-4/5  bg-slate-200 my-3 p-3 self-center rounded-lg">
        <input
          type="text"
          value={toDo}
          onChange={handleTodoChange}
          onKeyDown={handleAdd}
          className="appearance-none w-4/5 focus:ring-2 focus:ring-offset-2 outline-none"
        />
        <h3
          onClick={handleAdd}
          className="p-2 bg-slate-400 hover:scale-110 transition-transform ease-in-out rounded-md cursor-pointer"
        >
          Add
        </h3>
      </div>
      <ToDoContainer>
      {toDos.map((todo) => (
          <ToDo  key={todo.id} id={todo.id} todoDetails={todo} todo={todo.toDo}
          todos = {toDos}
          setToDos = {setToDos}
          ></ToDo>
        ))}
        </ToDoContainer>
    </div>
  );
}

export default App;
