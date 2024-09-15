import React, { Fragment, useState } from 'react';
import ToDoLists from './ToDoList';

const App = () => {

  const[inputlist,setinputlist] = useState("");
  const[items,setitems] = useState([]);

 const inputevent = (event) => {
  setinputlist(event.target.value);
  }

   const listOfItems = () => {
          setitems((oldval) => {
            return [...oldval,inputlist];
          });
          setinputlist("");

  }

  const deleteItems = (id)=>{
           setitems((oldval) => {
            return oldval.filter((arrElemnt,index) =>{
              return index !== id;
            })
           })  
  }
  
  

  return (
  <Fragment>
    <div className="main_div">
     <div className="center_div">
       <br/>
       <h1>ToDO List</h1>
       <br />
     <input type="text" 
     value={inputlist}
     placeholder="add a item"
     onChange={inputevent}
     />
     <button className="btn" onClick={listOfItems}>+</button>

     <ol>
    

    { items.map( (itemVal,index) =>{
         return <ToDoLists text={itemVal}
         key={index}
         id={index}
         onSelect={deleteItems}
         />
     })}
     
     </ol>
     </div>  
    </div>
    </Fragment>
  )
}

export default App;