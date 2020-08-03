import * as React from "react";
import {Review as ReviewType} from "../../types/types";

interface Props {
  review: ReviewType;
}

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {text, rate, userName, date, avatar} = props.review;
  const dateFormat = new Date(date);
  const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.floor(rate) / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date.toString()}>{`${monthNames[dateFormat.getMonth()]} ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`}</time>
      </div>
    </li>
  );
};

export default Review;
