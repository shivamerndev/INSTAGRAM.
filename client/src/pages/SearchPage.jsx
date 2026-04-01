import { useEffect } from "react"
import { searchUser } from "../services/auth.service"

const SearchPage = () => {

  let timeOut = 0

  const handleSearchUser = (text) => {
    clearTimeout(timeOut)
    timeOut = setTimeout(async () => {
      let res = await searchUser(text)
      console.log(res.data.users)
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg w-full mx-auto">
      <div className="flex w-1/2 gap-2 mb-6">
        <input
          onChange={(e) => handleSearchUser(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-lg bg-[#23232a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c799ff] border border-white/10 shadow"
        />
      </div>
      <span className="text-gray-400 text-xs mb-2">search</span>
      <p className="text-gray-500 text-sm font-medium">no result found {'{search}'}</p>
    </div>
  )
}

export default SearchPage