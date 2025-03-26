import React, { useState, useEffect } from "react";
import { Spin } from 'antd';
import ServerError from "./ServerError";

function Login({ adminUrl, onHomeClick ,  loginReload}) {
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {

    setIsAccessible(null); // Reset state on every new URL
    const checkServer = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        const response = await fetch(adminUrl, { method: "HEAD", signal: controller.signal });

        clearTimeout(timeoutId);
        setIsAccessible(response.ok);
      } catch (error) {
        setIsAccessible(false); // If fetch fails, mark as inaccessible
      }
    };

    checkServer();
  }, [adminUrl, loginReload]);

  return (
    <div className="login-iframe-container">
      {isAccessible === null ? (
        <div className="login-checking-server">
          <Spin size="large" />
          <p className="login-checking-server-text">Checking server availability...</p>

        </div>
      ) : isAccessible ? (
        <iframe src={adminUrl} title="content-frame"></iframe>
      ) : (
        <ServerError
          onHomeClick={onHomeClick}
        />
      )}
    </div>
  );
}

export default Login;
