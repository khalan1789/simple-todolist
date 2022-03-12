import "./App.css"
import TaskRemaining from "./components/taskRemaining"
import TaskForm from "./components/taskForm"
import TaskList from "./components/taskList"
import { Provider } from "react-redux"
import { store } from "./redux/redux"

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <section>
                    <header className="App-header">
                        <TaskRemaining />
                    </header>
                    <TaskList />
                    <footer>
                        <TaskForm />
                    </footer>
                </section>
            </Provider>
        </div>
    )
}

export default App
