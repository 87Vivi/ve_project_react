import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Register from "./Register";

export default function Navbar() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  function RegisterFormShow() {
   
  }

  return (
    <div>
      <button onClick={RegisterFormShow}>Register</button>
      <FaRegUserCircle />
    </div>
  );
}
