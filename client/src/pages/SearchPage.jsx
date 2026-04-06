import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import SearchTile from "../components/SearchTile"

const SearchPage = () => {

  const { results, handleSearchUser } = useUser()
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!search) return
    let timeoutId = setTimeout(() => {
      handleSearchUser(search)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [search])

  console.log(results)

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

        {search && results.length > 0 && results.map(user => (
          <SearchTile key={user._id} user={user} />
        ))}
        {results.length === 0 && (
          <p className="text-gray-500 text-sm font-medium">no result found '{search}'</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage