import { CURRENT_LOCATION } from '../constants/local';

export const getLocation = () => localStorage.getItem(CURRENT_LOCATION);
export const setLocation = pathName => localStorage.setItem(CURRENT_LOCATION, pathName);
export const clearLocation = pathName => localStorage.clear();