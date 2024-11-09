import React from 'react'

const ToDoContainer = ({children}) => {
  return (
    <div className="flex flex-col space-y-5 p-6 w-4/5 self-center my-5 rounded-3xl flex-grow bg-purple-300 overflow-y-auto">
      {children}
      </div>
  )
}

export default ToDoContainer