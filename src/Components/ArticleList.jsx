import React from 'react'
import BlogContext from '../shared/BlogContext'
import { useContext } from 'react';
import ArticleCard from './ArticleCard'

function ArticleList({onEdit}) {
  const { blog, deleteBlog } = useContext(BlogContext);
  return (
    <div className=" mt-3">
      {blog.map((blog)=>(
       <ArticleCard 
       key={blog.id} 
       article={blog}  
       onDelete={() => deleteBlog(blog.id)} 
       onEdit={() => onEdit(blog)} 
     />
     
      ))}
    </div>   
  )
}

export default ArticleList