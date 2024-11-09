import React from "react";

const ToDo = (props) => {
const getTodoIndex= (id) =>{
  let index = props.todos.findIndex((item)=>{
    return id == item.id;
  });
  return index;
}

  const handleEdit = (e) =>{
    
  }

  const handleDelete = (e) =>{
    const id = e.target.parentElement.id;
    const newTodos = props.todos.filter((item)=>item.id != id);
    props.setToDos([...newTodos]);
  }

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = getTodoIndex(id);
    props.todos[index].isCompleted=e.target.checked;
    props.setToDos([...props.todos]);
  }

  return (
  <div className={props.todoDetails.isCompleted?"opacity-70":""}>
    <div className="w-full flex justify-between p-2 bg-pink-300 rounded-3xl border border-slate-50">
      <input type="checkbox" name={props.todoDetails.id} onClick={handleCheckbox} value={props.todoDetails.isCompleted} id="" className="m-1 cursor-pointer"/>
      <div className=" bg-slate-50 font-bold flex items-center flex-grow rounded-l-full pl-5 mr-4">
        <div className={props.todoDetails.isCompleted?"line-through font-thin":""}>
        {props.todo}
        </div>
      </div>
      <div id={props.id} className="flex">
        <div onClick={handleEdit} className="bg-slate-50 cursor-pointer flex-grow p-1 hover:scale-110 transition-all hover:bg-blue-500 hover:text-white ease-in rounded-l-full mr-1  text-red-900">
          Edit
        </div>
        <div onClick={handleDelete} className="bg-slate-50 cursor-pointer hover:bg-red-600 hover:text-white flex-grow p-1 hover:scale-110 transition-all ease-in rounded-r-full text-red-900">
          Delete
        </div>
      </div>
    </div>
    </div>
  );
};

export default ToDo;
