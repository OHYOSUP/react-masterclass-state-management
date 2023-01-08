import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  FirstName: string;
  LastName: string;
  userName: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<IForm>({
    defaultValues: { email: "@naver.com" },
  });
  //react-hook-form이 모든 validation을 마쳤을 때만 호출된다.

  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        "Password1",
        {
          message: "Password is not the same as Password",
        },
        { shouldFocus: true }
      );
      setError("extraError", { message: "Server Offline" });
    }
  };

  console.log(errors)

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com is allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("FirstName", { required: "write here", validate:{
            noNico: (value) => value.includes("nico") ? "no nico allowed" : true
          } })}
          placeholder="FirstName"
        />
        <span>{errors?.FirstName?.message as string}</span>

        <input
          {...register("LastName", { required: "write here" })}
          placeholder="LastName"
        />
        <span>{errors?.LastName?.message as string}</span>

        <input
          {...register("userName", { required: "write here", minLength: 10 })}
          placeholder="userName"
        />
        <span>{errors?.userName?.message as string}</span>

        <input
          {...register("Password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message as string}</span>

        <input
          {...register("Password1", {
            required: "write here",
            minLength: {
              value: 5,
              message: "Password is too shot",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.Password1?.message as string}</span>

        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;
