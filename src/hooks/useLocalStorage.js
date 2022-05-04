import React from 'react';

function useLocalStorage() {
  
    const localStorageItem = localStorage.getItem("LIST_TODOS_V1");
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem("LIST_TODOS_V1", JSON.stringify([]));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
  
    const [listToDos, setListToDos] = React.useState(parsedItem);
    const saveToDos = (newListToDos) => {
          
        const stringifiedItem = JSON.stringify(newListToDos);
        localStorage.setItem("LIST_TODOS_V1", stringifiedItem);
        setListToDos(JSON.parse(localStorage.getItem("LIST_TODOS_V1")));
        
    };
  
    return [
        listToDos,
        saveToDos
    ];
  }

export{useLocalStorage};