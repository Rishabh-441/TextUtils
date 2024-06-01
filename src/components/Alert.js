import React from "react";

export default function Alert(props) {
  return (
    props.alert && 
    <div style={{position: 'fixed', width: '100vw'}}>
      <div className={`alert alert-${props.alert.status.toLowerCase()} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.status}</strong>: {props.alert.message}
      </div>
    </div>
  );
}
