import React from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from 'prop-types';
import {offerType} from "../../types/dataTypes.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {property} from "../../mock/data.js";

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleHoverOffer = this.handleHoverOffer.bind(this);
    this.handleClickOffer = this.handleClickOffer.bind(this);
    this.state = {
      hoveredOffer: null,
      currentOffer: null
    };
  }

  handleHoverOffer(offer) {
    this.setState({
      hoveredOffer: offer
    });
  }

  handleClickOffer(offer) {
    this.setState({
      currentOffer: offer
    });

  }

  _renderApp() {
    return (
      <Main
        offers={this.props.offers}
        onHoveredOffer={this.handleHoverOffer}
        onClickOffer={this.handleClickOffer}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/offer">
            <Property property={property}/>
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
  property: offerType
};

export default App;
