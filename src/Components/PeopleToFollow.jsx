import React from "react";
import UserCard from "./UserCard";
import people from "../db/people";

function PeopleToFollow() {
  return (
    <section className="border-2 w-full p-4">
      <h1 className="font-bold text-black text-center text-2xl mb-2">
        People To Follow
      </h1>

      {people.map((person, index) => (
        <UserCard key={index} person={person} />
      ))}
    </section>
  );
}

export default PeopleToFollow;
