import React from 'react';
import { ToDo } from '../components/ToDo';
import '../styles/ToDoList.css'
import { AppContext } from '../context/AppContext';



function ToDoList(){ 
  const {Todos}=React.useContext(AppContext)     ;   
  function orderByDate(){      
   return(Todos.sort((a, b) => new Date(a.date) - new Date(b.date))) 
  }
return(  
    <div className='ToDoList' > 
    {orderByDate().map((item)=>
      <ToDo info={item} key={item.id}></ToDo>
    )}
      
    </div>
  );
}
export {ToDoList};