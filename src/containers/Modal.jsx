import React from 'react';
import ReactDom from'react-dom'
import { AppContext } from '../context/AppContext';
import '../styles/Modal.css'
function Modal({children}){
    const {changeModal}=React.useContext(AppContext)
    

    return ReactDom.createPortal(
        

            <div className='Modal'>           
            <div className='Modal-content'>
                <span onClick={()=>{changeModal()}}>X</span>
                {children}               
            </div>                             
    </div>
            
        ,
    document.getElementById('modal')
    );
}

export {Modal};