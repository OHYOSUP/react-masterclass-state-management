import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { toDoSelector, categoryState, Categories } from "./components/atoms";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function TodoList() {
  // atoms의 toDoSelector에서 가져와서 output을 변경하는 방법
  // toDoSelector의 get함수에서 return해준 그대로 todo, doing, done을 배열로 설정하고 그 배열을 useRecoilValue로 가져와서 뿌려준다
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <select onInput={onInput} value={category}>
        <option value={Categories.To_do}>To do</option>
        <option value={Categories.Doing}>Doing</option>
        <option value={Categories.Done}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </>
  );
}

export default TodoList;
