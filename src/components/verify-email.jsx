import Loading from "./loading";

export default function VerifyEmail({ isLoading, isVerified }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex justifycenter flex-col items-center gap-4">
      {isLoading && <h1>Please wait while we are verifying</h1>}
      {isLoading && <Loading />}
      {isLoading ? null : isVerified ? (
        <h1>Email is verified! Please click here to go to app</h1>
      ) : (
        <h1>We can not verify your email :( please try again</h1>
      )}
    </div>
  );
}
