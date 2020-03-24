import React from 'react';
import { withRouter } from 'react-router-dom'

import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`menu-item ${size}`} onClick={() => history.match.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <span className="title">{title.toUpperCase()}</span>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);