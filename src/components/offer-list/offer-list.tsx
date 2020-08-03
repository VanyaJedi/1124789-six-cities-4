import * as React from "react";
import Offer from "../offer/offer";
import {getSortedOffers} from "../../utils";
import {Offer as OfferType} from "../../types/types";

interface Props {
  offers: OfferType[];
  onHoveredOffer?: () => void;
  onClickOffer?: () => void;
  sortType?: string;
  currentOffer?: OfferType;
  addToFavorites: () => void;
}

const OfferList: React.FunctionComponent<Props> = ({offers, onHoveredOffer, onClickOffer, sortType, currentOffer, addToFavorites}: Props) => {
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


export default OfferList;
