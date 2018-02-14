import React from 'react';
import styled from 'react-emotion';

import FilterButton from './FilterButton';

const StreamFilter = ({ className }) => (
  <article className={`stream-filter ${className}`}>
    <div className="stream-filter__filters">
      <FilterButton filter="all" />
      <FilterButton filter="live" />
      <FilterButton filter="offline" />
    </div>
  </article>
);

const FilterStyled = styled(StreamFilter)`
  color: #6441a4;

  .stream-filter__filters {
    display: flex;

    button {
      flex: 1;
    }
  }
`;

export default FilterStyled;
