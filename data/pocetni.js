import Restaurant from '../Models/retaurants';

export const RESTAURANTS = [
  new Restaurant(
    0,
    'https://links.papareact.com/gn7',
    'Sushi bar',
    3.7,
    'Japanese',
    'Plinarksa 24',
    'Test opis',
    [
      {
        id: 0,
        image: 'https://links.papareact.com/gn7',
        name: 'jelo1',
        description: 'opis',
        price: 20,
      },
      {
        id: 1,
        name: 'jelo2',
        image:'https://links.papareact.com/gn7',
        description: 'opis2',
        price: 10,
      },
    ],
    20,
    0
  ),
  new Restaurant(
    1,
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/621878f799574aeeab7e91db7b6cd53e',
    'Pizza place',
    4.0,
    'Pizza',
    'Marka Marulica 56',
    'Test opis',
    [
      {
        id: 0,
        name: 'jelo1',
        image:'https://links.papareact.com/gn7',
        description: 'opis',
        price: 20,
      },
      {
        id: 1,
        name: 'jelo2',
        image:'https://links.papareact.com/gn7',
        description: 'opis2',
        price: 10,
      },
    ],
    19.3,
    10
  ),
  new Restaurant(
    2,
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/87c777704dd2a5b0e6f642b313d6f937',
    'Pasta',
    3.5,
    'Fish',
    'Rudera Boskovica 33',
    'Test opis',
    [
      {
        id: 0,
        name: 'jelo1',
        image:'https://links.papareact.com/gn7',
        description: 'opis',
        price: 20,
      },
      {
        id: 1,
        name: 'jelo2',
        image:'https://links.papareact.com/gn7',
        description: 'opis2',
        price: 10,
      },
    ],
    12,
    0
  ),
  new Restaurant(
    3,
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7630664457becf283187830a9b0be4de',
    'Burger bar',
    4.3,
    'Burgers',
    'Mosorska 24',
    'Test opis',
    [
      {
        id: 0,
        name: 'jelo1',
        description: 'opis',
        image:'https://links.papareact.com/gn7',
        price: 20,
      },
      {
        id: 1,
        name: 'jelo2',
        image:'https://links.papareact.com/gn7',
        description: 'opis2',
        price: 10,
      },
    ],
    15,
    0
  ),
  new Restaurant(
    4,
    'https://links.papareact.com/gn7',
    'Steak and grill',
    4.7,
    'Steaks',
    'Terziceva 11',
    'Test opis',
    [
      {
        id: 0,
        name: 'jelo1',
        description: 'opis',
        price: 20,
      },
      {
        id: 1,
        name: 'jelo2',
        description: 'opis2',
        price: 10,
      },
    ],
    123,
    35
  ),
];
