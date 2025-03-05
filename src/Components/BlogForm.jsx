import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../shared/BlogContext";

function BlogForm({ existingBlog, onClose }) {
  const { addBlog, updateBlog } = useContext(BlogContext); // Import functions

  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(existingBlog?.description || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    if (existingBlog) {
      updateBlog(existingBlog.id, title, description,Image,time);
    } else {
      addBlog(title, description,image,time); // Correct function call
    }
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-600">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input className="w-full h-[40px] p-2 font-semibold border-2" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="w-full h-[80px] p-2 font-semibold border-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input className="w-full h-[40px] p-2 font-semibold border-2" type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <br />
      <section className="flex justify-between mt-4">
        <button className="border-2 h-10 w-[75px] border-black font-bold bg-gray-300 hover:bg-gray-600 cursor-pointer" onClick={handleSubmit}>
          {existingBlog ? "Update" : "Add"}
        </button>
        <button className="border-2 h-10 w-[75px] border-black font-bold bg-gray-300 hover:bg-red-600 cursor-pointer" onClick={onClose}>
          Cancel
        </button>
      </section>
    </div>
  );
}

export default BlogForm;
