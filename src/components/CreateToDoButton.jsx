import React from 'react';
import'../styles/CreateToDoButton.css'
import { AppContext } from '../context/AppContext';

function CreateToDoButton(){
    const {changeModal}=React.useContext(AppContext)
    return(
        <button 
        className="CreateTodoButton "        
        onClick={()=>changeModal()}
        >
            Add To-DO
        </button >

    );
}
export{CreateToDoButton};