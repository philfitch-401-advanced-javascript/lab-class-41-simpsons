import { fetchQuote } from '../services/simpsonsApi';
import { createAction } from 'promise-middleware-redux';

export const setQuote = () => dispatch => {
  dispatch({
    type: SET_QUOTE_LOADING
  });

  return fetchQuote()
    .then(quote => {
      dispatch({
        type: SET_QUOTE,
        payload: quote
      });

      dispatch({
        type: SET_QUOTE_DONE
      });
    });
};

export const [
  setQuotePromise,
  SET_QUOTE,
  SET_QUOTE_LOADING,
  SET_QUOTE_DONE
] = createAction('SET_QUOTE', fetchQuote);
