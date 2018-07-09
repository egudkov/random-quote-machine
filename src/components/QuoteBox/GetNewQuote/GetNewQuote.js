import React from 'react';

const GetNewQuote = (props) => {
  return (
    <button onClick={props.handleClick}>
      New quote
    </button>
  );
};

export default GetNewQuote;