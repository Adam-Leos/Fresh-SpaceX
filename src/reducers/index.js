// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import companyData from './companyData';
import rocketsData from './rocketsData';
import launches from './launches';
import measurementSystem from './measurementSystem';
import mobileMenu from './mobileMenu';
import type { StoreType } from '../flowTypes/flowTypes';

const rootReducer: StoreType = combineReducers({
  companyData,
  rocketsData,
  launches,
  measurementSystem,
  mobileMenu,
  routing: routerReducer,
});

export default rootReducer;
