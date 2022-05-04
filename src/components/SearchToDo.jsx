import React from 'react';
import'../styles/SearchTodo.css'
import SearchIcon from'../assets/icons8-búsqueda-50.png'
function SearchToDo(){
    return(
        <div className='SearchToDo'>
            <input type="text" placeholder='Search To-DO' />
            <img src={SearchIcon} alt="" />
        </div>                
    );
}
export{SearchToDo}