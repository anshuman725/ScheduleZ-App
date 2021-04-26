import React,{useRef} from 'react';


function Modal({children,showModal,setShowModal})
{
    const modalRef=useRef();
    const closeModal=(e)=>{
        if(e.target===modalRef.current){
            setShowModal(false)
        }
    }
    return(

        showModal&&
        <div onClick={closeModal} ref={modalRef} className="Modal">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Modal;