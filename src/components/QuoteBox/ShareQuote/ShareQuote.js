import React from 'react';

const ShareQuote = (props) => {
  return (
    <a
      href={'https://twitter.com/intent/tweet?text=' + props.quote + ' - ' + props.author}
      target="_blank">
      Tweet this quote!
    </a>
  );
};

export default ShareQuote;