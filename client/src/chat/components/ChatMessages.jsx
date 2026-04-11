import React from 'react'

const ChatMessages = () => {


    return (
        <div className="flex justify-end  p-4 h-1/2 flex-col flex-1  ">

            <div className="text-center sticky top-0 z-50 mb-4 text-xs text-gray-500">
                9/30/23, 12:55 PM
            </div>
            <div className='scrollbar overflow-y-auto'>

                {[...Array(10)].map(e => <div key={e} className="w-full flex flex-col  gap- items-end justify-end">
                    <div className="flex w-full  gap-2">
                        <img src={"profileImage"} alt="user" className="w-8 h-8 rounded-full" />
                        <p className="bg-zinc-700 px-4 rounded-2xl py-1">Hii my name is shivam</p>
                    </div>
                    <div className="flex justify-end w-full gap-2">
                        {false && <img src={"profileImage"} alt="user" className="w-8 h-8 rounded-full" />}
                        <p className="bg-blue-400 px-4 rounded-2xl py-1">Hii my name is shivam</p>
                    </div>
                </div>)}
            </div>

        </div>
    )
}

export default ChatMessages



// <p className="bg-sky-700 px-4 rounded-2xl py-1">Hello shivam</p>