import React from 'react';
import styled from 'react-emotion';

const FilterButton = ({ filter, className }) => {
  switch (filter) {
    case 'all':
      return <button className={className}>All</button>;
    case 'live':
      return <button className={className}>Live</button>;
    case 'offline':
      return <button className={className}>Offline</button>;
    default:
      return null;
  }
};

const ButtonStyled = styled(FilterButton)`
  color: #6441a4;
  background: inherit;
  border: none;
  padding: 0.3rem 0.5rem;
  text-align: left;
`;

export default ButtonStyled;
