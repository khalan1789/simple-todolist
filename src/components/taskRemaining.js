import { useSelector } from "react-redux"

export default function TaskRemaining() {
    // on récupère le tableau des tâches
    const totalTasks = useSelector((state) => state.todoList)
    // on utilise filter pour créer un nouveau tableau de celles non faites et les compter
    const taskRemaining = totalTasks.filter(
        (state) => state.done === false
    ).length

    return taskRemaining === 0 ? (
        <div>
            <p>Aucune tâche pour le moment</p>
        </div>
    ) : taskRemaining === 1 ? (
        <div>
            <p>Tâche restante à faire : {taskRemaining}</p>
        </div>
    ) : (
        <div>
            <p>Tâches restantes à faire : {taskRemaining}</p>
        </div>
    )
}
