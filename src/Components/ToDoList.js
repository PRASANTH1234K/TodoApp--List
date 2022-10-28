import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='bigdiv'>
            {toDoList.map(todo => {
                return (
                    
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    
                )
            })}
            <button onClick={handleFilter} className="clearbutton">Clear Completed Tasks</button>
        </div>
    );
};
export default ToDoList;