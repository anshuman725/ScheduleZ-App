import React,{useRef} from 'react';

import {useSpring,animated} from 'react-spring';





function Modal({children,showModal,setShowModal})
{
    const modalRef=useRef();
    const modalAnimation=useSpring({
        opacity:showModal?1:0,
        top:showModal?'25%':'0%',
        config:{friction:10}
    })
    
    const closeModal=(e)=>{
        if(e.target===modalRef.current){
            setShowModal(false)
        }
    }
    return(

        showModal&&
        <div onClick={closeModal} ref={modalRef} className="Modal">
            <animated.div style={modalAnimation} className="container">
                {children}
            </animated.div>
        </div>
    )
}

export default Modal;