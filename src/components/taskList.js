import { useSelector } from "react-redux"
import ItemTaskList from "./itemTaskList"

export default function TaskList() {
    const taskList = useSelector((state) => state.todoList)
    return (
        <div>
            {taskList.map((listItem) => {
                return <ItemTaskList key={listItem.id} task={listItem} />
                // return <p>{listItem.text}</p>
            })}
        </div>
    )
}
