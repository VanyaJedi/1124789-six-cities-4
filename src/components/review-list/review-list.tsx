import * as React from "react";
import Review from "../review/review";
import {Review as ReviewType} from "../../types/types";

interface Props {
  reviews: ReviewType[];
}

const ReviewList: React.FunctionComponent<Props> = ({reviews}: Props) => {

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
              review={review}
            />;
          })
        }
      </div>
    </React.Fragment>
  );
};

export default ReviewList;
