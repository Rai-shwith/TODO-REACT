import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ToDo = (props) => {
  const getTodoIndex = (id) => {
    let index = props.todos.findIndex((item) => {
      return id == item.id;
    });
    return index;
  };

  const handleEdit = (e) => {
    const id = e.target.parentElement.id;
    console.log(props.id)
    console.log(props.todos)
    // const todo = props.todos.find((item) => item.id === String(id));
    for (const item of props.todos) {
      if (item.id === id){
        props.setToDo(item.toDo);
        break;
      }
    }
    handleDelete(e);
  };

  const handleDelete = (e) => {
    const id = e.target.parentElement.id;
    const newTodos = props.todos.filter((item) => item.id != id);
    props.setToDos([...newTodos]);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = getTodoIndex(id);
    props.todos[index].isCompleted = e.target.checked;
    props.setToDos([...props.todos]);
    props.saveToLocalStorage();
  };

  return (
    <div
      hidden={props.hidden}
      className={props.todoDetails.isCompleted ? "opacity-70" : ""}
    >
      <div className="w-full flex justify-between p-2 bg-pink-300 rounded-3xl border border-slate-50">
        <input
          type="checkbox"
          name={props.todoDetails.id}
          onClick={handleCheckbox}
          defaultChecked={props.todoDetails.isCompleted}
          id=""
          className="m-1 cursor-pointer"
        />
        <div className=" bg-slate-50 font-bold flex items-center flex-grow rounded-l-full pl-5 mr-4">
          <div
            className={
              props.todoDetails.isCompleted ? "line-through font-thin" : ""
            }
          >
            {props.todo}
          </div>
        </div>
        <div id={props.id} className="flex">
          <div
            onClick={handleEdit}
            className="bg-slate-50 min-w-12 h-8 items-center flex justify-center cursor-pointer flex-grow p-1 hover:scale-110 transition-all hover:bg-blue-500 hover:text-white ease-in rounded-l-full mr-1  text-red-900"
          >
            <FaEdit />
          </div>
          <div
            onClick={handleDelete}
            className="bg-slate-50 cursor-pointer h-8 items-center min-w-12 flex justify-center hover:bg-red-600 hover:text-white flex-grow p-1 hover:scale-110 transition-all ease-in rounded-r-full text-red-900"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
