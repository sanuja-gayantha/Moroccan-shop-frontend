import React, { useEffect } from 'react';
import "./AlertMsg.scss";
import Alert from '@mui/material/Alert';

const AlertMsg = ({ type, msg, removeAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 6000);
    return () => clearTimeout(timeout);
  }, [type]);

  return (
    // <div className={`alert-${type}`}>{msg}</div>
    <Alert style={{
      width:'auto',
    }} severity={`${type}`}>{msg}</Alert>
    )
};

export default AlertMsg;