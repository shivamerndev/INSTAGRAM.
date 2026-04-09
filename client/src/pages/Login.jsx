import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import handleForm from "../utils/form.utility";
import userAuth from "../hooks/userAuth";
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { handleLogin, handleGoogleLogin } = userAuth()

    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-96 w-40 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-12">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="hidden lg:block">
                        <h1 className="mt-4 text-5xl font-semibold leading-tight">
                            See everyday moments from your
                            <span className="bg-linear-to-r from-orange-600 via-amber-500 to-pink-200 bg-clip-text text-transparent"> close friends.</span>
                        </h1>
                        <figure className="h-1/4">
                            <img className="h-full" src="https://static.cdninstagram.com/rsrc.php/yR/r/92ZsVHNkyvf.webp" alt="" />
                        </figure>
                    </div>

                    <div className="mx-auto w-full max-w-md rounded-2xl border border-white/30 p-6 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-8">
                        <div className="mb-6">
                            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Log in to your account</h1>
                            <p className="mt-2 text-sm text-slate-400">Sign in to continue to your personalized feed.</p>
                        </div>

                        <form onSubmit={(e) => handleForm(e, handleLogin)} className="space-y-4">
                            <div className="space-y-4">
                                <label className="text-sm text-slate-300">Email or username</label>
                                <input
                                    className="h-10 w-full rounded-lg border border-white/50 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                                    type="text"
                                    required
                                    minLength={5}
                                    name="EmailOrUsername"
                                    autoComplete="username"
                                    placeholder="Enter username or email"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm text-slate-300">Password</label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute bottom-3 right-4 cursor-pointer text-slate-500 transition hover:text-sky-200">
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                                <input
                                    className="h-10 w-full rounded-lg border border-white/50 px-4 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-500/10"
                                    required
                                    minLength={8}
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button type="submit" className="w-full cursor-pointer rounded-[1.2rem] bg-linear-to-tr from-pink-500 via-purple-400 to-rose-400 px-4 py-3 text-base font-semibold shadow-[0_20px_40px_-20px_rgba(56,189,248,0.8)] transition hover:brightness-110">
                                Log in
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
                                <GoogleLogin
                                    onSuccess={handleGoogleLogin}
                                    onError={() => console.log("Google Login Failed")}
                                    theme="filled_black"
                                    shape="pill"
                                    size="large"
                                />
                            </div>

                            <p className="pt-1 text-center text-sm text-slate-400">
                                Don&apos;t have an account?{" "}
                                <Link to="/register" className="font-semibold text-white hover:text-sky-100">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
