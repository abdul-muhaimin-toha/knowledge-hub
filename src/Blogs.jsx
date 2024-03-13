import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="col-span-2 flex flex-col gap-10">
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
    </div>
  );
};

Blogs.propTypes = {};

export default Blogs;
