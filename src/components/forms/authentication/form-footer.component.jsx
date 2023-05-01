import Button from "../../button/button.component";

export default function FormFooter({
  footerTitle,
  footerButtonLabel,
  onSubmitHandler,
  submitButtonLabel,
  onClickHandler,
}) {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center mb-3">
      <div className="flex gap-2 items-center">
        <span className="text-gray-600"> {footerTitle}</span>
        <button
          onClick={onClickHandler}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          {footerButtonLabel}
        </button>
      </div>
      <div className="flex justify-center w-full md:w-auto">
        <Button
          className="w-full md:w-auto"
          title={submitButtonLabel}
          onClick={onSubmitHandler}
          type="submit"
        />
      </div>
    </div>
  );
}
