import user from "./assets/Abdul Muhaimin Toha.jpg";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

function Blog({ post, handleAddToBookMarked, handleTotalReadingTime }) {
  const [isBookMarked, setIsBookMarked] = useState(false);

  const {
    post_banner,
    user_img,
    author_name,
    posted_date,
    reading_time,
    post_title,
    hashtags,
  } = post;

  return (
    <div className="flex flex-col gap-4">
      <img
        src={post_banner || "blogs-cover.jpg"}
        alt="Blog Cover"
        className=" h-96 w-full object-cover "
      />
      <div className="flex items-stretch justify-between py-4">
        <div className="flex items-center gap-4  ">
          <img
            src={user_img || "user-default.jpg"}
            alt=""
            className="h-12 w-12 rounded-full border-4 border-black object-cover"
          />
          <div className="flex flex-col ">
            <h5 className="text-2xl font-bold">
              {author_name || "Unknown Author"}
            </h5>
            <p className="text-sm font-semibold">
              {posted_date || "Information Unavailable"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2  ">
          <p className="text-base font-medium ">
            {reading_time || "Information Unavailable"} minutes
          </p>
          <button
            onClick={() => {
              handleAddToBookMarked(post_title);
              setIsBookMarked(!isBookMarked);
            }}
          >
            {isBookMarked ? (
              <FaBookmark></FaBookmark>
            ) : (
              <FaRegBookmark></FaRegBookmark>
            )}
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold">{post_title}</h2>
      <div className="mt-2 flex gap-4">
        {hashtags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
      <div>
        <button
          onClick={() => handleTotalReadingTime(reading_time)}
          className="font-semibold text-fuchsia-700 underline"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  handleAddToBookMarked: PropTypes.func.isRequired,
  handleTotalReadingTime: PropTypes.func.isRequired,
};

export default Blog;
