import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";

const StartRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <li key={idx} className="d-flex pl-2 text-cyan-500 text-lg">
        {rating >= idx + 1 ? (
          <BsStarFill />
        ) : rating >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });

  return (
    <ul className=" absolute flex items-start right-3 bottom-4  text-green">
      {stars}
    </ul>
  );
};

StartRating.prototype = {
  rating: PropTypes.number,
};

export default StartRating;
