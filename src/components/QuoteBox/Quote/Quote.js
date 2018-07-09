import React from 'react';

const Quote = (props) => {
  return (
    <div>
      <p>{props.quote}</p>
      <p>- {props.author}</p>
    </div>
  );
};

export default Quote;