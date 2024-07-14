import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const { keyword } = useParams();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${inputValue}`);
  };

  useEffect(() => {
    setInputValue(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full text-2xl flex relative p-4 border-b border-zinc-600 items-center">
      <Link to={"/"} className="text-4xl absolute left-4 flex items-center">
        <TbBrandYoutubeFilled className="text-brand" />
        <h1 className="px-2 font-bold text-3xl">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-2/5 mx-auto overflow-hidden ps-3 rounded bg-black"
      >
        <input
          className="flex-1"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
        <button className="p-2 min-w-0 h-full bg-zinc-600" type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
