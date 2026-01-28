import React, { useRef, useState } from "react";
import Header from "./Header";
import { SIGN_IN_BG } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={SIGN_IN_BG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-9/12  md:w-4/12 absolute p-12 bg-black/80 items-center my-24 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full border border-neutral-400 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full border border-neutral-400 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full border border-neutral-400 rounded-md"
        />
        <p className="text-red-500 text-xs py-2">{errormessage}</p>
        <button
          className="p-2 my-2 bg-red-600 w-full rounded-md font-medium cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-2 text-center text-neutral-400">OR</p>
        <button className="p-2 my-2 bg-neutral-500/50 w-full rounded-md font-medium cursor-pointer">
          Use a sign-in code
        </button>
        {isSignInForm && (
          <p className=" py-2 underline text-center cursor-pointer text-white hover:underline hover:text-neutral-400">
            Forgot Password?
          </p>
        )}

        {isSignInForm ? (
          <p className="py-2 text-neutral-400">
            New to Netflix?
            <span
              className="text-white hover:underline font-medium hover:cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="py-2 text-neutral-400">
            Already registered?
            <span
              className="text-white hover:underline font-medium hover:cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign In Now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
