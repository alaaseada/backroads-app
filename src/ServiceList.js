import React from 'react';
import Service from './Service';
import Title from './Title';
import { services } from './data';

function ServiceList() {
  let services_list = services.map((service, index) => {
    return <Service key={`service-${index}`} {...service} />;
  });
  return (
    <section class='section services' id='services'>
      <Title text='our' highlight='services' />
      <div class='section-center services-center'>{services_list}</div>
    </section>
  );
}

export default ServiceList;
