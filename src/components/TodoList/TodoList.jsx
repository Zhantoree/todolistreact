import {useState} from "react";

export default function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState()
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item=> {
            if(item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null)
    }
    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        {
                            edit===item.id ?
                                <div>
                                    <input value={value} onChange={(e)=> setValue(e.target.value)} />
                                </div>
                                :
                                <h4>{item.title}</h4>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <button onClick={() => saveTodo(item.id)}>Save</button>
                                </div> :
                                <div>
                                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                                    <button onClick={() => editTodo(item.id, item.title)}>Edit</button>
                                    <button onClick={() => statusTodo(item.id)}>Close</button>
                                </div>
                        }



                    </div>
                ))
            }
        </div>
    );
}