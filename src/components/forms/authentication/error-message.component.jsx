export default function ErrorMessage({ message }) {
  return <>{message && <p className="min-h-2 text-red-500 text-xs">{message}</p>}</>;
}
