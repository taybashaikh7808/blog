import React, { useEffect, useState } from 'react'

function BlogForm({existingBlog,onClose}) {
  const {addBlog,updateBlog} = useBlog()
  const [title, settitle] = useState(existingBlog?.title || " ")
  const [description, setdescription] = useState(existingBlog?.description || " ")
  const [image, setimage] = useState(existingBlog?.image || "")
  const [time, settime] = useState(existingBlog?.time || " ")
  useEffect(() => {
    if(existingBlog){
      settitle(existingBlog.title)
      setdescription(existingBlog.description)
      setimage(existingBlog.image)
      settime(existingBlog.time)
    }
  }, [existingBlog])
  
  return (
    <div>BlogForm</div>
  )
}

export default BlogForm