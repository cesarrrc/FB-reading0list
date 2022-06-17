import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password, displayName) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          updateProfile(res.user, {displayName})
          console.log("user signed up:", res.user);
      })
      .catch((err) => {
        console.log({err})
        console.log(err.code)
        setError(err.code);
      });
  };
  return { error, signup };
};
