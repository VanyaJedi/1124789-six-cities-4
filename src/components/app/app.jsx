import React from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {offerType, reviewType, cityType} from "../../types/dataTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {actionCreator as actionCreatorApp} from "../../reducer/app/app.js";
import {actionCreator as actionCreatorData} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {getHoveredOfferId, getCurrentOffer, getSortType} from "../../reducer/app/selectors.js";
import {getCity, getReviews, getFilteredOffers, getCities} from "../../reducer/data/selectors.js";


class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {
      city,
      offers,
      reviews,
      onHoveredOffer,
      onClickOffer,
      onClickCity,
      currentOffer,
      hoveredOfferId,
      sortType,
      onChangeSortType,
      cities
    } = this.props;

    if (!currentOffer) {
      return (
        <Main
          city={city}
          offers={offers}
          reviews={reviews}
          hoveredOfferId={hoveredOfferId}
          onHoveredOffer={onHoveredOffer}
          onClickOffer={onClickOffer}
          onClickCity={onClickCity}
          currentOffer={currentOffer}
          onChangeSortType={onChangeSortType}
          sortType={sortType}
          cities={cities}
        />
      );
    }
    return <Property offers={offers} offer={currentOffer} reviews={reviews}/>;
  }

  render() {
    const {offers, reviews, hoveredOfferId, onHoveredOffer} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Property
              offer={offers[0]}
              offers={offers}
              reviews={reviews}
              hoveredOfferId={hoveredOfferId}
              onHoveredOffer={onHoveredOffer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ).isRequired,
  offer: offerType,
  city: cityType,
  onHoveredOffer: PropTypes.func.isRequired,
  onClickOffer: PropTypes.func.isRequired,
  onClickCity: PropTypes.func.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
  currentOffer: offerType,
  reviews: PropTypes.arrayOf(reviewType),
  hoveredOfferId: PropTypes.string,
  sortType: PropTypes.string,
  cities: PropTypes.arrayOf(cityType),
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state),
  offers: getFilteredOffers(state),
  currentOffer: getCurrentOffer(state),
  reviews: getReviews(state),
  hoveredOfferId: getHoveredOfferId(state),
  sortType: getSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onHoveredOffer(offer) {
    dispatch(actionCreatorApp.hoverOffer(offer));
  },
  onClickOffer(offer) {
    dispatch(actionCreatorApp.getCurrentOffer(offer));
  },
  onClickCity(city) {
    dispatch(actionCreatorData.changeCity(city));
  },
  onChangeSortType(sortType) {
    dispatch(actionCreatorApp.changeSortType(sortType));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

