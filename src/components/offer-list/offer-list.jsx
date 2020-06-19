import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredOfferIndex: -1
    };
    this._handlerHoverOffer = this._handlerHoverOffer.bind(this);
  }

  _handlerHoverOffer(evt) {
    const targetElem = evt.target.closest(`.place-card`);
    const indexOffer = Array.from(targetElem.parentNode.children).indexOf(targetElem);
    this.setState({
      hoveredOfferIndex: indexOffer
    });
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.offers.map((offer) => {
          return <Offer key={offer.id}
            offer={offer}
            onHover={this._handlerHoverOffer}
          />;
        })}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        cost: PropTypes.string.isRequired,
      })
  )
};
