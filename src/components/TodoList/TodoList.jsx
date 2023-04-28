import {useEffect, useState} from "react";
import Popup from "./Popup/Popup";

export default function TodoList({todo, setTodo}) {
    function deleteTodo(id) {
        let newTodo = todo.filter(item => id !== item.id)
        setTodo(newTodo);
    }

    function statusTodo(id) {
        let newTodo = todo.map(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)

    }

    let [edit, setEdit] = useState(null)
    let [value, setValue] = useState('')

    function editTodo(id) {
        let newTodo = todo.map(item => {
            if (item.id === id) {
                setValue(item.title)
                return ({
                        ...item,
                        title: value
                    }
                )
            }

            return item;
        })
        setTodo(newTodo)
        setEdit(id)

    }

    useEffect(() => {
        if (edit !== null) {

        }
    }, [edit])

    function saveTodo(id) {
        let newTodo = todo.map(item => {
                if (item.id === id) {
                    return (
                        {
                            ...item,
                            title: value
                        }
                    )
                }
                return item
            }
        )
        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div>
            {
                todo.map(item =>
                    <div key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                        <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                        <button onClick={() => saveTodo(item.id)}>Save</button>
                                    <Popup/>
                                </div>

                                :
                                <div>
                                    <h3>{item.title}</h3>
                                    <h3>{(item.status).toString()}</h3>
                                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                                    <button onClick={() => statusTodo(item.id)}>Open / Close</button>
                                    <button onClick={() => editTodo(item.id)}>Edit</button>
                                </div>
                        }
                    </div>
                )
            }
        </div>
    );
}