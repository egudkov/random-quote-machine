import React from 'react';

import Quote from './Quote/Quote';
import NewQuote from './NewQuote/NewQuote';
import ShareQuote from './ShareQuote/ShareQuote';


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: 'The person who says it cannot be done should not interrupt the person who is doing it.',
      author: 'Chinese Proverb'
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(quoteObj => {
        this.setState({
          quote: quoteObj.quote,
          author: quoteObj.author
        });
      });
  }

  render() {
    return (
      <div>
        <Quote quote={this.state.quote} author={this.state.author} />
        <NewQuote handleClick={this.getNewQuote} />
        <ShareQuote />
      </div>
    );
  }

};

export default QuoteBox;