import React from "react";
import TrendsList from "./Components/TrendsList";
import PeopleToFollow from "./Components/PeopleToFollow";
import Navigation from "./Components/Navigation"
function App() {
  return (
    <div>
      <Navigation />
    <div className="flex justify-end p-4">
      {/* Sidebar container for right alignment */}
      <div className="w-[400px] flex flex-col gap-4">
        <PeopleToFollow />
        <TrendsList />
      </div>
    </div>
    </div>
  );
}

export default App;
