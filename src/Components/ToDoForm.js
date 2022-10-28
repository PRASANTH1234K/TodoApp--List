import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput==="")
        {
            alert("please enter the task")
        }
        else{
        addTask(userInput);
        setUserInput("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." className='inputvalue'/>
            <button className='add'>Add</button>
        </form>
    );
};

export default ToDoForm;