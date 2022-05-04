import React from 'react';
import'../styles/Header.css'    

import {Link} from 'react-router-dom'
function Header(){
    return(
        <nav className='Header'>
            <Link to="/ToDo-Entrevista-Tecnica"> <h1>To-Dog App</h1>   </Link>
              
            
            <span>User</span>   
           
         </nav>
    );
    
}

export {Header};