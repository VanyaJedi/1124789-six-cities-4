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
    this._markers = [];
  }

  _getActulaIcon(offer, currentOffer, hoveredOfferId) {
    if (currentOffer) {
      return offer.id === currentOffer.id ? activeIcon : icon;
    }
    return offer.id === hoveredOfferId ? activeIcon : icon;
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

  _renderPins(props) {
    const {offers, currentOffer, hoveredOfferId} = props;
    this._markers.forEach((marker) => {
      this._map.removeLayer(marker);
    });
    offers.forEach((offer) => {
      const actualIcon = this._getActulaIcon(offer, currentOffer, hoveredOfferId);
      const marker = leaflet
       .marker(offer.coordinates, {icon: actualIcon})
       .addTo(this._map);
      this._markers.push(marker);
    });
  }

  componentDidMount() {
    this._initMap();
    this._renderPins(this.props);
  }

  componentDidUpdate() {
    this._renderPins(this.props);
    this._map.setView(this.props.city.cityCoord, this.props.city.zoom);

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
