export default function Input({ id, type, placeholder, register, title, isDirty, errorMsg }) {
  const inputState = !isDirty
    ? "border-gray-500"
    : isDirty && errorMsg
    ? "border-red-500"
    : "border-green-500";

  const darkBg = isDirty ? "" : "bg-gray-200";

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {title}
      </label>
      <input
        required
        id={id}
        className={`appearance-none block w-full text-gray-700 border ${inputState} ${darkBg} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
}
