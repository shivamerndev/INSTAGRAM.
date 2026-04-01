import { useEffect } from "react";
import PostCard from "../components/PostCard";
import Stories from "../components/Stories";
import Suggest from "../components/Suggest";
import usePost from "../hooks/usePost";
import { useSelector } from "react-redux";

const Home = () => {

  const { handleGetPosts } = usePost()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    handleGetPosts()
  }, [])

  return (
    <main style={{ scrollbarWidth: "none" }} className="flex-1 space-x-8 h-full py-8 flex overflow-y-auto  w-full">
      <div className="flex flex-col w-1/2 gap-10 ">
        <Stories />
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
      <Suggest />
    </main >
  )
};

export default Home;