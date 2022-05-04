import React from 'react';
import { useParams } from 'react-router-dom';
import {AppContext} from '../context/AppContext'
import '../styles/TodoDetails.css'
function ToDoDetails(){
    const {Todos}=React.useContext(AppContext)     ;
    const info=Todos.find((item)=>item.id===useParams().id);
    
    return(
        <div className={`ToDoDetails `} >
            <div className='info'>
             <p className='info-campo'></p>
             <h2>{info.title}</h2>
             <p className='info-campo'>Fecha de Creacion:</p>
             <p>{info.creationDate}</p>   
             <p className='info-campo'>Fecha de finalización:</p>
             <p>{info.date}</p>   
             <p className='info-campo'>Descripcion:</p>
             <p>{info.description}</p>
            </div>
         
         <figure>
             <img src={info.dogImage} alt="" />
         </figure>
        </div>
    )
}

export{ToDoDetails} ;