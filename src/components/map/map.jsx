import React from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";
import {offerType} from "../../types/dataTypes.js";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._mapRef = React.createRef();
  }

  _initMap() {
    this._map = leaflet.map(this._mapRef.current, {
      center: this.props.city.cityCoord,
      zoom: this.props.city.zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(this.props.city.cityCoord, this.props.city.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  _renderPins() {
    const {offers, currentOffer} = this.props;

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, (currentOffer ? offer.id === (currentOffer.id) : false) ? {activeIcon} : {icon})
        .addTo(this._map);
    });
  }

  componentDidMount() {
    this._initMap();
    this._renderPins();
  }

  render() {
    return <div ref={this._mapRef} id="map" style={{height: `100%`, width: `100%`}}></div>;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      offerType
  ),
  currentOffer: offerType,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,

};
