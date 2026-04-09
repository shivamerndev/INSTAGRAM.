import { useState } from 'react';
import usePost from '../hooks/usePost';
import handleForm from '../utils/form.utility';

const CreatePost = () => {
    const { handleCreatePost } = usePost()
    const [file, setFile] = useState(null)

    return (
        <section className="mx-auto flex gap-32 h-full w-full items-center justify-center">

            <div className='border border-white/50 p-4 rounded-2xl'>
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Preview</h3>
                    <span className="text-sm text-slate-500">{file ? `${file.length} file${file.length === 1 ? "" : "s"} selected` : "No files yet"}</span>
                </div>
                <div className="grid min-h-56 gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-3 sm:grid-cols-2">
                    {file ? [...file].map((f) => (
                        <img key={`${f.name}-${f.lastModified}`} className='h-40 w-full rounded-2xl object-cover' src={URL.createObjectURL(f)} alt={f.name} />
                    )) : (
                        <div className="col-span-full flex items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-slate-500">
                            Your media preview will appear here.
                        </div>
                    )}
                </div>
            </div>

            <form   onSubmit={(e) => handleForm(e, handleCreatePost)} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_28px_90px_-55px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-8">
              
                <div className="space-y-6">

                    <label
                        htmlFor="files"
                        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-dashed border-sky-300/30 bg-slate-950/45 px-6 py-10 text-center transition hover:border-sky-300/45 hover:bg-slate-900/70">
                        <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-sky-100">
                            Upload media
                        </span>
                        <div>
                            <p className="text-lg font-semibold text-white">Drag files here or click to browse</p>
                            <p className="mt-2 text-sm text-slate-400">PNG, JPG, or multiple images for a carousel.</p>
                        </div>
                    </label>
                    <input
                        onChange={e => setFile(e.target.files)}
                        id="files"
                        type="file"
                        name='media'
                        multiple
                        className="hidden"
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300" htmlFor="caption">Caption</label>
                        <textarea
                            id="caption"
                            name='caption'
                            rows="5"
                            placeholder="Write something thoughtful about this post..."
                            className="w-full rounded-6 border border-white/10 bg-slate-950/60 px-5 py-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-[1.2rem] bg-linear-to-r from-sky-500 via-blue-500 to-cyan-300 px-4 py-3.5 text-base font-semibold text-slate-950 shadow-[0_20px_40px_-20px_rgba(56,189,248,0.8)] transition hover:brightness-110"
                    >
                        Publish post
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CreatePost
