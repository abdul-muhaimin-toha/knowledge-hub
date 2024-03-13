import PropTypes from "prop-types";

function SpendTime({ readingTime }) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-cyan-200 px-4 py-8">
      <h4 className="text-xl font-bold">
        Spent time on read : {readingTime} min.
      </h4>
    </div>
  );
}

SpendTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};

export default SpendTime;
