import React from 'react';
import { CreateToDoButton } from '../components/CreateToDoButton';
import { CreateToDoForm } from '../components/CreateToDoForm';

import { Modal } from '../containers/Modal';
import { AppContext } from '../context/AppContext';
import {ToDoList} from '../containers/ToDoList';
import '../styles/App.css';
import {useInitialState} from '../hooks/useInitialState';

function Home(){
    
    
      const initialState=useInitialState();    
      return (
      <AppContext.Provider value={initialState}>     
      <>
      <CreateToDoButton />                       
        <ToDoList/>
        {initialState.state.modal&&
          <Modal>
            <CreateToDoForm/>
          </Modal>
        }             
      </>
        
      </AppContext.Provider> 
      );
    
}

export {Home}