import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    
    setToDos((oldToDos) =>{
      const targetIndex = oldToDos.findIndex((todo)=> todo.id === id)
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text, id, category:name as any};
      
      return [...oldToDos.slice(0,targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)]
    })
  };


    const onDelete = (e: React.MouseEvent<HTMLButtonElement>)=>{
      
      setToDos(prev=>{
        const targetIndex = prev.findIndex(todo=> todo.id === id)
        const oldToDos = prev[targetIndex]
        return[...prev.slice(0, targetIndex), ...prev.slice(targetIndex+1)]

      })
    }
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.Doing && (
        <button name={Categories.Doing} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.To_do && (
        <button name={Categories.To_do} onClick={onClick}>
          To do
        </button>
      )}
      {category !== Categories.Done && (
        <button name={Categories.Done} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick = {onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;
