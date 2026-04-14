import { useSelector } from "react-redux"

const ChatMessages = ({ username }) => {

    const chats = useSelector(store => store.chats.chats)

    console.log(chats)

    return (
        <div className="flex justify-end  p-4 h-1/2 flex-col flex-1  ">

            <div className="text-center sticky top-0 z-50 mb-4 text-xs text-gray-500">
                9/30/23, 12:55 PM
            </div>
            <div className='scrollbar overflow-y-auto'>

                {chats.map((e, i) => <div key={i} className="w-full flex flex-col  gap-4 items-end justify-end">
                    <div className={"flex w-full border- gap-2 my-2" + (e.sender === username ? " justify-end " : "")}>
                        {e.sender !== username && <img src={"profileImage"} alt="user" className="w-8 h-8 rounded-full" />}
                        <p className={" px-4 rounded-2xl py-1" + (e.sender === username ? " bg-blue-400" : " bg-zinc-700")}>{e.message}</p>
                    </div>
                </div>)}
            </div>

        </div>
    )
}

export default ChatMessages

//  <div className="flex w-full gap-2">
//                     {false && <img src={"profileImage"} alt="user" className="w-8 h-8 rounded-full" />}
//                     <p className=" px-4 rounded-2xl py-1">{e.message}</p>
//                 </div>