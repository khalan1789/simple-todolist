import "./App.css"
import TaskRemaining from "./components/taskRemaining"
import TaskForm from "./components/taskForm"
import TaskList from "./components/taskList"
import { Provider } from "react-redux"
import { store } from "./redux/redux"
import Presentation from "./components/Presentation"

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <Presentation />
                </header>
                <div className="container">
                    <TaskRemaining />
                    <TaskList />
                    <TaskForm />
                </div>
            </Provider>
        </div>
    )
}

export default App
