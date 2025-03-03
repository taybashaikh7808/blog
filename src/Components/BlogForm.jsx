import React, { useEffect, useState } from "react";

function BlogForm({ existingBlog, onClose }) {
  const [title, settitle] = useState(existingBlog?.title || "");
  const [description, setdescription] = useState(existingBlog?.description || "");
  const [image, setimage] = useState(existingBlog?.image || "");
  const [time, settime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      settitle(existingBlog.title);
      setdescription(existingBlog.description);
      setimage(existingBlog.image);
      settime(existingBlog.time);
    }
  }, [existingBlog]);
  const handlesubmit = () =>{
    const BlogData = {
      title,
      image,
      description,
      time
    }
    if (existingBlog){
      
    }

  }

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-600">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input className="w-full h-[40px] p-2 font-semibold border-2" type="text" placeholder="title" value={title} onChange={e => settitle(e.target.value)}/><br></br>
      <textarea className="w-full h=[80px p-2 font-semibold border-2" type="text" placeholder="description" value={description} onChange={e => setdescription(e.target.value)} /><br></br>
      <input  className="w-full h-[40px] p-2 font-semibold border-2" type="text" placeholder="image" value={image} onClick={e=>setimage(e.target.value)} /><br></br>
      </div>
      <br />
      <section className="flex justify-between mt-4">
        <button className="border-2 h-10 w-[75px] border-black font-bold bg-gray-300 hover:bg-gray-600 cursor-pointer" onClick={handlesubmit}>{existingBlog ? "Update" : "Add"}</button>
        <button className="border-2 h-10 w-[75px] border-black font-bold bg-gray-300 hover:bg-red-600 cursor-pointer" onClick={onClose}>Cancel</button>
      </section>
    </div>
  );
}

export default BlogForm;
