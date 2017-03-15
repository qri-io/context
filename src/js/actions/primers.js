import { CALL_API } from '../middleware/api';
import Schemas from '../schemas';

export const PRIMERS_FETCH_REQUEST = "PRIMERS_FETCH_REQUEST";
export const PRIMERS_FETCH_SUCCESS = "PRIMERS_FETCH_SUCCESS";
export const PRIMERS_FETCH_FAILURE = "PRIMERS_FETCH_FAILURE";

export function fetchPrimers(page = 1, pageSize = 25) {
  return {
    [CALL_API]: {
      types: [PRIMERS_FETCH_REQUEST, PRIMERS_FETCH_SUCCESS, PRIMERS_FETCH_FAILURE],
      schema: Schemas.PRIMER,
      endpoint: '/primers',
      data: { page, pageSize },
    },
  };
}

export function loadPrimers(page = 1, pageSize = 25) {
  return (dispatch) => {
    // TODO - add pagination & pagination check
    return dispatch(fetchPrimers(page, pageSize));
  };
}


export const PRIMER_FETCH_REQUEST = "PRIMER_FETCH_REQUEST";
export const PRIMER_FETCH_SUCCESS = "PRIMER_FETCH_SUCCESS";
export const PRIMER_FETCH_FAILURE = "PRIMER_FETCH_FAILURE";

export function fetchPrimer(host = "") {
  return {
    [CALL_API]: {
      types: [PRIMER_FETCH_REQUEST, PRIMER_FETCH_SUCCESS, PRIMER_FETCH_FAILURE],
      schema: Schemas.PRIMER_ARRAY,
      endpoint: '/primers',
      data: { host },
    },
  };
}

export function loadPrimer(url = "") {
  return (dispatch) => {
    // TODO - check for local url copy via getState
    return dispatch(fetchPrimer(url));
  };
}
