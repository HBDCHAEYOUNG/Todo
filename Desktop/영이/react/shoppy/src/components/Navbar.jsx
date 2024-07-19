import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShop } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand gap-1">
        <AiTwotoneShop />
        <h1>Odidas</h1>
      </Link>
      <nav className="flex items-center gap-3 text-xl font-semibold ">
        <Link to="/product">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/product/new">
          <FaPencil />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
