import { Review } from '../types/review';


export const reviews: Review[] = [
  {
    offerId: 1,
    review: [{
      avatar: 'img/avatar-max.jpg',
      name: 'Maurice',
      message: 'A quiet and cozy place.',
      rate: 4,
      date: 'April 29',
    },
    {
      avatar: 'img/avatar-max.jpg',
      name: 'Julia',
      message: 'B quiet and cozy place.',
      rate: 3,
      date: 'April 15',
    }]
  },
  {
    offerId: 2,
    review: [{
      avatar: 'img/avatar-max.jpg',
      name: 'Adam',
      message: 'C quiet and cozy place.',
      rate: 2,
      date: 'April 12',
    }]
  },
  {
    offerId: 3,
    review: [{
      avatar: 'img/avatar-max.jpg',
      name: 'Sam',
      message: 'D quiet and cozy place.',
      rate: 5,
      date: 'April 22',
    }]
  },
  {
    offerId: 4,
    review: [{
      avatar: 'img/avatar-max.jpg',
      name: 'Kim',
      message: 'E quiet and cozy place.',
      rate: 3,
      date: 'April 25',
    }]
  }
];
