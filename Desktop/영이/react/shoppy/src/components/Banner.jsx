import React from "react";

export default function Banner() {
  return (
    <section className="h-80 bg-orange-950 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-75" />
      <div className="absolute w-full top-28 text-center text-gray-200 drop-shadow-2xl">
        <h2 className="text-4xl">Shop With US</h2>
        <p className="text-2xl mt-3">Best Products, High Quality</p>
      </div>
    </section>
  );
}
