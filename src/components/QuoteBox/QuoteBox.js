import React from 'react';

import QuoteText from './QuoteText/QuoteText';
import QuoteAuthor from './QuoteAuthor/QuoteAuthor';
import NewQuote from './NewQuote/NewQuote';
import ShareQuote from './ShareQuote/ShareQuote';


const QuoteBox = () => {
  return (
    <div>
      <QuoteText />
      <QuoteAuthor />
      <NewQuote />
      <ShareQuote />
    </div>
  );
};

export default QuoteBox;