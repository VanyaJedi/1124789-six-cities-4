import React from "react";
import PropTypes from 'prop-types';
import {offerType} from "../../types/dataTypes.js";

const Offer = ({offer, onHoveredOffer, onClickOffer}) => {
  const {title, img, cost, type, rate} = offer;
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        onHoveredOffer(offer);
      }}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
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
          <button className="place-card__bookmark-button button" type="button">
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
          <a href="/offer" onClick={
            () => {
              onClickOffer(offer);
            }
          }>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  onHoveredOffer: PropTypes.func.isRequired,
  onClickOffer: PropTypes.func.isRequired,
  offer: offerType
};

export default Offer;
