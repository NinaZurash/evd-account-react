import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import NotFoundPage from "./pages/not-found.page";
import VerifyEmailPage from "./pages/verify-email.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
        <Route exact path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
