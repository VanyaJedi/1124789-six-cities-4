import * as React from "react";
import {Sort as SortType} from "../../types/types";
interface Props {
  onChangeSortType: (arg: string) => void;
  opened: boolean;
  onClickHandler: () => void;
  sortTypeMapping: SortType[];
  sortType: string;
}

const Sort = (props: Props)=> {
  const {onChangeSortType, opened, onClickHandler, sortTypeMapping, sortType} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={onClickHandler}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`}
      >
        {sortTypeMapping.map((sortObj)=> {
          return <li key={sortObj.id}
            data-sortype={sortObj.type}
            className={`places__option ${sortType === sortObj.type ? `places__option--active` : ``}`}
            onClick={() => {
              onChangeSortType(sortObj.type);
            }}>{sortObj.text}</li>;
        })}
      </ul>
    </form>
  );
};


export default Sort;
