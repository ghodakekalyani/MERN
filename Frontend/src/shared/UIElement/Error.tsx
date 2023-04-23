import React from "react";
import { Alert, Button } from "reactstrap";

const ErrorAlert = ({ message }: any) => {
  return (
    <div>
      <Alert color="danger">{message}</Alert>
    </div>
  );
};

export default ErrorAlert;
