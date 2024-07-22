import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex shrink-0 items-center">
      <img src={photoURL} alt={displayName} className="w-8 h-8 mr-2" />
      <span className="hidden md:block text-lg">{displayName}</span>
    </div>
  );
}
