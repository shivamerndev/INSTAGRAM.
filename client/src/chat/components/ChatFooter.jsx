import { Image, Sticker } from "lucide-react"

const ChatFooter = () => {

    return (
        <div className="flex sticky bottom-0 py-4 items-center px-4 bg-zinc-950 border-t border-zinc-800">
            <button className="text-xl mr-2">😊</button>
            <input
                type="text"
                placeholder="Message..."
                className="flex-1 bg-zinc-900 text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
            />
            <div className="flex gap-3 text-xl ml-4">
                <button>< Image /></button>
                <button> < Sticker /> </button>
            </div>
        </div>
    )
}

export default ChatFooter