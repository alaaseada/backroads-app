import React from 'react';
import Tour from './Tour';
import { tours } from './data';
import Title from './Title';

function TourCards() {
  let tour_cards = tours.map((tour, index) => {
    return <Tour key={`tour-${index}`} {...tour} />;
  });
  return (
    <section className='section' id='tours'>
      <Title text='featured' highlight='tours' />
      <div className='section-center featured-center'>{tour_cards}</div>
    </section>
  );
}

export default TourCards;
