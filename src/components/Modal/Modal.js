import React from "react";
import "./Modal.css";
//import Card from "../Card";
  
const Modal = ({ show, modalText }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}> 
        <section className='card'>    
            <h3>{modalText}</h3>
        </section>
      </div>
    );
  };

export default Modal;