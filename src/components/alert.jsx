import React, { useContext } from "react";
import { provide } from "../store/contextprovider";

export default function Alert() {
  const { alert } = useContext(provide);
  return (
    <>
      {alert && (
        <div className={`alert ${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
    </>
  );
}
