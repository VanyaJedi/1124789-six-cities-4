import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";
import {offerType} from "../../types/dataTypes.js";


const OfferList = ({offers, onHoveredOffer, onClickOffer}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <Offer key={offer.id}
          offer={offer}
          onHoveredOffer={onHoveredOffer}
          onClickOffer={onClickOffer}
        />;
      })}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ),
  onHoveredOffer: PropTypes.func,
  onClickOffer: PropTypes.func
};

export default OfferList;
