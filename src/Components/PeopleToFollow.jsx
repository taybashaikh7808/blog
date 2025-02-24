import React, { useState } from "react";
import UserCard from "./UserCard";
function PeopleToFollow() {
  const [follow, setfollow] = useState();
  const people = [
    { name: "Shivam Shaikh", following: true },
    { name: "Tayba Shaikh", following: false },
    { name: "Iqra Shaikh", following: true },
    { name: "Firoz Khan", following: false },
    { name: "Shahrukh Sayyed", following: true },
  ];
  const handlefollow = () => {
    setfollow(follow ? false : true);
  };

  return (
    <>
      <section className="h-screen border-2 w-[400px] fixed right-0 mr-4">
        <h1 className="font-bold text-black text-center text-2xl leading-[3rem] mt-2 mb-2">
          People To Follow
        </h1>

        {people.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </section>
    </>
  );
}

export default PeopleToFollow;
