import React from 'react';
import { useGetImageDogs } from '../hooks/useGetImageDosgs';
import'../styles/CreateToDoForm.css'
import { AppContext } from '../context/AppContext';
import uuid from 'react-uuid';

function CreateToDoForm(){
    const {changeModal,Todos,saveTodos}=React.useContext(AppContext)
    
    const myFormToDo=React.useRef(null);
    const date=new Date();
    const today=`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
    const RandomDogImage=useGetImageDogs();
    
    const handleSubmit=()=>{        
        const formData=new FormData(myFormToDo.current);
        const data={
            title:formData.get('title'),
            creationDate:date.toLocaleDateString(),
            date:formData.get('fecha'),
            description:formData.get('descripcion'),
            importance:!formData.get('importancia')?false:true,
            id:uuid(),
            dogImage:RandomDogImage
        }
        
        saveTodos([...Todos,data]) ;
        changeModal();
    }
    
    return(        
        <div className='CreateTodoForm' required>
            <form action="/" className='FormToDo' ref={myFormToDo}>
                <label htmlFor="title">Titulo</label>
                <input type="text" name="title" required/>   
                <label htmlFor="fecha">Fecha</label>                         
                <input type="date" name="fecha" min={today} required/>
                <label htmlFor="descripcion">Descripcion</label>                
                <input type="textarea" name="descripcion" />
                <label htmlFor="importancia">Esta Tarea Es Importante ?</label>                
                <input type="checkbox" name="importancia" />
                <input type="submit" value="Crear To-Do" onClick={()=>{handleSubmit() }} />
            </form>          
        </div>            
    );
}
export {CreateToDoForm};
