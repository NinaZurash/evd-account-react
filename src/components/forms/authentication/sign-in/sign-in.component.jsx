import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../input.component";
import FormFooter from "../form-footer.component";
import FormHeader from "../form-header.component";
import ErrorMessage from "../error-message.component";

import { SignInSchema } from "../../../../validate/sign-in.validate";
// import { useState } from "react";

export default function SignIn(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = () => {
    console.log(errors);
  };

  const { email, password } = errors;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader title="Welcome back!" subTitle="Sign in to continue" />
        <div className="flex flex-wrap -mx-3 mb-6">
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
        <div className="flex flex-wrap -mx-3 mb-3">
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

        <FormFooter
          footerTitle="Don't have an account?"
          footerButtonLabel="Sign up"
          onClickHandler={props.onClickHandler}
          submitButtonLabel="Sign In"
          onSubmitHandler={() => {}}
        />
      </form>
    </div>
  );
}
