// TODO: add and export your own actions
import campusList from '../fake_db';

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: campusList
  };
}

export function setActiveCity(city) {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city
  }
}