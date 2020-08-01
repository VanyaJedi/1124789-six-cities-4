import * as React from "react"
import ReviewList from "../review-list/review-list";
import {offerType, userType} from "../../types/dataTypes";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import {reviewType} from "../../types/dataTypes";
import PropTypes from "prop-types";
import Comments from "../comments/comments";
import Header from "../header/header";

const Property = ({user, offer, reviews, offers, addComment, addToFavorites}) => {
  const {images, title, isPrime, type, rate, bedAmount, maxAdults, cost, houseItems, owner, city} = offer;
  const {avatar, name, isSuper} = owner;
  return (
    <div className="page">
      <Header user={user}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => {
                return (
                  <div key={index + image} className="property__image-wrapper">
                    <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
                  </div>
                );
              })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{isPrime ? `Premium` : ``}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.floor(rate) / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedAmount}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{cost}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {houseItems.map((item, index) => {
                    return (
                      <li key={index + item} className="property__inside-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`/${avatar}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews}/>
                {user ? <Comments addComment={addComment} offerId={offer.id}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offers}
              currentOffer={offer}
              city={city}
            />

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={offers} addToFavorites={addToFavorites}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


Property.propTypes = {
  offer: offerType,
  reviews: PropTypes.arrayOf(
      reviewType
  ),
  offers: PropTypes.arrayOf(offerType),
  authorizationStatus: PropTypes.string,
  addComment: PropTypes.func,
  user: userType,
  addToFavorites: PropTypes.func
};


export default Property;

