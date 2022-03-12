import { createSlice, configureStore } from "@reduxjs/toolkit"

const todoListSlice = createSlice({
    name: "todoList",
    initialState: [
        // on initialise le state avec un tableau vide car pour l'instant on a aucune tâche
    ],
    reducers: {
        addTaskToList: (state, action) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload,
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload)
            task.done = !task.done
        },
        deleteTask: (state, action) => {
            state = state.filter((t) => t.id !== action.payload)
            return state
        },
    },
})

export const { addTaskToList, toggleTask, deleteTask } = todoListSlice.actions

export const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
    },
})
