import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
})

type categories = "To_do" | "Doing" | "Done"

export enum Categories {
  "To_do" = "To_do",
  "Doing" = "Doing",
  "Done" = "Done"
}

export interface IToDo {
  text: string;
  id?: number;
  category: Categories;
  
}



export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.To_do,
  
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom] as any
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(todo => todo.category === category)
  },
});
