import React from "react";
import TrendsList from "./Components/TrendsList";
import PeopleToFollow from "./Components/PeopleToFollow";
import Navigation from "./Components/Navigation"
import TopicsList from "./Components/TopicsList"
import BlogContext from "./shared/BlogContext";
function App() {
  return (
    <div>
      <Navigation />
      <BlogContext>
        <button>Add Blog</button>
    <div className="flex justify-end p-4">
      <div className="w-[400px] flex flex-col gap-4">
        <PeopleToFollow />
        <TrendsList />
        <TopicsList />
      </div>
    </div>
    </BlogContext>
    </div>
  );
}

export default App;
