import * as React from "react"
import PropTypes from "prop-types";
import Offer from "../offer/offer";
import {offerType} from "../../types/dataTypes";
import {getSortedOffers} from "../../utils";

const OfferList = ({offers, onHoveredOffer, onClickOffer, sortType, currentOffer, addToFavorites}) => {
  const sortedOffers = getSortedOffers(sortType, offers);
  return (
    <div className={currentOffer ? `near-places__list places__list` : `cities__places-list places__list tabs__content`}>
      {sortedOffers.map((offer) => {
        return <Offer key={offer.id}
          offer={offer}
          onHoveredOffer={onHoveredOffer}
          onClickOffer={onClickOffer}
          currentOffer={currentOffer}
          addToFavorites={addToFavorites}
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
  onClickOffer: PropTypes.func,
  sortType: PropTypes.string,
  currentOffer: offerType,
  addToFavorites: PropTypes.func
};

export default OfferList;
