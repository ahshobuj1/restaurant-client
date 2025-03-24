import {Rating} from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import icon from '../assets/home/quote.png';

const RatingCard = ({review}) => {
  const {name, details, rating} = review;

  return (
    <div className="text-center mx-5">
      <Rating
        style={{maxWidth: 180}}
        className="mx-auto"
        value={rating}
        readOnly
      />

      <img src={icon} alt="icon" className="mx-auto my-10" />
      <p>{details}</p>
      <h2 className="text-yellow-400 text-2xl font-semibold uppercase mt-2">
        {name}
      </h2>
    </div>
  );
};

export default RatingCard;
