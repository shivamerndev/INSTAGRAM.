import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const StoryPage = () => {
  const { stories, selectedStory } = useSelector(state => state.stories)
  const story = selectedStory || stories[0]
  const user = story?.userId
  const media = story?.media || []

  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  if (!story || !media.length) {
    return (
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl items-center justify-center">
        <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/5 p-12 text-center">
          <h1 className="text-2xl font-semibold text-white">No story selected</h1>
          <p className="mt-3 text-sm text-slate-400">Open a story from the feed to view it here.</p>
          <Link to="/" className="mt-6 inline-flex rounded-full border border-sky-400/20 bg-sky-500/12 px-5 py-2.5 text-sm font-semibold text-sky-100">
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
      <div className="grid w-full items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Story spotlight</p>
          <h1 className="text-4xl font-semibold text-white">A focused story viewer with a cleaner cinematic frame.</h1>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            The selected story now opens inside a polished full-screen layout, with a safe fallback when no story has been selected yet.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Back to feed
            </Link>
            <button className="rounded-full border border-sky-400/20 bg-sky-500/12 px-5 py-2.5 text-sm font-semibold text-sky-100">
              {current + 1} / {media.length}
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[420px] flex-col overflow-hidden rounded-[2.4rem] border border-white/10 bg-slate-950/80 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.98)]">
          <div className="absolute inset-0 bg-linear-to-b from-sky-500/12 via-transparent to-cyan-300/8" />
          <div className="relative z-20 flex gap-1.5 px-4 pb-3 pt-4">
            {media.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 flex-1 rounded-full ${idx === current ? 'bg-white' : 'bg-white/20'}`}
              />
            ))}
          </div>

          <div className="relative z-20 flex items-center gap-3 px-4 pb-4">
            <img
              src={user?.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.fullName || user?.username || "Story")}`}
              alt={user?.fullName || user?.username}
              className="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div className="min-w-0">
              <span className="block truncate text-sm font-semibold text-white">{user?.fullName || user?.username}</span>
              <span className="block truncate text-xs text-slate-400">@{user?.username}</span>
            </div>
          </div>

          <div className="relative flex min-h-[620px] items-center justify-center px-3 pb-3">
            <div
              className="absolute inset-4 rounded-[2rem] bg-cover bg-center opacity-30 blur-2xl"
              style={{ backgroundImage: `url(${media[current].url})` }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-900">
              {media[current].mediaType === 'image' && (
                <img
                  src={media[current].url}
                  alt="story"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/70 p-2 text-white transition hover:bg-slate-800"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/70 p-2 text-white transition hover:bg-slate-800"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}

export default StoryPage
