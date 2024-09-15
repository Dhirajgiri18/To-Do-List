import React, { Fragment } from 'react'

const ToDoLists = (props) => {

   
    return  (
        <Fragment>

        <div className="todo_style">
        <button className="btx" onClick={()=>{
            props.onSelect(props.id)
        }}>*</button>
        <li> {props.text}</li> 
        </div>
        

        </Fragment>
    );
}

export default ToDoLists;