import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContex";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Rigester = () => {
  const [show, setShow] = useState(false);

  const { creatUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({name, photo, email, password});
    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Register Success");
      })
      .catch((err) => {
        console.log(err.message);
        MySwal.fire({
          title: "Error!",
          text:err.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Register your account
          </h1>
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="input  focus:outline-none "
                placeholder="enter your name"
                required
              />

              {/* Photo Url */}
              <label className="label font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input focus:outline-none"
                placeholder="photo url"
                required
              />

              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="email"
                required
              />

              <div className="relative ">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input focus:outline-none"
                  placeholder="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-10  cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500 hover:underline" to="/auth/login">
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
