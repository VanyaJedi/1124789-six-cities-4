
import PropTypes from 'prop-types';

export const offerType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  isPrime: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  bedAmount: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
  houseItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }),
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const reviewType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
});

export const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  cityCoord: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
});

export const userType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  is_pro: PropTypes.bool.isRequired,
});

