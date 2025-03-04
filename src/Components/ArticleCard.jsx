import React from 'react'

function ArticleCard({article ,onDelete,onEdit}) {
  return (
    <div  className="h-[200px] w-[400px] border-2 border-gray-300 rounded-lg">
      <img src={article.image} alt={article.title}  />
    </div>
  )
}

export default ArticleCard