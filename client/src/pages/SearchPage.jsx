import React from 'react'

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg w-full mx-auto">
      <div className="flex w-1/2 gap-2 mb-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-lg bg-[#23232a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c799ff] border border-white/10 shadow"
        />
        <button className="px-4 py-2 rounded-lg bg-[#c799ff] text-black font-bold hover:bg-[#a06cd5] transition-colors shadow">Search</button>
      </div>
      <span className="text-gray-400 text-xs mb-2">search</span>
      <p className="text-gray-500 text-sm font-medium">no result found {'{search}'}</p>
    </div>
  )
}

export default SearchPage