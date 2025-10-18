import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import usert from '../assets/user.png';
import { AuthContext } from '../provider/AuthContex';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user , usersignOuts} = useContext(AuthContext);

    const signOutUser = () => {
         usersignOuts()
          toast.success("LogOut Success");
    }
    return (
        <div className='flex  items-center justify-between'>
            <div className=''>
                {/* {user.email} */}
                {user && user.email}
            </div>
            <div className='font-medium text-accent'>
                <NavLink className="mr-3" to="/">Home</NavLink>
                <NavLink className="mr-3" to="/about">About</NavLink>
                <NavLink className="mr-3" to="/career">Career</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
              { user &&   <img className='w-[40px] h-[40px]' src={usert}></img>}

               {
                user ? <button onClick={signOutUser} className='btn btn-primary px-10 '>LogOut</button> 
                : <Link to="/auth/login" className='btn btn-primary px-10 '> Login</Link>
               }
            </div>
        </div>
    );
};

export default Navbar;