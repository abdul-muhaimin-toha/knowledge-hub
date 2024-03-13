import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = ({ posts, handleAddToBookMarked, handleTotalReadingTime }) => {
  return (
    <div className="col-span-2 flex flex-col gap-10">
      {posts.map((post) => (
        <Blog
          post={post}
          key={post.id}
          handleAddToBookMarked={handleAddToBookMarked}
          handleTotalReadingTime={handleTotalReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  posts: PropTypes.array.isRequired,
  handleAddToBookMarked: PropTypes.func.isRequired,
  handleTotalReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
