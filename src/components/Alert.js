import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div className={`alert-container alert alert-warning alert-dismissible fade show bg-${props.alert.bg} text-${props.alert.color}`} role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>
  );
}
