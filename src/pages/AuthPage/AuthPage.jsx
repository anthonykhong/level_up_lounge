import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <button onClick={() => setShow(!show)}>
        {show ? "Login" : "Sign Up"}
      </button>
    </>
  );
}
