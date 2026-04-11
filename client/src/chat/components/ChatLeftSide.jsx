import { useSelector } from 'react-redux'
import ChatUserTile from './ChatUserTile'

const ChatLeftSide = ({ chatUsers, data: { username } }) => {



    return <div className=" text-white h-full flex-1  border-r border-zinc-800">
        <div className="flex flex-col justify-between px-4 py-3 border-b border-zinc-800">
            <h2 className="font-semibold text-xl">{username}</h2>
            <input className="border px-4 py-2 my-2 rounded-full " type="search" placeholder="Search" />
        </div>

        <div className="flex justify-around mb-4 text-sm text-gray-400 border-b border-zinc-800">
            <button className="py-2 border-b-2 border-white font-semibold text-white">
                Primary
            </button>
            <button className="py-2">General</button>
            <button className="py-2">Requests</button>
        </div>
        {chatUsers.map((u, i) => <ChatUserTile key={i} user={u} />)}
    </div>
}

export default ChatLeftSide