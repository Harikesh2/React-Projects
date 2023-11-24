import { createContext, Provider, useContext } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "todo Msg",
            completed: false,
        },
    ],
    addTodo: (todo)=>{},
    updatedTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
}) 
    

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider
