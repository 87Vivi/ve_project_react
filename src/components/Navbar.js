import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h3>Something</h3>
      <FaRegUserCircle />
    </div>
  );
}
