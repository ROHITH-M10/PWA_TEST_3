import React from 'react'

function Login({adminUrl}) {
  console.log("Admin URL: ", adminUrl);
  return (
    <div className="login-iframe-container">
          <iframe src={adminUrl} title="content-frame"></iframe>
    </div>
  )
}

export default Login