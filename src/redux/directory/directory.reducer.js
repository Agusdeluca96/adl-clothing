const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/9HcKSRr/hats.jpg',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/h2ZBvMH/jackets.jpg',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/FJ5Hdqq/sneakers.jpg',
      linkUrl: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/98PR8qm/women.jpg',
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/jZZ4QgN/men.jpg',
      size: 'large',
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;