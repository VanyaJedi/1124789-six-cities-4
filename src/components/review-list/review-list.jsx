import React from "react";
import Review from "../review/review.jsx";
import {reviewType} from "../../types/dataTypes.js";
import PropTypes from "prop-types";


const ReviewList = ({reviews}) => {

  const reviewsToShow = reviews.slice().sort((prev, curr) => {
    if (prev.date > curr.date) {
      return -1;
    } else if (prev.date < curr.date) {
      return 1;
    }
    return 0;
  })
  .slice(0, 9);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <div className="reviews__list">
        {
          reviewsToShow.map((review) => {
            return <Review key={review.id}
              text={review.text}
              rate={review.rate}
              userName={review.userName}
              date={review.date}
            />;
          })
        }
      </div>
    </React.Fragment>
  );
};
ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
      reviewType
  ),
};

export default ReviewList;
