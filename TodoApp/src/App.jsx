import CreateTodo from "./components/CreateTodo"
import TodoList from "./components/hooks/showTodo"
import { Task } from "./components/simpleTodo/Task"
import { Todo } from "./components/simpleTodo/Todo";
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {

  return (
  <>
    {/* <CreateTodo /> */}
    <TodoList />
    {/* <Todo /> */}
  </>
  )
}

export default App
