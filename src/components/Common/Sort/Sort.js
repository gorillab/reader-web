import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './Sort.scss';

const propTypes = {
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Sort = ({ current, onClick }) => {
  const items = [{
    display: 'New',
    value: 'new',
  }, {
    display: 'Best',
    value: 'best',
  // }, {
  //   display: 'Daily',
  //   value: 'daily',
  }];

  return (
    <div className="sort">
      <ul>
        {items.map(({ display, value }) => (
          <li key={value} className={current === value ? 'sort-active' : ''}>
            <Link
              to={{
                search: `?sort=${value}`,
              }}
              onClick={() => onClick(value)}
            >{display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sort.propTypes = propTypes;

export default Sort;
