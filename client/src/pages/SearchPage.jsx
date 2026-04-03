import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"


const SearchResultCard = ({ user }) => (
  <div className="flex items-center gap-4 p-4 bg-[#18181c] rounded-lg shadow border border-white/10 w-full max-w-md mb-2">
    <img
      src={user.profileImage || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.fullName)}
      alt={user.fullName}
      className="w-12 h-12 rounded-full object-cover border border-[#c799ff] bg-[#23232a]"
    />
    <div className="flex flex-col">
      <span className="font-semibold text-white">{user.fullName}</span>
      <span className="text-gray-400 text-sm">@{user.username}</span>
    </div>
    <button
      className="ml-auto px-4 py-2 bg-[#20b1ff] hover:bg-[#6c8fff] text-white rounded-lg font-semibold transition-colors duration-150 shadow border border-[#c799ff]/30"
    >
      Follow
    </button>
  </div>
)

const SearchPage = () => {

  const { results, handleSearchUser } = useUser()
  const [search, setSearch] = useState("")

  useEffect(() => {
    if(!search) return
    let timeoutId = setTimeout(() => {
      handleSearchUser(search)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [search])


  return (
    <div className="flex flex-col items-center p-6 rounded-xl shadow-lg w-full mx-auto">
      <div className="flex w-1/2 gap-2 mb-6">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-lg bg-[#23232a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c799ff] border border-white/10 shadow"
        />
      </div>
      <div className="w-full flex flex-col items-center">

        {results.length > 0 && results.map(user => (
          <SearchResultCard key={user._id} user={user} />
        ))}
        {results.length === 0 && (
          <p className="text-gray-500 text-sm font-medium">no result found '{search}'</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage