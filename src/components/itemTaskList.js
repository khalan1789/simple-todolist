import "../App.css"
import { useDispatch } from "react-redux"
import { toggleTask, deleteTask } from "../redux/redux"

export default function ItemTaskList(props) {
    const { task } = props

    const dispatch = useDispatch()

    return (
        <div className="task-item">
            <input
                type="checkbox"
                value={task.done}
                onClick={() => dispatch(toggleTask(task.id))}
            />
            <p>{task.text}</p>
            <span onClick={() => dispatch(deleteTask(task.id))}>X</span>
        </div>
    )
}

// ici il faut deux fonctionnalités : le check et le delete
