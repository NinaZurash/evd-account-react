import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VerifyEmail from "../components/verify-email";

export default function VerifyEmailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.count("hit");
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    const verifyEmail = async () => {
      try {
        if (!requestSent) {
          setIsLoading(true);
          setRequestSent(true);
          const response = await fetch(
            `${import.meta.env.VITE_VERIFY_EMAIL}/verify-email?token=${token}`
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Verification response:", data);
            setIsVerified(true);
            setIsLoading(false);
            // Handle the successful verification response
          } else {
            setIsVerified(false);
            setIsLoading(false);
            throw new Error("Error in the server response.");
          }
        }
      } catch (error) {
        console.error("Error:", error.message);
        setIsVerified(false);
        setIsLoading(false);
        // Handle the error, e.g., display an error message to the user
      }
    };

    if (token) {
      verifyEmail();
    } else {
      console.error("Token not found in URL.");
      // Handle the error, e.g., display an error message to the user
    }
  }, []);

  return <VerifyEmail isLoading={isLoading} isVerified={isVerified} />;
}
