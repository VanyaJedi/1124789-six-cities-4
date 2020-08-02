import * as React from "react";
import {AppRoute} from "../../constants";
import {Link} from 'react-router-dom';
import {Offer as OfferType} from "../../types/types";


interface Props {
  onHoveredOffer: (arg: string) => void;
  onClickOffer: (arg: OfferType) => void;
  offer: OfferType;
  currentOffer: OfferType;
  addToFavorites: (arg: {id: string; status: number}) => void;
}


const Offer: React.FunctionComponent<Props> = ({offer, onHoveredOffer, onClickOffer, currentOffer, addToFavorites}: Props) => {
  const {title, img, cost, type, rate, isPrime} = offer;
  return (
    <article className={currentOffer ? `near-places__card place-card` : `cities__place-card place-card` }
      onMouseEnter={() => {
        if (onHoveredOffer) {
          onHoveredOffer(offer.id);
        }
      }}
      onMouseLeave={()=>{
        if (onHoveredOffer) {
          onHoveredOffer(null);
        }
      }}
    >
     {isPrime ? <div className="place-card__mark">
        <span>Premium</span>
      </div>: null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              const data = {
                id: offer.id,
                status: offer.isFav ? 0 : 1
              };
              addToFavorites(data);
            }}
            className={`place-card__bookmark-button button ${offer.isFav ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.floor(rate) / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${offer.id}`} onClick={
            () => {
              onClickOffer(offer);
            }
          }>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Offer;
