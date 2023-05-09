import tour_1 from './images/tour-1.jpeg';
import tour_2 from './images/tour-2.jpeg';
import tour_3 from './images/tour-3.jpeg';
import tour_4 from './images/tour-4.jpeg';

export let tours = [
  {
    id: 1,
    image: tour_1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    period: '6 days',
    price: 1200,
  },
  {
    id: 2,
    image: tour_2,
    date: 'october 1th, 2020',
    title: 'best of java',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    period: '11 days',
    price: 1400,
  },
  {
    id: 3,
    image: tour_3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    period: '8 days',
    price: 5000,
  },
  {
    id: 4,
    image: tour_4,
    date: 'december 5th, 2019',
    title: 'Kenya highlights',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    period: '20 days',
    price: 3300,
  },
];

export const nav_icons = [
  {
    id: 1,
    text: 'facebook',
    url: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    text: 'twitter',
    url: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    text: 'squarespace',
    url: 'https://www.squarespace.com/',
    icon: 'fab fa-squarespace',
  },
];

export const nav_links = [
  { id: 1, text: 'home', url: '#home' },
  { id: 2, text: 'about', url: '#about' },
  { id: 3, text: 'services', url: '#services' },
  { id: 4, text: 'tours', url: '#tours' },
];

export const services = [
  {
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'wallet',
  },
  {
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'tree',
  },
  {
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    icon: 'socks',
  },
];
