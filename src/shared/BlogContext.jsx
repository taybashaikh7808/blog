import React, { createContext, useState } from "react";

// Create Context
const BlogContext = createContext([]);

// Create BlogProvider Component
export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const addBlog = (title, description, image, time) => {
    const newBlog = {
      id: Date.now(), // Generate a unique ID
      title,
      description,
      image,
      time,
    };
    setBlog((prevBlogs) => [...prevBlogs, newBlog]);
  };
  

  const deleteBlog = (id) => {
    setBlog(blog.filter((blog) => blog.id !== id));
  };

  const updateBlog = (id, updatedTitle, updatedContent) => {
    setBlog(
      blog.map((blog) =>
        blog.id === id ? { ...blog, title: updatedTitle, content: updatedContent } : blog
      )
    );
  };

  return (
    <BlogContext.Provider value={{ blog, addBlog, deleteBlog, updateBlog }}>
      {children}  {/* This ensures wrapped components are displayed */}
    </BlogContext.Provider>
  );
};

// Export Context
export default BlogContext;
