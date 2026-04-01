import PostCard from "../components/PostCard";
import Stories from "../components/Stories";
import Suggest from "../components/Suggest";

const Home = () => {
  return (
    <main style={{ scrollbarWidth: "none" }} className="flex-1 space-x-8 h-full py-8 flex overflow-y-auto  w-full">
      <div className="flex flex-col w-1/2 gap-10 ">
        <Stories />
        {["https://images.unsplash.com/photo-1711043217102-b6aed9490982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1676813808802-d71321776c89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D", "https://plus.unsplash.com/premium_photo-1711367287679-d6ce302fdc2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"].map(e => <PostCard src={e} />)}
      </div>
      <Suggest />
    </main >
  )
};

export default Home;