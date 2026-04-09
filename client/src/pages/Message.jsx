import { useSelector } from "react-redux"

const Message = () => {

  const { user: { username, profileImage } } = useSelector(store => store.user)



  let suggestUser = [{ username: "shivam" }, { username: "shivani" }, { username: "shiva" }]

  return <div className="w-full flex bg-black/50 h-full ">
    <div className=" text-white h-full w-1/3  border-r border-red-800">
      <div className="flex flex-col justify-between px-4 py-3 border-b border-zinc-800">
        <h2 className="font-semibold text-xl">{username}</h2>

        <input className="border px-4 py-2 my-2 rounded-full " type="search" placeholder="Search" />

      </div>


      <div className="flex justify-around text-sm text-gray-400 border-b border-zinc-800">
        <button className="py-2 border-b-2 border-white font-semibold text-white">
          Primary
        </button>
        <button className="py-2">General</button>
        <button className="py-2">Requests</button>
      </div>
      {suggestUser.map((u, i) => <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer">
        <img src={profileImage} alt='' className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{u.username}</p>
          <p className="text-gray-400 text-sm">hii •1h</p>
        </div>
      </div>)}
    </div>


    {/*  ChatBox */}


    <div className="w-10/13 ">
      <div className="flex flex-col justify-between h-full bg-black text-white w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <img
              src={profileImage}
              alt="Shivam"
              className="h-8 w-8 rounded-full"
            />
            <p className="font-semibold">{username}</p>
          </div>
          <div className="flex gap-4 text-xl text-gray-300">
            <button>📞</button>
            <button>🎥</button>
            <button value={'dets'} className=" :details">ℹ️</button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          9/30/23, 12:55 PM
        </div>
        {/* Messages */}
        <div className="flex overflow-y-auto  h-full px-4 ">

          {/* Date */}

          <div className="w-full flex flex-col overflow-y-auto gap-4 items-end justify-end h-full">
            <div className="flex w-full gap-2">
              <img
                src={profileImage}
                alt="user"
                className="w-8 h-8 rounded-full" />
              <div>
                <p className="bg-zinc-700 px-4 rounded-2xl py-1">Hii my name is shivam</p>
                {/* <img
              src={profileImage} // You can replace with your meme
              alt="meme"
              className="rounded-lg max-w-[300px]"
            /> */}
              </div>
            </div>
            <p className="bg-sky-700 px-4 rounded-2xl py-1">Hello shivam</p>
          </div>

          {/* <div className="items-end bg-blue-500  w-full justify-end flex flex-col gap-4 ">
          <p className="bg-sky-700 px-4 rounded-2xl py-1">Hello shivam how are you?</p>
          <p className="bg-sky-700 px-4 rounded-2xl py-1">Hello shivam</p>
          <p className="bg-sky-700 px-4 rounded-2xl py-1"> you?</p>
          <p className="bg-sky-700 px-4 rounded-2xl py-1"> my name is motki</p>
        </div> */}
        </div>

        {/* Input bar */}
        <div className="flex items-center px-4 py-3 border-t border-zinc-800">
          <button className="text-xl mr-2">😊</button>
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-zinc-900 text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
          />
          <div className="flex gap-3 text-xl ml-4">
            <button>🖼️</button>
            <button>❤️</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Message
