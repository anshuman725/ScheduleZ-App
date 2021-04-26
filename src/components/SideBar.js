import React, { useContext, useRef,useEffect } from 'react';
import { TodoContext } from '../context';

function SideBar({children})
{
    const sidebarRef=useRef()

    const{setSelectedTodo}=useContext(TodoContext)

    useEffect(() => {
        document.addEventListener('click',handleClick)
        return () => {
        document.removeEventListener('click',handleClick)
            
        }
    })

    const handleClick=(e)=>{
        if(e.target===sidebarRef.current || sidebarRef.current.contains(e.target))
        {
            setSelectedTodo(undefined)
        }
    }

    return(
        <div className="SideBar"
            ref={sidebarRef}
        >
            {children}
        </div>
    )
}

export default SideBar;
