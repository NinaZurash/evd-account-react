export default function Button({ title, type, onClickHandler, className }) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto ${className}`}
    >
      {title}
    </button>
  );
}
