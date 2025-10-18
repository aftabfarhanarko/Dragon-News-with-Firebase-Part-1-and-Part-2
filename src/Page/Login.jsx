import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContex";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Login = () => {
  const [show, setShow] = useState(false);
  const {loginUser} = useContext(AuthContext);

  const handelLogin = (e) => {
     e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    loginUser(email, password)
    .then(result => {
        console.log(result.user);
         toast.success("Login Success");
    }).catch(err => {
        console.log(err.message);
        MySwal.fire({
          title: "Error!",
          text:err.message,
          icon: "error",
        });
    })
  } 
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Login your account
          </h1>
          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              <label className="label font-semibold">Email address</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <div className="relative ">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "password" : "text"}
                  className="input focus:outline-none"
                  placeholder="password"
                  name="password"
                />
                <div
                  className="absolute right-7 top-8 z-10  cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submite" className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/auth/rigster"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
