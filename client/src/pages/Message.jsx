const Message = () => <section className="flex h-[80vh] max-w-5xl mx-auto mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
  {/* Sidebar: Conversations List */}
  <aside className="w-1/3 bg-gray-100 dark:bg-gray-800 p-6 flex flex-col gap-4 border-r border-gray-200 dark:border-gray-700">
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Chats</h2>
    <div className="flex-1 overflow-y-auto flex flex-col gap-2">
      {/* Example chat preview */}
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
        <img src="https://ui-avatars.com/api/?name=J+D&background=0D8ABC&color=fff" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-100">John Doe</p>
          <span className="text-xs text-gray-500 dark:text-gray-400">Hey! How are you?</span>
        </div>
      </div>
      {/* ...more chats */}
    </div>
  </aside>
  {/* Main Chat Area */}
  <main className="flex-1 flex flex-col">
    {/* Chat Header */}
    <header className="flex items-center gap-4 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <img src="https://ui-avatars.com/api/?name=J+D&background=0D8ABC&color=fff" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-100">John Doe</p>
        <span className="text-xs text-gray-500 dark:text-gray-400">Online</span>
      </div>
    </header>
    {/* Messages */}
    <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-gray-50 dark:bg-gray-800">
      {/* Example message bubbles */}
      <div className="self-end max-w-xs bg-blue-600 text-white rounded-2xl px-4 py-2 shadow">Hi there!</div>
      <div className="self-start max-w-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-2xl px-4 py-2 shadow">Hello! How are you?</div>
      {/* ...more messages */}
    </div>
    {/* Message Input */}
    <form className="flex items-center gap-4 px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none" />
      <button type="submit" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors duration-200">Send</button>
    </form>
  </main>
</section>

export default Message