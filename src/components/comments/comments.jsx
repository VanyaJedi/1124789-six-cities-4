import React from "react";
import PropTypes from 'prop-types';

class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
    this.formRef = React.createRef();
    this.sendButtonRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      incorrectFrom: false,
    };
  }

  handleSubmit(evt) {
    const {addComment, offerId} = this.props;
    evt.preventDefault();
    const inputs = this.formRef.current.querySelectorAll(`input`);
    let rating = 0;
    for (const input of inputs) {
      if (input.checked) {
        rating = input.value;
      }
    }

    const isValidText = this.commentRef.current.value.length >= 50 && this.commentRef.current.value.length <= 300;
    if (isValidText && rating) {
      addComment({
        id: offerId,
        comment: this.commentRef.current.value,
        rating
      });
      this.setState({incorrectFrom: false});
      this.formRef.current.reset();
    } else {
      this.setState({incorrectFrom: true});
    }
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        className="reviews__form form" action="#" method="post"
        style={this.state.incorrectFrom ? {border: `1px solid red`} : {}}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </div>
        <textarea ref={this.commentRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button ref={this.sendButtonRef} className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

Comments.propTypes = {
  addComment: PropTypes.func,
  offerId: PropTypes.string,

};


export default Comments;
