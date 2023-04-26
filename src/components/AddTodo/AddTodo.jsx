import {useState} from "react";

export default function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState('')



    function addTodo() {
        let newTodo = [...todo, {
            id: Date.now(),
            title: value,
            status: true
        }]
        setTodo(newTodo)
    }
    return (
        <div>
            <input onChange={(e)=>setValue(e.target.value)} placeholder={"Type here"}/>
            <button onClick={() => addTodo()}>Save</button>
        </div>
    );


}