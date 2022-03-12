import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTaskToList } from "../redux/redux"

export default function TaskForm() {
    // on utilise use state pour gérer le changement de state propre au composant
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    // on envoie la tâche au store avec dispatch et le state text propre au composant
    const submitTask = (e) => {
        e.preventDefault()
        dispatch(addTaskToList(text))
        setText(" ")
    }
    return (
        <form className="form" onSubmit={submitTask}>
            <input
                type="text "
                placeholder="Ajouter une nouvelle tâche"
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button type="submit">Ajouter aux tâches</button>
        </form>
    )
}
