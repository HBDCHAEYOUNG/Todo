import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneShop } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand gap-1">
        <AiTwotoneShop />
        <h1>Odidas</h1>
      </Link>
      <nav className="flex items-center gap-3 text-xl font-semibold ">
        <Link to="/product">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/product/new">
            <FaPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
