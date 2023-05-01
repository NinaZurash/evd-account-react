export default function FormHeader({ title, subTitle }) {
  return (
    <h2 className="text-4xl mb-4 text-center font-bold text-blue-600">
      {title}
      <br />
      <span className="text-gray-600 font-medium text-base">{subTitle}</span>
    </h2>
  );
}
