import React from "react";
import { FaUserCircle } from "react-icons/fa";

function UserCard({ person }) {
  return (
    <>
    <div className="flex items-center justify-between w-full border-b-2 py-2 px-4">
      <div className="flex items-center gap-3">
        <FaUserCircle size={40} />
        <h3>{person.name}</h3>
      </div>
      <button className="px-4 py-1 border rounded-lg">
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
    </>
  );
}

export default UserCard;
