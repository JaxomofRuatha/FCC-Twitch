import React from 'react';
import styled from 'react-emotion';

import FilterButton from './FilterButton';
import SingleStream from './SingleStream';

const StreamFilter = ({ className, streams }) => (
  <article className={`stream-filter ${className}`}>
    <div className="stream-filter__filters">
      <FilterButton filter="all" />
      <FilterButton filter="live" />
      <FilterButton filter="offline" />
    </div>
    {streams &&
      streams
        .first()
        .map(stream => (
          <SingleStream
            key={stream.get('id')}
            login={stream.get('login')}
            name={stream.get('name')}
            avatar={stream.get('avatar')}
            description={stream.get('description')}
            live={stream.get('live')}
            title={stream.get('title')}
            viewers={stream.get('viewers')}
          />
        ))}
  </article>
);

const FilterStyled = styled(StreamFilter)`
  color: #6441a4;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;

  .stream-filter__filters {
    display: flex;

    button {
      flex: 1;
    }
  }
`;

export default FilterStyled;
