import React from 'react';
import styled from 'react-emotion';

const FilterButton = ({ filter, className, handleClick }) => {
  switch (filter) {
    case 'all':
      return (
        <button className={className} onClick={handleClick}>
          All
        </button>
      );
    case 'live':
      return (
        <button className={className} onClick={handleClick}>
          Live
        </button>
      );
    case 'offline':
      return (
        <button className={className} onClick={handleClick}>
          Offline
        </button>
      );
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
  position: relative;
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: aqua;
  }
`;

export default ButtonStyled;
