import { useState } from "react";

import SignIn from "./sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component";

export default function Form() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <>
      {showSignIn ? (
        <SignIn onClickHandler={() => setShowSignIn(false)} />
      ) : (
        <SignUp onClickHandler={() => setShowSignIn(false)} />
      )}
    </>
  );
}
