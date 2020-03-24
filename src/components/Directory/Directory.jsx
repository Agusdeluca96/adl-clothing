import React, { useState } from 'react';
import MenuItem from '../../components/MenuItem';

import './Directory.scss'
import DIRECTORY_DATA from './Directory.data';

const Directory = () => {

  const [sections, setSections] = useState(DIRECTORY_DATA);
  const handleSectionsChange = e => setSections(e.target.value);

  return (
    <div className="directory">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory;