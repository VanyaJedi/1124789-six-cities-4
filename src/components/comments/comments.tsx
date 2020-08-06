import * as React from "react";
import {COMMENT_INPUTS} from '../../constants';

interface Props {
  addComment: (params: {id: string; comment: string; rating: number}) => Promise<boolean>;
  offerId: string;
  onSubmit: () => void;
  onInputChange: () => void;
  isValidForm: boolean;
  review: string;
  rating: number;
  isSubmiting: boolean;
}

const Comments: React.FunctionComponent<Props> = (props: Props) => {

  const {onSubmit, onInputChange, isValidForm, review, rating, isSubmiting} = props;

  return (
    <form
      className="reviews__form form" action="#" method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          COMMENT_INPUTS.map((input) => {
            return (
              <React.Fragment key={input.id}>
                <input
                  onChange={onInputChange}
                  className="form__rating-input visually-hidden"
                  name="rating" value={input.value}
                  id={input.htmlId}
                  type="radio"
                  checked={input.value === rating}
                  disabled={isSubmiting}
                />
                <label htmlFor={input.htmlId} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }

      </div>
      <textarea disabled={isSubmiting} onChange={onInputChange} value={review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm || isSubmiting}
        >Submit
        </button>
      </div>
    </form>
  );
};

export default Comments;
