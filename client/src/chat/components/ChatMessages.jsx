import React from 'react'

const ChatMessages = () => {
    return (
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
                    </div>
                </div>
                <p className="bg-sky-700 px-4 rounded-2xl py-1">Hello shivam</p>
            </div>
        </div>
    )
}

export default ChatMessages