import React, { useState } from "react";
import TrendsList from "./Components/TrendsList";
import PeopleToFollow from "./Components/PeopleToFollow";
import Navigation from "./Components/Navigation";
import TopicsList from "./Components/TopicsList";
import { BlogProvider } from "./shared/BlogContext"; // Import BlogProvider
import blogs from "./db/trends";
import Model from './Components/Model'
import BlogForm from "./Components/BlogForm";

function App() {
  const [isModelOpen, setisModelOpen] = useState(false)
  const [editing, setediting] = useState(null)

  const openModelforNewblog = () =>{
    setediting(blogs)
    setisModelOpen(true)
  }

  const openModelforEdit = () =>{
    setediting(blogs)
    setisModelOpen(true)
  }
  return (
    <BlogProvider>
      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navigation />

        {/* Centered Add Blog Button */}
        <div className="flex flex-col items-center justify-center mt-4">
          <button onClick={openModelforNewblog} className="border-2 border-black bg-black text-white w-28 h-10 flex justify-center items-center focus:outline-none">
            Add New Blog
          </button>
          {isModelOpen && <Model onClose={()=>setisModelOpen(false)}>
            <BlogForm existingBlog = {editing} onClose={()=>setisModelOpen(false)}/></Model>}
        </div>

        {/* Sidebar Section - Move Up */}
        <div className="absolute top-[80px] right-4 w-[400px] flex flex-col gap-4">
          <PeopleToFollow /> {/* This component is now at the top */}
          <TrendsList />
          <TopicsList />
        </div>
      </div>
    </BlogProvider>
  );
}

export default App;
