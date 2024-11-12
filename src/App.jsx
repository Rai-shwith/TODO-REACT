import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ToDoContainer from "./components/ToDoContainer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

const toggleShowFinished = () => { 
  setShowFinished(!showFinished);
 }


const saveToLocalStorage=()=>{
  setTimeout(() => {
    localStorage.setItem('todos',JSON.stringify(toDos))
  }, 300);
  console.log("Todos Saved !")
}
useEffect(() => {
  const localTodos = JSON.parse(localStorage.getItem('todos'));
  localTodos && setToDos(localTodos);
}, [])
useEffect(() => {
  saveToLocalStorage()
}, [toDos])



  const handleAdd = (e,fromBtn) => {
    if (toDo.trim() && (e.key == "Enter" || fromBtn)) {
      setToDos([...toDos, { id: uuidv4(),toDo: toDo, isCompleted: false }]);
      setToDo("");
      saveToLocalStorage()
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
          onClick={(e)=>handleAdd(e,true)}
          className="p-2 bg-slate-400 hover:scale-110 transition-transform ease-in-out rounded-md cursor-pointer"
        >
          Save
        </h3>
      </div>
      <div className="flex gap-5 justify-center">
        <input type="checkbox" onClick={toggleShowFinished} name="" id=""  defaultChecked={showFinished} className=""/> Show Finished
        </div>
        <div className="h-0.5 w-3/4 self-center bg-black opacity-30 my-1"></div>
      <ToDoContainer>
        {toDos.length==0&& <div className="text-center text-3xl font-semibold">No Todos</div>}
      {toDos.map((todo) => (
          <ToDo hidden = {!showFinished && todo.isCompleted}
          key={todo.id} id={todo.id} todoDetails={todo} todo={todo.toDo}
          todos = {toDos}
          setToDos = {setToDos}
          setToDo = {setToDo}
          saveToLocalStorage = {saveToLocalStorage}
          ></ToDo>
        ))}
        </ToDoContainer>
    </div>
  );
}

export default App;
