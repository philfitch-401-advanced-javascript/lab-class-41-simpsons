import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';
import { setQuotePromise } from '../actions/simpsonsActions';
import { getQuote } from '../selectors/quoteSelector';

export default function DisplayQuote() {
  const quote = useSelector(getQuote);
  const dispatch = useDispatch();

  const loadQuotes = () => dispatch(setQuotePromise());

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <>
      <Quote quote={quote} />
      <Load load={loadQuotes} />
    </>
  );
}
