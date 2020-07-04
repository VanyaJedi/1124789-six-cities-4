import React from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {offerType, reviewType} from "../../types/dataTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {actionCreator} from "../../reducer.js";
import {connect} from "react-redux";


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
      onChangeSortType
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
        />
      );
    }
    return <Property offer={currentOffer} reviews={reviews}/>;
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
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  onHoveredOffer: PropTypes.func.isRequired,
  onClickOffer: PropTypes.func.isRequired,
  onClickCity: PropTypes.func.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
  currentOffer: offerType,
  reviews: PropTypes.arrayOf(reviewType),
  hoveredOfferId: PropTypes.string,
  sortType: PropTypes.string
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  currentOffer: state.currentOffer,
  reviews: state.reviews,
  hoveredOfferId: state.hoveredOfferId,
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onHoveredOffer(offer) {
    dispatch(actionCreator.hoverOffer(offer));
  },
  onClickOffer(offer) {
    dispatch(actionCreator.getCurrentOffer(offer));
  },
  onClickCity(city) {
    dispatch(actionCreator.changeCity(city));
  },
  onChangeSortType(sortType) {
    dispatch(actionCreator.changeSortType(sortType));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

