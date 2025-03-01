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

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-600">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input className="w-full h-[40px] p-2 font-semibold" type="text" placeholder="title" value={title} onChange={e => settitle(e.target.value)}/>
      <textarea type="text" placeholder="description" value={description} onChange={e => setdescription(e.target.value)} />
      <input type="text" placeholder="image" value={image} onClick={e=>setimage(e.target.value)} />
      </div>
      <section>
        <button>{existingBlog ? "Update" : "Add"}</button>
      </section>
    </div>
  );
}

export default BlogForm;
