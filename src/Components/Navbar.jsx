import React from 'react';
import { NavLink } from 'react-router';
import usert from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex  items-center justify-between'>
            <div className=''></div>
            <div className='font-medium text-accent'>
                <NavLink className="mr-3" to="/">Home</NavLink>
                <NavLink className="mr-3" to="/about">About</NavLink>
                <NavLink className="mr-3" to="/career">Career</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
                <img className='w-[30px] h-[30px]' src={usert}></img>
                <button className='btn btn-primary px-10 '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;