import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {offerType, reviewType, cityType, userType} from "../../types/dataTypes.js";
import {Route, Switch, Router} from 'react-router-dom';
import {ActionCreator as ActionCreatorApp} from "../../reducer/app/app.js";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {getHoveredOfferId, getCurrentOffer, getSortType} from "../../reducer/app/selectors.js";
import {getCity, getReviews, getFilteredOffers, getCities, getNearbyOffers} from "../../reducer/data/selectors.js";
import {getUser} from "../../reducer/user/selectors.js";
import history from "../../history";
import {AppRoute} from "../../constants.js";
import {Link} from 'react-router-dom';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {
      user,
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
      cities,
      addComment,
      nearbyOffers,
      addToFavorites
    } = this.props;

    if (!currentOffer) {
      return (
        <Main
          user={user}
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
          addToFavorites={addToFavorites}
        />
      );
    }
    return <Property
      user={user}
      offers={nearbyOffers}
      offer={currentOffer}
      reviews={reviews}
      addComment={addComment}
      addToFavorites={addToFavorites}
    />;
  }

  render() {
    const {login, user} = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderApp()}
          </Route>
          <Route exact path={AppRoute.SIGNIN}>
            <SignIn loginHandler={login}/>
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <Favorites user={user}/>
          </Route>
          <Route render={() => {
            return (<React.Fragment>
              <h1>404 page not found</h1>
              <Link to="/">go to main page</Link>
            </React.Fragment>);
          }}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  login: PropTypes.func,
  showAuthScreen: PropTypes.func,
  authScreen: PropTypes.bool,
  authorizationStatus: PropTypes.string,
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
  addComment: PropTypes.func,
  nearbyOffers: PropTypes.arrayOf(offerType),
  user: userType,
  addToFavorites: PropTypes.func
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  city: getCity(state),
  cities: getCities(state),
  offers: getFilteredOffers(state),
  currentOffer: getCurrentOffer(state),
  reviews: getReviews(state),
  hoveredOfferId: getHoveredOfferId(state),
  sortType: getSortType(state),
  nearbyOffers: getNearbyOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  showAuthScreen(isAuth) {
    dispatch(ActionCreatorApp.showAuthScreen(isAuth));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onHoveredOffer(offer) {
    dispatch(ActionCreatorApp.hoverOffer(offer));
  },
  onClickOffer(offer) {
    dispatch(DataOperation.loadNearbyOffers(offer.id));
    dispatch(DataOperation.getComments(offer.id));
    dispatch(ActionCreatorApp.getCurrentOffer(offer));
  },
  onClickCity(city) {
    dispatch(ActionCreatorData.changeCity(city));
  },
  onChangeSortType(sortType) {
    dispatch(ActionCreatorApp.changeSortType(sortType));
  },
  addComment(commentData) {
    dispatch(DataOperation.addComment(commentData));
  },
  addToFavorites(data) {
    dispatch(DataOperation.addToFavorites(data));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

