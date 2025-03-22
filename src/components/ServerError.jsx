import React from 'react'
import { Result } from 'antd';

function ServerError({onHomeClick}) {
  return (
    // <div className="server-error-message">
    //       <p className="login-server-unavailable">  
    //         Server unavailable. Please try again later.
    //       </p>
    //       <div onClick={onHomeClick} className="server-error-go-home">
    //           Go Home
    //       </div>
    // </div>

    <div className="server-error-message"> 
            <Result
            status="500"
            title="Server unavailable. Please try again later."
            />

            <div onClick={onHomeClick} className="server-error-go-home">
                Home
            </div>
    </div>
  )
}


export default ServerError