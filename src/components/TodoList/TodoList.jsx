import {useState} from "react";

export default function TodoList({todo, setTodo}) {
    function deleteTodo(id) {
        let newTodo = todo.filter(item => id!== item.id)
        setTodo(newTodo);
    }
    function changeTodo(id) {
        let newTodo = todo.map(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
        console.log(todo)
    }
    let [edit, setEdit] = useState(null)
    function editTodo(id) {
        let newTodo = todo.filter(item => {
            if(item.id === id) {

            }
        })
    }

    return (
        <div>
            {
                todo.map(item =>
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        {
                            edit === item.id :
                            input

                        }


                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        <button onClick={() => changeTodo(item.id)}>Open / Close</button>
                        <button onClick={() => editTodo(item.id)}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}