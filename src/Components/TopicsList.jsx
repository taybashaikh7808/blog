import React from 'react'
import Topics from '../db/topics'

function TopicsList() {
  return (
    <section className="border-2 w-full p-4">
      <h2 className="font-bold text-center text-xl mb-2">Topics For You</h2>
      {Topics.map((topic,index)=>(
        <button className="border-2 bg-gray-300 ml-2 rounded-lg pl-2 pr-2 mt-1 border-black hover:bg-gray-500 font-normal " key={index}>{topic}</button>
      ))}
      </section>
  )
}

export default TopicsList