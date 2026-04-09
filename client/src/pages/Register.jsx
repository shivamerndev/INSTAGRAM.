import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import userAuth from "../hooks/userAuth";
import handleForm from "../utils/form.utility";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { handleRegister, handleGoogleLogin } = userAuth()

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-40 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-8 lg:order-1">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">New account</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight">Create your account</h1>
              <p className="mt-2 text-sm text-slate-400">Set up your profile and start sharing in a cleaner, more modern UI.</p>
            </div>

            <form onSubmit={(e) => handleForm(e, handleRegister)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Full name</label>
                <input
                  className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Username</label>
                <input
                  className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                  type="text"
                  name="username"
                  minLength={5}
                  autoComplete="username"
                  placeholder="johndoe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Email</label>
                <input
                  className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="relative space-y-2">
                <label className="text-sm text-slate-300">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-3 right-4 cursor-pointer text-slate-500 transition hover:text-sky-200">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                <input
                  className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                  required
                  minLength={8}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-[1.2rem] bg-linear-to-r from-sky-500 via-blue-500 to-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_-20px_rgba(56,189,248,0.8)] transition hover:brightness-110">
                Create account
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center">
                  <span className="rounded-full bg-slate-950 px-3 text-xs text-slate-500">or continue with</span>
                </div>
              </div>

              <div className="flex justify-center">
                <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.log("Login Failed")}
                  theme="filled_black"
                  shape="pill"
                  size="large" />
              </div>

              <p className="pt-1 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-white hover:text-sky-100">
                  Sign in
                </Link>
              </p>
            </form>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Build your presence</p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight text-white">
              Start publishing in a space that feels curated from day one.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              The refreshed sign-up experience gives the product a stronger visual identity without changing your existing flow.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-lg font-semibold text-white">Modern</p>
                <p className="mt-1 text-sm text-slate-400">A sharper glassmorphism finish.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-lg font-semibold text-white">Responsive</p>
                <p className="mt-1 text-sm text-slate-400">Works smoothly across screen sizes.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-lg font-semibold text-white">Consistent</p>
                <p className="mt-1 text-sm text-slate-400">Matches the rest of the new app shell.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
