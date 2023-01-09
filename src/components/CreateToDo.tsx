import React from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
    setToDos((prev) => [
      // category의 옵션들을 정해줘야하니 atom.tsx에 가서
      // categoryState<"To_do" | "Doing" | "Done">처럼 범위를 정해줘야 한다
      { text: toDo, id: Date.now(), category },
      ...prev,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "please write todo list",
        })}
        placeholder="write todo list"
      ></input>
      <button type="submit">submit</button>
    </form>
  );
}

export default CreateToDo;
