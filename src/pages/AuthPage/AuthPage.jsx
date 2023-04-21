import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <style>{`body { background-image: url(https://res.cloudinary.com/diw7vmgum/image/upload/v1682022824/background_qag50w.gif); }`}</style>
      <section className="flex flex-col pr-20">
        <div className="flex items-center justify-even">
          <img
            className="h-10"
            src="https://res-console.cloudinary.com/diw7vmgum/thumbnails/v1/image/upload/v1682013182/bG9nb19kM3FwZjU=/preview"
          />
          &nbsp; &nbsp;
          <h1 className="font-display animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Level Up Lounge
          </h1>
        </div>
        <h2 className="flex justify-center m-10 text-white text-xl">
          Level up your gaming experience
        </h2>
      </section>
      <div>
        {show ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <p className={`flex justify-center text-white ${show ? "hidden" : ""}`}>
          Don't have an account yet?{" "}
          <a className="cursor-pointer" onClick={() => setShow(true)}>
            <span className=" pl-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 hover:text-purple-800">
              Sign Up
            </span>
          </a>
        </p>
        <div className="flex justify-center">
          {show && (
            <p className="text-white">
              Already have an account?{" "}
              <a className="cursor-pointer" onClick={() => setShow(false)}>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 hover:text-purple-800">
                  Login{" "}
                </span>
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
