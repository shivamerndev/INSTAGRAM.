
import { Loader2 } from "lucide-react";

const Loading = () => (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800">
        <Loader2 className="animate-spin text-pink-600 dark:text-pink-500" size={56} strokeWidth={2.5} />
        <h1 className="mt-6 text-2xl font-semibold text-orange-200 tracking-wide">Loading...</h1>
    </div>
);

export default Loading;