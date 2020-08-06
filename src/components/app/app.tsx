import * as React from "react";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import Property from "../property/property";
import Error from "../error/error";
import {Route, Switch, Router, Redirect} from 'react-router-dom';
import {ActionCreator as ActionCreatorApp} from "../../reducer/app/app";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getHoveredOfferId, getCurrentOffer, getSortType, getSubmitingStatus, getLoadingStatus, getErrorStatus} from "../../reducer/app/selectors";
import {getCity, getReviews, getFilteredOffers, getCities, getNearbyOffers, getFavorites, getOffers} from "../../reducer/data/selectors";
import {getUser} from "../../reducer/user/selectors";
import {AppRoute} from "../../constants";
import {Link} from 'react-router-dom';
import history from "../../history";
import PrivateRoute from "../private-route/private-route";
import {Offer, City, Review, User} from "../../types/types";

interface Props {
  login: () => Promise<void>;
  offers: Offer[];
  offer: Offer;
  city: City;
  onHoveredOffer: () => void;
  onClickOffer: () => void;
  onClickCity: () => void;
  onChangeSortType: () => void;
  currentOffer: Offer;
  reviews: Review[];
  hoveredOfferId: string;
  sortType: string;
  cities: City[];
  addComment: () => Promise<boolean>;
  nearbyOffers: Offer[];
  user: User;
  addToFavorites: () => void;
  favorites: Offer[];
  isLoading: boolean;
  changeSubmiting: () => void;
  isSubmiting: boolean;
  totalOffers: Offer[];
  isError: boolean;
}

const App: React.FunctionComponent<Props> = (props: Props) => {

  const {
    login,
    user,
    city,
    offers,
    reviews,
    onHoveredOffer,
    onClickOffer,
    onClickCity,
    hoveredOfferId,
    sortType,
    onChangeSortType,
    cities,
    addComment,
    nearbyOffers,
    addToFavorites,
    favorites,
    isLoading,
    changeSubmiting,
    isSubmiting,
    totalOffers,
    isError
  } = props;

  return (
    isLoading ? null : (
      <Router history={history}>
        {isError ? <Error/> : null}
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <Main
              user={user}
              city={city}
              offers={offers}
              hoveredOfferId={hoveredOfferId}
              onHoveredOffer={onHoveredOffer}
              onClickOffer={onClickOffer}
              onClickCity={onClickCity}
              currentOffer={null}
              onChangeSortType={onChangeSortType}
              sortType={sortType}
              cities={cities}
              addToFavorites={addToFavorites}
            />
          </Route>
          <Route path={AppRoute.SIGNIN} exact>
            {user ? <Redirect to={AppRoute.ROOT}/> : <SignIn loginHandler={login}/>}
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            component={Favorites}
            user={user}
            render={() => {
              return (
                favorites.length ? <Favorites user={user} favorites={favorites}/> : <FavoritesEmpty user={user}/>
              );
            }}
          />
          <Route
            path={`${AppRoute.OFFER}/:id`}
            exact
            render={(propsHst) => {
              const offerId = propsHst.match.params.id;
              const offer = totalOffers.find((el) => el.id === offerId);
              return (
                <Property
                  user={user}
                  offers={nearbyOffers}
                  offer={offer}
                  reviews={reviews}
                  addComment={addComment}
                  addToFavorites={addToFavorites}
                  changeSubmiting={changeSubmiting}
                  isSubmiting={isSubmiting}
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
      </Router>)
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  city: getCity(state),
  cities: getCities(state),
  offers: getFilteredOffers(state),
  totalOffers: getOffers(state),
  currentOffer: getCurrentOffer(state),
  reviews: getReviews(state),
  hoveredOfferId: getHoveredOfferId(state),
  sortType: getSortType(state),
  nearbyOffers: getNearbyOffers(state),
  favorites: getFavorites(state),
  isLoading: getLoadingStatus(state),
  isSubmiting: getSubmitingStatus(state),
  isError: getErrorStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  showAuthScreen(isAuth) {
    dispatch(ActionCreatorApp.showAuthScreen(isAuth));
  },
  login(authData) {
    return dispatch(UserOperation.login(authData));
  },
  onHoveredOffer(offer) {
    dispatch(ActionCreatorApp.hoverOffer(offer));
  },
  onClickOffer(offer) {
    dispatch(DataOperation.loadNearbyOffers(offer.id))
      .then(()=> dispatch(DataOperation.getComments(offer.id)))
      .then(()=> dispatch(ActionCreatorApp.getCurrentOffer(offer)));
  },
  onClickCity(city) {
    dispatch(ActionCreatorData.changeCity(city));
  },
  onChangeSortType(sortType) {
    dispatch(ActionCreatorApp.changeSortType(sortType));
  },
  addComment(commentData) {
    return dispatch(DataOperation.addComment(commentData));
  },
  addToFavorites(data) {
    dispatch(DataOperation.addToFavorites(data));
  },
  changeSubmiting(status) {
    dispatch(ActionCreatorApp.changeSubmiting(status));
  },


});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

