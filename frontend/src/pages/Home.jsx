import PostCard from "../components/posts/PostCard";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <section className="wrapper">
      <Sidebar />
      <main className="post-container" id="lws-postContainer">
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </section>
  );
};

export default Home;
