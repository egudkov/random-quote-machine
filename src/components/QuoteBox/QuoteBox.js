import React from 'react';

import QuoteText from './QuoteText/QuoteText';
import QuoteAuthor from './QuoteAuthor/QuoteAuthor';
import NewQuote from './NewQuote/NewQuote';
import ShareQuote from './ShareQuote/ShareQuote';


const QuoteBox = () => {
  const quoteText = "The person who says it cannot be done should not interrupt the person who is doing it.";
  const quoteAuthor = "Chinese Proverb";

  return (
    <div>
      <QuoteText quoteText={quoteText} />
      <QuoteAuthor quoteAuthor={quoteAuthor} />
      <NewQuote />
      <ShareQuote />
    </div>
  );
};

export default QuoteBox;