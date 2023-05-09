import React from 'react';

function Title({ text, highlight }) {
  return (
    <div class='section-title'>
      <h2>
        {text} <span>{highlight}</span>
      </h2>
    </div>
  );
}

export default Title;
