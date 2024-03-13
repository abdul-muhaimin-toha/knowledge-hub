import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

Bookmarks.propTypes = {};

function Bookmarks(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-5">
      <h4 className="text-2xl font-bold">Bookmarked Blogs: 8</h4>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
    </div>
  );
}

export default Bookmarks;
