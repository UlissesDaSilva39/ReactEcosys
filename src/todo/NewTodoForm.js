import React, {useState} from 'react';
import './NewTodoForm.css'
 

const NewTodoForm = () => {
    const [inputValue, setValue] = useState("");

    return (
 <div>
    <input className="new-todo-input" type="text"
    placeholder="Type your new value here"
    value={inputValue}
    onChange={e => setInputValue(e,target.value)} />
    <button className="new-todo-button">Create TODO</button>
 </div>
    );

);

export default NewTodoForm;