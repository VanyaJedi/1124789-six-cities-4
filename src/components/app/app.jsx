import React from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {offerType} from "../../types/dataTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {actionCreator} from "../../reducer.js";


import {offers as _offers, reviews} from "../../mock/data.js";
import {connect} from "react-redux";
class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {
      city,
      offers,
      onHoveredOffer,
      onClickOffer,
      onClickCity,
      currentOffer
    } = this.props;


    if (!currentOffer) {
      return (
        <Main
          city={city}
          offers={offers}
          onHoveredOffer={onHoveredOffer}
          onClickOffer={onClickOffer}
          onClickCity={onClickCity}
          currentOffer={currentOffer}
        />
      );
    }
    return <Property offer={currentOffer}/>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Property
              offer={_offers[0]}
              reviews={reviews}
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
  currentOffer: offerType
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  currentOffer: state.currentOffer
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
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

