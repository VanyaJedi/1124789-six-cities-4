import {LatLngExpression} from "leaflet";


interface Owner {
    avatar: string,
    name: string,
    isSuper: string,
}

export interface City {
  name: string,
  cityCoord: LatLngExpression,
  zoom: number
}

export interface Offer {
  id: string,
  img: string,
  images: string[],
  title: string,
  desc: string,
  isPrime: boolean,
  type: string,
  rate: number,
  bedAmount: number,
  maxAdults: number,
  cost: string,
  houseItems: string[],
  owner: Owner,
  city: City,
  coordinates: number[],
  isFav: boolean
}

export interface Review {
  id: string,
  text: string,
  rate: number,
  userName: string,
  date: Date,
  avatar: string,
  isPro: boolean
}

export interface User {
  id: number
  email: string
  name: string
  avatar: string
  isPro:boolean
}

export interface Sort {
  id: string,
  type: string,
  text: string
}

