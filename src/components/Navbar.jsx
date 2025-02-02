import React from 'react'

const Navbar = () => {
  return (
<nav className="flex justify-between bg-violet-300 text-black py-3">
    <div className="logo text-xl font-bold mx-9">
        <span>ZenTask</span>
    </div>
    <ul className="flex gap-10 mx-10">
        <li className=" cursor-pointer">Home</li>
        <li className=" cursor-pointer">Yours Tasks</li>
    </ul>
</nav>
  )
}

export default Navbar
