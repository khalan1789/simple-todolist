import { useSelector } from "react-redux"
import ItemTaskList from "./itemTaskList"

export default function TaskList() {
    // on récupère le tableau des tâches
    const taskList = useSelector((state) => state.todoList)
    return (
        <div className="list">
            {taskList.map((listItem) => {
                // on utilise le composant item pour chaque tour de boucle auquel on passe la tâche et son id en props
                return <ItemTaskList key={listItem.id} task={listItem} />
            })}
        </div>
    )
}
