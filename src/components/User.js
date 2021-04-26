import React from 'react';
import logo from '../images/list.svg';

function User()
{
    return(
        <div className="User">
            <div className="logo">
                <img height='35px'  src={logo} alt="logo"/>
            </div>
            <div className='info'>
                <p>John</p>
                <a href='#'>Logout!</a>
            </div>
        </div>
    )
}

export default User;
