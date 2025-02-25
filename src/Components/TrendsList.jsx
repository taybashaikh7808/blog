import React from "react";
import trends from "../db/trends";

function TrendsList() {
  return (
    <section className="border-2 w-full p-4">
      <h2 className="font-bold text-center text-xl mb-2">Today's Top Trends</h2>
      {/* Sample Trends */}
      {trends.map((trend,index) => (
        <div key={index} className="mt-2">
          <b>{trend.title}</b>
          <p className="text-gray">{trend.author}</p>
        </div>
      ))}
    </section>
  );
}

export default TrendsList;
