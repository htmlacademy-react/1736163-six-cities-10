import {Offer} from '../types/offer';

const AVATAR = 'img/avatar-angelina.jpg';

export const offers: Offer[] = [
  {
    offerId: 1,
    data: {
      pictures: ['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      propertyName: 'Beautiful & luxurious studio at great MSE',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of MSE. The building is green and from 18th century.',
      premium: true,
      type: 'house',
      rate: 2,
      bedsCount: 2,
      personsCount: 3,
      price: 78,
      insideList: ['Cabel TV', 'Washing machine', 'Towels'],

      host: {
        pro: true,
        avatar: AVATAR,
        name: 'Ivan'
      }
    }
  },
  {
    offerId: 2,
    data: {
      pictures: ['img/apartment-03.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      propertyName: 'Beautiful & luxurious studio at great HHS',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of HHS. The building is green and from 18th century.',
      premium: false,
      type: 'room',
      rate: 4,
      bedsCount: 3,
      personsCount: 4,
      price: 34,
      insideList: ['Cabel TV', 'Wi-Fi', 'Heating', 'Coffee machine'],

      host: {
        pro: true,
        avatar: AVATAR,
        name: 'Piotr'
      }
    }
  },
  {
    offerId: 3,
    data: {
      pictures: ['img/studio-01.jpg', 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
      propertyName: 'Beautiful & luxurious studio at great ASF',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of ASF. The building is green and from 18th century.',
      premium: true,
      type: 'apartment',
      rate: 5,
      bedsCount: 5,
      personsCount: 6,
      price: 55,
      insideList: ['Dishwasher', 'Baby seat'],

      host: {
        pro: true,
        avatar: AVATAR,
        name: 'Alex'
      }
    }
  },
  {
    offerId: 4,
    data: {
      pictures: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      propertyName: 'Beautiful & luxurious studio at GASS',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of GASS. The building is green and from 18th century.',
      premium: true,
      type: 'hotel',
      rate: 3,
      bedsCount: 1,
      personsCount: 2,
      price: 64,
      insideList: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],

      host: {
        pro: false,
        avatar: AVATAR,
        name: 'Jeff'
      }
    }
  }
];


