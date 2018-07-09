import React from 'react';

import QuoteText from './QuoteText/QuoteText';
import QuoteAuthor from './QuoteAuthor/QuoteAuthor';
import NewQuote from './NewQuote/NewQuote';
import ShareQuote from './ShareQuote/ShareQuote';


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {
        text: 'The person who says it cannot be done should not interrupt the person who is doing it.',
        author: 'Chinese Proverb'
      }
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      quote: {
        text: 'A truly rich man is one whose children run into his arms when his hands are empty.',
        author: 'Unknown'
      }
    });
  }

  render() {
    return (
      <div>
        <QuoteText quoteText={this.state.quote.text} />
        <QuoteAuthor quoteAuthor={this.state.quote.author} />
        <NewQuote handleClick={this.getNewQuote} />
        <ShareQuote />
      </div>
    );
  }

};

export default QuoteBox;