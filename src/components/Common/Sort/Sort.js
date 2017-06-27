import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './Sort.scss';

const propTypes = {
  current: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const Sort = ({ current, getPosts }) => (
  <div className="sort">
    <ul>
      <li className={current === 'new' ? 'sort-active' : ''}>
        <Link
          id="new"
          to={{
            search: '?sort=new',
          }}
          onClick={getPosts}
        >
          New
        </Link>
      </li>

      <li className={current === 'best' ? 'sort-active' : ''}>
        <Link
          id="best"
          to={{
            search: '?sort=best',
          }}
          onClick={getPosts}
        >
          Best
        </Link>
      </li>

      <li className={current === 'daily' ? 'sort-active' : ''}>
        <Link
          id="daily"
          to={{
            search: '?sort=daily',
          }}
          onClick={getPosts}
        >
          Daily
        </Link>
      </li>
    </ul>
  </div>
);

Sort.propTypes = propTypes;

export default Sort;
