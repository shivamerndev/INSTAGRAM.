import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import SearchTile from "../components/SearchTile"

const SearchPage = () => {
  const { results, handleSearchUser } = useUser()
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!search.trim()) return

    let timeoutId = setTimeout(() => {
      handleSearchUser(search)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [search])

  return (
    <section className="flex flex-col justify-center w-1/2 mx-auto space-y-6">


      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search by username or full name"
        className="h-14  rounded-2xl border border-white/30 bg-slate-950/60 px-5 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-pink-400/40 focus:ring-4 focus:ring-pink-500/10"
      />


      <div className="space-y-3">

        {search.trim() && results.length > 0 && results.map(user => (
          <SearchTile key={user._id} user={user} />
        ))}

        {search.trim() && results.length === 0 && (
          <div className="rounded-8 border border-dashed border-white/12 bg-white/5 p-10 text-center">
            <h2 className="text-xl font-semibold text-white">No results found</h2>
            <p className="mt-2 text-sm text-slate-400">We couldn&apos;t find anyone matching &quot;{search}&quot;.</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default SearchPage
