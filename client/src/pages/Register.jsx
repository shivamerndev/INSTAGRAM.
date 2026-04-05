import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";
import userAuth from "../hooks/userAuth";
import handleForm from "../utils/form.utility";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  const { handleRegister } = userAuth()

  const handleSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    await axios.post("http://localhost:4000/api/auth/google", {
      idToken: credentialResponse.credential
    }, { withCredentials: true });
  };

  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-8 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_80px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
            <p className=" text-sm text-white/60">Sign up to continue to the app.</p>
          </div>

          <form onSubmit={(e) => handleForm(e, handleRegister)} className="space-y-2">
            <label className="text-sm text-white/70">Full name</label>
            <input
              className="h-10 mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-4 text-base text-white placeholder:text-white/30 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/15"
              type="text"
              name="fullName"
              autoComplete="name"
              placeholder="John Doe" />

            <label className="text-sm text-white/70">Username</label>
            <input
              className="h-10 mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-4 text-base text-white placeholder:text-white/30 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/15"
              type="text"
              name="username"
               minLength={5}
              autoComplete="username"
              placeholder="johndoe"
            />
            <label className="text-sm text-white/70">Email</label>
            <input
              className="h-10 mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-4 text-base text-white placeholder:text-white/30 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/15"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
            <div className="relative">
              <label className="text-sm text-white/70">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 bottom-0 transform -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              <input
                className="h-10 mt-1 w-full rounded-md border border-white/10 bg-zinc-900/60 px-4 text-base text-white placeholder:text-white/30 outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/15"
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
              className=" cursor-pointer relative h-10 mt-1 w-full rounded-xl bg-linear-to-bl frobasesia-500 to-indigo-500 px-4 text-sm text-center font-semibold text-white shadow-[0_10px_35px_-15px_rgba(217,70,239,0.6)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30">
              Create account
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="rounded-full bg-zinc-950/60 px-3 text-xs text-white/50">or continue with</span>
              </div>
            </div>
            <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")}
              theme="filled_black"
              shape="pill"
              size="large" />

            <p className="pt-1 text-center text-sm text-white/60">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-white hover:text-white/90">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
