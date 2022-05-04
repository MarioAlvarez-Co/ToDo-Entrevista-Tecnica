import React from 'react';
import '../styles/ToDo.css'
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
function ToDo({info})
{
    const {deleteTodo}=React.useContext(AppContext)     ;
   
    return(
        
        <div className={`ToDo ${info.importance && 'importante'}`}>
            <button onClick={()=>{deleteTodo(info)}}></button>
            <Link to={`/details-To-Do/${info.id}`}>
         <p className='info-campo' >{ info.importance&&"importante"}</p>
         <h2>{info.title}</h2>
         <p className='info-campo'>Fecha de finalización:</p>
         <p>{info.date}</p>   
         <p className='info-campo'>Descripcion:</p>
         <p>{info.description}</p>
         <figure>
             <img src={info.dogImage} alt="" />
         </figure>
         </Link>
      </div>
        
        
    );
}

export {ToDo}