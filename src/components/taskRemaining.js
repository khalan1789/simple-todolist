import { useSelector } from "react-redux"

export default function TaskRemaining() {
    const taskRemaining = useSelector((state) => state.todoList.length)
    return taskRemaining === 0 ? (
        <div>
            <p>Aucune tâche pour le moment</p>
        </div>
    ) : 1 ? (
        <div>
            <p>Tâche restante à faire : {taskRemaining}</p>
        </div>
    ) : (
        <div>
            <p>Tâches restantes à faire : {taskRemaining}</p>
        </div>
    )
}
