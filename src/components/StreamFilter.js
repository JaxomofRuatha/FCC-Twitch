import React from 'react';
import styled from 'react-emotion';

import FilterButton from './FilterButton';
import SingleStream from './SingleStream';

const StreamFilter = ({ className }) => (
  <article className={`stream-filter ${className}`}>
    <div className="stream-filter__filters">
      <FilterButton filter="all" />
      <FilterButton filter="live" />
      <FilterButton filter="offline" />
    </div>
    <SingleStream />
  </article>
);

const FilterStyled = styled(StreamFilter)`
  color: #6441a4;
  margin-top: 0.5rem;

  .stream-filter__filters {
    display: flex;

    button {
      flex: 1;
    }
  }
`;

export default FilterStyled;
