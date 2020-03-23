import React, { useState } from 'react';
import MenuItem from '../../components/MenuItem';

import './Directory.scss'

const Directory = () => {

  const sectionsData = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'shop/mens'
    }
  ];

  const [sections, setSections] = useState(sectionsData);
  const handleSectionsChange = e => setSections(e.target.value);

  return (
    <div className="directory">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}

export default Directory;