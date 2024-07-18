import React from "react";
import { Link } from "react-router-dom";
import { CiShop, CiEdit } from "react-icons/ci";
import { login } from "../api/firebase";

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <CiShop />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/product">products</Link>
        <Link to="/carts">carts</Link>
        <Link to="/product/new">
          <CiEdit />
        </Link>

        <button onClick={() => login()}>login</button>
      </nav>
    </header>
  );
}
