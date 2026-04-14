import { Image, SendIcon, Sticker } from "lucide-react"
import { useState } from "react"

const ChatFooter = ({ sendMessage }) => {

    const [input, setInput] = useState("")

    return (
        <div className="flex sticky bottom-0 py-4 items-center px-4 bg-zinc-950 border-t border-zinc-800">
            <button className="text-xl mr-2">😊</button>

            <div className="flex-1 text-white relative " >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full placeholder-pink-200 bg-zinc-800 h-full py-2 px-6 rounded-full outline-none"
                    type="text"
                    placeholder="Message..."
                />
                {input && <SendIcon onClick={() => {
                    sendMessage(input)
                }} className="text-sky-400 cursor-pointer absolute right-4 top-2 text-base" />}
            </div>
            <div className="flex gap-3 text-xl ml-4">
                <button>< Image /></button>
                <button> < Sticker /> </button>
            </div>
        </div>
    )
}

export default ChatFooter