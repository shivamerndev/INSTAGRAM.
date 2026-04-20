import { useEffect } from "react";
import PostCard from "../components/PostCard";
import Stories from "../components/Stories";
import Suggest from "../components/Suggest";
import usePost from "../hooks/usePost";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
  const { handleGetPosts } = usePost()
  const posts = useSelector(state => state.posts.posts)
  const user = useSelector(state => state.auth.user)

  useEffect(() => {
    handleGetPosts()
  }, [])



  console.log(posts)


  return (
    <div className="flex select-none w-full h-screen bg-black/20 text-white">
      <div className="w-full flex overflow-y-auto">
        <div className="w-[65%]  px-8 py-3">
          <Stories />
          <div className="flex bg-ambe-300 flex-col mt-4  items-center">
            {posts && posts.map((post, i) => <PostCard key={i} post={post} />)}
          </div>
        </div>
        <Suggest />
      </div>
    </div >
  )
};

export default Home;
