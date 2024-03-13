import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

function Bookmarks({ bookMarked }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-5">
      <h4 className="text-xl font-bold">
        Bookmarked Blogs: {bookMarked.length}
      </h4>
      {bookMarked.map((item, index) => (
        <Bookmark key={index} bookMarked={item}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookMarked: PropTypes.array.isRequired,
};

export default Bookmarks;
