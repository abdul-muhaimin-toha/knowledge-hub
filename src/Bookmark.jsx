import PropTypes from "prop-types";

function Bookmark({ bookMarked }) {
  return (
    <div className="self-stretch rounded-lg bg-white p-3">
      <h6 className="text-lg font-semibold">{bookMarked}</h6>
    </div>
  );
}

Bookmark.propTypes = {
  bookMarked: PropTypes.string.isRequired,
};

export default Bookmark;
