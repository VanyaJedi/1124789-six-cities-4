import * as React from 'react';
import {Subtract} from "utility-types";

const FORM_CONSTRAINTS = {
  MIN: 50,
  MAX: 300,
};


interface State {
  review: string;
  rating: number;
  isValidForm: boolean;
  isError: boolean;
}

interface InjectingProps {
  addComment: (arg: string) => Promise<boolean>;
  offerId: string;
}


const withForm = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithForm extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: 0,
        isValidForm: false,
        isError: false
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate() {
      const {rating, review} = this.state;
      const isValidText = review.length >= FORM_CONSTRAINTS.MIN && review.length < FORM_CONSTRAINTS.MAX;
      const isValidForm = isValidText && !!rating;
      this.setState({isValidForm});
    }

    handleSubmit(evt) {
      evt.preventDefault();

      const {addComment, offerId} = this.props;
      const {review, rating} = this.state;

      const dataToSend = {
        id: offerId,
        comment: review,
        rating,
      };

      addComment(dataToSend)
      .then((res)=> {
        if (res) {
          this.reset();
        }
      });
    }

    reset() {
      this.setState({
        review: ``,
        rating: 0
      }, this.validate);
    }

    handleInputChange(evt) {
      const {name, value} = evt.target;

      this.setState({
        [name]: value
      } as Pick<State, keyof State>,
      this.validate);
    }


    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
