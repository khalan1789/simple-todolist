import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTaskToList } from "../redux/redux"

export default function TaskForm() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const submitTask = (e) => {
        e.preventDefault()
        dispatch(addTaskToList(text))
        setText("")
    }
    return (
        <form onSubmit={submitTask}>
            <input
                type="text "
                placeholder="Ajouter une nouvelle tâche"
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button type="submit">Ajouter aux tâches</button>
        </form>
    )
}
