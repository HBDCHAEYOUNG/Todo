import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  const keyword = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keyword.current.value);
    navigate(`videos/${keyword.current.value}`);
  };

  return (
    <div>
      <Link to={"/"}>
        <TbBrandYoutubeFilled />
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={keyword} placeholder="search..." />
        <button>
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
