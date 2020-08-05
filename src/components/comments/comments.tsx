import * as React from "react";
import {COMMENT_INPUTS} from '../../constants';

const FORM_CONSTRAINTS = {
  MIN: 50,
  MAX: 300,
};


interface Props {
  addComment: (params: {id: string; comment: string; rating: number}) => void;
  offerId: string;
  rating: number;
  isValidForm: boolean;
  changeRating: (arg: string) => void;
  changeFormStatus: (arg: boolean) => void;
}

class Comments extends React.PureComponent<Props, {}> {
  props: Props;
  private commentRef: React.RefObject<HTMLTextAreaElement>;
  private formRef: React.RefObject<HTMLFormElement>;
  private sendButtonRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
    this.formRef = React.createRef();
    this.sendButtonRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props.changeRating(null);
  }

  handleSubmit(evt) {
    const {addComment, offerId, rating, changeFormStatus, changeRating} = this.props;
    evt.preventDefault();

    const isValidText = this.commentRef.current.value.length >= FORM_CONSTRAINTS.MIN && this.commentRef.current.value.length <= FORM_CONSTRAINTS.MAX;
    if (isValidText && rating) {
      addComment({
        id: offerId,
        comment: this.commentRef.current.value,
        rating
      });
      this.formRef.current.reset();
      changeRating(null);
    } else {
      changeFormStatus(false);
    }
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        className="reviews__form form" action="#" method="post"
        style={this.props.isValidForm ? {} : {border: `1px solid red`}}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">

          {
            COMMENT_INPUTS.map((input) => {
              return (
                <React.Fragment key={input.id}>
                  <input
                    onChange={() => {
                      this.props.changeRating(input.value);
                    }}
                    className="form__rating-input visually-hidden"
                    name="rating" value={input.value}
                    id={input.htmlId} type="radio"/>
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
        <textarea ref={this.commentRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button ref={this.sendButtonRef} className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Comments;
