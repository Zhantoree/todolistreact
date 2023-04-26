import {useState} from "react";
import { v1 as uuid } from 'uuid';

export default function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')
    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: 'true'
            }]
        )
        setValue('')
    }

    return(
        <div>
            <input value={value} placeholder={"Type task"} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={saveTodo}>Save</button>
            {
                console.log(todo)
            }
        </div>

    );

}