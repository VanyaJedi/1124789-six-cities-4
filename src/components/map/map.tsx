import * as React from "react";
import * as leaflet from 'leaflet';
import {Offer, City} from "../../types/types";
import {LatLngExpression} from "leaflet";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

interface Props {
  offers: Offer[];
  currentOffer: Offer;
  city: City;
  hoveredOfferId?: string;
}

interface Options {
  center: LatLngExpression;
  zoom: number;
  zoomControl: boolean;
  marker?: boolean;
}

export default class Map extends React.PureComponent<Props, {}> {
  private _mapRef: React.RefObject<HTMLDivElement>;
  private _map: leaflet.Map;
  private _markers: leaflet.Marker[];

  constructor(props) {
    super(props);
    this._map = null;
    this._mapRef = React.createRef();
    this._markers = [];
  }

  componentDidMount() {
    this._initMap();
    this._renderPins(this.props);
  }

  componentDidUpdate() {
    this._renderPins(this.props);
    this._map.setView(this.props.city.cityCoord, this.props.city.zoom);
  }

  _getActulaIcon(offer, hoveredOfferId) {
    return offer.id === hoveredOfferId ? activeIcon : icon;
  }

  _initMap() {
    const options: Options = {
      center: this.props.city.cityCoord,
      zoom: this.props.city.zoom,
      zoomControl: false,
      marker: true
    };

    this._map = leaflet.map(this._mapRef.current, options);
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
      const actualIcon = this._getActulaIcon(offer, hoveredOfferId);
      const marker = leaflet
       .marker(offer.coordinates, {icon: actualIcon})
       .addTo(this._map);
      this._markers.push(marker);
    });

    if (currentOffer) {
      const marker = leaflet
       .marker(currentOffer.coordinates, {icon: activeIcon})
       .addTo(this._map);
      this._markers.push(marker);
    }
  }

  render() {
    return <div ref={this._mapRef} id="map" style={{height: `100%`, width: `100%`}}></div>;
  }
}
