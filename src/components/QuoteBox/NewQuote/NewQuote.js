import React from 'react';

const NewQuote = (props) => {
  return (
    <button onClick={props.handleClick}>
      New quote
    </button>
  );
};

export default NewQuote;