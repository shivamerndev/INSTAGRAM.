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
    <section className="mx-auto w-full max-w-5xl space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-linear-to-br from-white/8 to-white/4 p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Explore profiles</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white">Find people, creators, and teams.</h1>
            <p className="mt-2 text-sm text-slate-400">Search by username or name and jump straight into their profile.</p>
          </div>
          <div className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100">
            {results.length} result{results.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-6">
        <div className="flex gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by username or full name"
            className="h-14 flex-1 rounded-2xl border border-white/10 bg-slate-950/60 px-5 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
          />
        </div>
      </div>

      <div className="space-y-3">
        {!search.trim() && (
          <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/5 p-10 text-center">
            <h2 className="text-xl font-semibold text-white">Start searching</h2>
            <p className="mt-2 text-sm text-slate-400">Type a name to explore profiles and follow new people.</p>
          </div>
        )}

        {search.trim() && results.length > 0 && results.map(user => (
          <SearchTile key={user._id} user={user} />
        ))}

        {search.trim() && results.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/5 p-10 text-center">
            <h2 className="text-xl font-semibold text-white">No results found</h2>
            <p className="mt-2 text-sm text-slate-400">We couldn&apos;t find anyone matching &quot;{search}&quot;.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchPage
