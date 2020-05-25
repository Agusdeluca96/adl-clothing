import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from '../../components/MenuItem';

import './Directory.scss'

export const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);