import React from "react";
import PropTypes from "prop-types";

const Sort = (props)=> {
  const {onChangeSortType, opened, onClickHandler, sortTypeMapping, sortType} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onClickHandler}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={opened ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`}
      >
        {sortTypeMapping.map((sortObj)=> {
          return <li key={sortObj.id}
            data-sortype={sortObj.type}
            className={sortType === sortObj.type ? `places__option places__option--active` : `places__option`}
            onClick={() => {
              onChangeSortType(sortObj.type);
            }}>{sortObj.text}</li>;
        })}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  onChangeSortType: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  sortTypeMapping: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  sortType: PropTypes.string.isRequired
};


export default Sort;
