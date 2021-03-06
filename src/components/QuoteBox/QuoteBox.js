import React from 'react';

import Quote from './Quote/Quote';
import GetNewQuote from './GetNewQuote/GetNewQuote';
import ShareQuote from './ShareQuote/ShareQuote';


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    };

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount() {
    this.getNewQuote();
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
    const styles = {
      width: "450px",
      backgroundColor: "white",
      boxSizing: "border-box",
      padding: "20px",
      border: "1px solid grey",
      borderRadius: "10px"
    };

    return (
      <div style={styles}>
        <Quote quote={this.state.quote} author={this.state.author} />
        <GetNewQuote handleClick={this.getNewQuote} />
        <ShareQuote quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }

};

export default QuoteBox;