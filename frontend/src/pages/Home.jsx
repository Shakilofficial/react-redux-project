import PostList from "../components/posts/PostList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <section className="wrapper">
      <Sidebar />
      <PostList />
    </section>
  );
};

export default Home;
