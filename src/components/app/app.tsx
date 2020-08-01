import * as React from "react"
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import Property from "../property/property";
import PropTypes from 'prop-types';
import {offerType, reviewType, cityType, userType} from "../../types/dataTypes";
import {Route, Switch, Router} from 'react-router-dom';
import {ActionCreator as ActionCreatorApp} from "../../reducer/app/app";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getHoveredOfferId, getCurrentOffer, getSortType} from "../../reducer/app/selectors";
import {getCity, getReviews, getFilteredOffers, getCities, getNearbyOffers, getFavorites} from "../../reducer/data/selectors";
import {getUser} from "../../reducer/user/selectors";
import {AppRoute} from "../../constants";
import {Link} from 'react-router-dom';
import history from "../../history";

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      login,
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
      addToFavorites,
      favorites
    } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
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
          </Route>
          <Route path={AppRoute.SIGNIN} exact>
            <SignIn loginHandler={login}/>
          </Route>
          <Route path={AppRoute.FAVORITES} exact>
            {favorites.length ? <Favorites user={user} favorites={favorites}/> : <FavoritesEmpty user={user}/>}
          </Route>
          <Route
            path={`${AppRoute.OFFER}/:id`}
            exact
            render={(props) => {
              const offerId = props.match.params.id;
              const offer = offers.find((el) => el.id === offerId);
              return (
                <Property
                  user={user}
                  offers={nearbyOffers}
                  offer={offer}
                  reviews={reviews}
                  addComment={addComment}
                  addToFavorites={addToFavorites}
                />
              );
            }}
          />
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
  addToFavorites: PropTypes.func,
  favorites: PropTypes.arrayOf(offerType)
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
  nearbyOffers: getNearbyOffers(state),
  favorites: getFavorites(state)
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

