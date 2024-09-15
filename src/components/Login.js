import { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { bgLogo } from "../utils/constant";

const Login = () => {
  const [IsSignIn, setIssignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIssignIn(!IsSignIn);
  };
  const HandleButtonClick = () => {
    //validate first
    const message = checkvalidate(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;
    //else sign in or sigm up
    if (!IsSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          //user is registered after sign up and "user==1" is present there and we acn acces user data by "userCredential.user"
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //user is registered after sign up and "user==1" is present there and we acn acces user data by "userCredential.user"
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute h-screen object-cover md: ">
        <img
          className="h-screen object-cover md:h-auto"
          src={bgLogo}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-screen md:w-1/5 h-2/3 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-md"
      >
        <h1 className="font-bold text-3xl my-3 mx-auto right-0 left-0">
          {IsSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-1 w-full mx-auto bg-gray-800 rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-3 m-2 w-full  mx-auto bg-gray-800 rounded-md"
        />

        <input
          ref={password}
          type="passwor"
          placeholder="Password"
          className="p-3 m-1 w-full mx-auto bg-gray-800 rounded-md"
        />
        <p className="text-red-600 text-xs">
          Include*Uppercase,Lowercase,Numbers,Special character(min 8 digits)*
        </p>

        <p className="text-red-700 font-bold text-lg">{errorMessage}</p>

        <button
          className="p-2 m-5 bg-red-700 w-full mx-auto right-0 left-0 rounded-lg"
          onClick={HandleButtonClick}
        >
          {IsSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {IsSignIn
            ? " New to Netflix? Sign up"
            : " Already Registered Sign In"}{" "}
          Now
        </p>

        {IsSignIn && <p className="p-3 m-1 text-center">Forgot Password?</p>}
      </form>
    </div>
  );
};

export default Login;
