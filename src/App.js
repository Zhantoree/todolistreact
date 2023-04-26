import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <div className="App">
            <Header/>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}

export default App;
