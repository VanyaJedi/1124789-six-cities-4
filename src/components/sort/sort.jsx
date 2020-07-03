import React from "react";
import PropTypes from "prop-types";

export default class Sort extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {opened: false};
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={()=> {
            this.setState((state) => {
              return {opened: !state.opened};
            });
          }}
        >
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul
          className={this.state.opened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`}
          onClick={(evt) => {
            const sortType = evt.target.dataset.sorttype;
            this.props.onChangeSortType(sortType);
          }}
        >
          <li data-sorttype="Popular" className="places__option places__option--active" tabIndex="0">Popular</li>
          <li data-sorttype="CostAsc" className="places__option" tabIndex="0">Price: low to high</li>
          <li data-sorttype="CostDesc" className="places__option" tabIndex="0">Price: high to low</li>
          <li data-sorttype="RateDesc" className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  onChangeSortType: PropTypes.func.isRequired
};
