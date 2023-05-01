import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../input.component";
import FormFooter from "../form-footer.component";
import FormHeader from "../form-header.component";
import ErrorMessage from "../error-message.component";

import { SignUpSchema } from "../../../../validate/sign-up.validate";

export default function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = async (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
    };

    const resp = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await resp.json();
    console.log(result);
    if (result.response.ok) {
      console.log("hi");
    }

    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  };

  const { firstName, lastName, password, confirmPassword, email } = errors;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 flex gap-4 flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader title="Create An Account" subTitle="Sign up to continue" />
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <Input
              id="firstName"
              register={register("firstName")}
              title="First Name"
              type="text"
              placeholder="First Name"
              autoComplete="true"
              errorMsg={firstName?.message}
              isDirty={dirtyFields.firstName}
            />
            <ErrorMessage message={firstName?.message} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              id="lastName"
              register={register("lastName")}
              title="Last Name"
              type="text"
              placeholder="Last Name"
              autoComplete="true"
              errorMsg={lastName?.message}
              isDirty={dirtyFields.lastName}
            />
            <ErrorMessage message={lastName?.message} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <Input
              id="email"
              register={register("email")}
              title="Email"
              type="text"
              placeholder="example@example.com"
              autoComplete="true"
              errorMsg={errors.email?.message}
              isDirty={dirtyFields.email}
            />
            <ErrorMessage message={email?.message} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <Input
              id="password"
              register={register("password")}
              title="password"
              type="password"
              placeholder="Password"
              autoComplete="true"
              errorMsg={errors.password?.message}
              isDirty={dirtyFields.password}
            />
            <ErrorMessage message={password?.message} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 ">
            <Input
              id="confirmPassword"
              register={register("confirmPassword")}
              title="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              autoComplete="true"
              errorMsg={errors.confirmPassword?.message}
              isDirty={dirtyFields.confirmPassword}
            />
            <ErrorMessage message={confirmPassword?.message} />
          </div>
        </div>
        <FormFooter
          footerTitle="Already have an account?"
          footerButtonLabel="Sign in"
          onClickHandler={props.onClickHandler}
          submitButtonLabel="Sign Up"
          onSubmitHandler={() => {}}
        />
      </form>
    </div>
  );
}
