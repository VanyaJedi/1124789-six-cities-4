
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
  })
});
