import React from 'react';
import { useLocalStorage } from './useLocalStorage';

 const initialState={
    
    modal:false,     
 } 
 
 function useInitialState(){               
    const [state,setState]=React.useState(initialState);
    const [Todos,saveTodos]=useLocalStorage();
          
    function changeModal(){        
        setState({...state,
            modal:!state.modal
        })    
    } 
    function deleteTodo(deleteToDo){
        
       const newLisTodos= Todos.filter((item) => item !== deleteToDo)
        saveTodos(newLisTodos)
    }      
    return{state,changeModal,setState,Todos,saveTodos,deleteTodo};    
 }
 
 export {useInitialState};