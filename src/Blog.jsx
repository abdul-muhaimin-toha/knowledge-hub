import user from "./assets/Abdul Muhaimin Toha.jpg";
import PropTypes from "prop-types";

function Blog() {
  return (
    <div className="flex flex-col gap-4">
      <img src="blog-cover.png" alt="Blog Cover" className=" w-full " />
      <div className="flex items-stretch justify-between py-4">
        <div className="flex items-center gap-4  ">
          <img
            src={user}
            alt=""
            className="h-12 w-12 rounded-full object-contain"
          />
          <div className="flex flex-col ">
            <h5 className="text-2xl font-bold">Muhaimin Toha</h5>
            <p className="text-sm font-semibold">Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className="flex items-center gap-2  ">
          <p className="text-base font-medium ">05 min read</p>
          <button>B</button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">
        How to get your first job as a self-taught programmer
      </h2>
      <div className="mt-2 flex gap-4">
        <p>#beginners</p>
        <p>#Programming</p>
      </div>
      <div>
        <button className="font-semibold text-fuchsia-700 underline">
          Mark as Read
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {};

export default Blog;
