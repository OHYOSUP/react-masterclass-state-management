import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDo(value);
//     setToDoError("");
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       setToDoError("To do should be at least 10");
//     } else if (toDo.length > 10) {
//       setToDoError("");
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input value={toDo} onChange={onChange} placeholder="Write to do" />
//       <button type="submit">Add</button>
//       {toDoError !== "" ? toDoError : ""}
//     </form>
//   );
// }

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("FirstName")} placeholder="FirstName" />
        <input {...register("LastName")} placeholder="LastName" />
        <input {...register("userName")} placeholder="userName" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
