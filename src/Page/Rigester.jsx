import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";


const Rigester = () => {
    const [show , setShow] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
           Register your account
          </h1>
          <form>
            <fieldset className="fieldset">
                {/* Name */}
              <label className="label font-semibold">Full Name</label>
              <input type="text" className="input  focus:outline-none " placeholder="enter your name" />

              {/* Photo Url */}
              <label className="label font-semibold">Photo URL</label>
              <input type="text" className="input focus:outline-none" placeholder="photo url" />

              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input type="email" className="input focus:outline-none" placeholder="email" />

             <div className="relative ">
                 <label className="label font-semibold">Password</label>
                <input type={show ? "password" : "text"} className="input focus:outline-none" placeholder="password" />
                <div className="absolute right-7 top-8 z-10  cursor-pointer text-md" onClick={() => setShow(!show)}>
                
                {show ? <FaEyeSlash /> :   <FaEye  /> }
               
                </div>
             </div>
              <div>

                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/auth/login"
                >
                 Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rigester;
