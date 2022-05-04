import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { AppContext } from '../context/AppContext';
import '../styles/App.css';
import {useInitialState} from '../hooks/useInitialState';
import { Home } from '../pages/Home';
import { ToDoDetails } from '../pages/TodoDetails';
function App() {
  const initialState=useInitialState();    
  return (
  <AppContext.Provider value={initialState}>
    
    
    <BrowserRouter>
    <Header/>  
      <Routes>
        <Route path="/ToDo-Entrevista-Tecnica" element={<Home/>}/>
        <Route path='/details-To-Do/:id' element={<ToDoDetails/>}/>
      </Routes>
    </BrowserRouter>             
  </AppContext.Provider> 
  );
}

export default App;
