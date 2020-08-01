import * as React from "react"
import PropTypes from 'prop-types';
import {commentInputs} from '../../constants';

class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.commentRef = React.createRef();
    this.formRef = React.createRef();
    this.sendButtonRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      rating: 0,
      incorrectFrom: false,
    };
  }

  handleSubmit(evt) {
    const {addComment, offerId} = this.props;
    evt.preventDefault();

    const isValidText = this.commentRef.current.value.length >= 50 && this.commentRef.current.value.length <= 300;
    if (isValidText && this.state.rating) {
      addComment({
        id: offerId,
        comment: this.commentRef.current.value,
        rating: this.state.rating
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

          {
            commentInputs.map((input) => {
              return (
                <React.Fragment key={input.id}>
                  <input
                    onChange={() => {
                      this.setState({
                        rating: input.value
                      });
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
