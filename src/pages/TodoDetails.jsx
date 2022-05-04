import React from 'react';
import { useParams } from 'react-router-dom';
import {AppContext} from '../context/AppContext'
import '../styles/TodoDetails.css'
function ToDoDetails(){
    const {Todos}=React.useContext(AppContext)     ;
    const info=Todos.find((item)=>item.id===useParams().id);
    console.log(info)
    return(
        <div className={`ToDoDetails ${info.importance && "importante"}`} >
            <div className='info'>
             <p className='info-campo' >{ info.importance&&"importante"}</p>
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