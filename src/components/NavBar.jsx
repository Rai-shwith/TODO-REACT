import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-blue-100 p-3 justify-between mx-2 rounded-full mt-2'>
      <h1 className="text-lg font-bold bg-slate-300 p-2 rounded-xl cursor-none hover:flex-grow transition-all ease-in-out duration-500 text-center">TO DO</h1>
      <div className="flex w-1/4 justify-evenly">
        <h2 className="hover:scale-110 transition-transform ease-in cursor-pointer bg-slate-300 p-2 rounded-xl">Home</h2>
        <h2 className="hover:scale-110 transition-transform ease-in cursor-pointer bg-slate-300 p-2 rounded-xl">Tasks</h2>
      </div>
    </div>
  )
}

export default NavBar