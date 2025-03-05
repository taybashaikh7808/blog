import React from "react";

function ArticleCard({ article, onDelete, onEdit }) {
  console.log(article.description);
  return (
    <div className="border p-4 rounded shadow w-96 bg-white flex gap-4">
      {/* Image on the Left */}
      <img
        src={article.image}
        alt={article.title}
        className="w-24 h-24 rounded object-cover border-2"
      />

      {/* Text Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-1 break-words">
          {article.description}
        </p>
        <span className="text-xs text-gray-500 mt-1">{article.time}</span>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            className="px-2 py-1 text-sm mt-2 h-9 w-10 ml-[140px] bg-blue-500 text-white rounded font-xl"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 text-sm bg-red-500 mt-2 h-9 w-13 text-white rounded"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;