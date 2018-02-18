import React from 'react';
import styled from 'react-emotion';

const SingleStream = props => (
  <a
    href={`https://www.twitch.tv/${props.login}`}
    className={`single-stream ${props.className}`}
  >
    <div className="single-stream__thumb">
      <img src={props.avatar} alt={`Avatar for ${props.name}`} />
      <span>{props.viewers || 'Offline'}</span>
    </div>
    <div className="single-stream__info">
      <h1>{props.name}</h1>
      <span>{props.title ? props.title : props.description}</span>
    </div>
    <button className="single-stream__toggle">+</button>
  </a>
);

const StreamStyled = styled(SingleStream)`
  color: #faf9fa;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  flex: 1;
  &:hover {
    background: #2c2541;
  }
  .single-stream__thumb {
    flex: 2;
    text-align: center;
    span {
      color: red;
    }
  }
  img {
    max-width: 100%;
  }
  .single-stream__info {
    padding: 0 0.5rem;
    flex: 5;
    align-self: flex-start;
  }
  h1 {
    font-size: 0.9rem;
  }
  span {
    display: block;
    font-size: 0.7rem;
  }
  .single-stream__toggle {
    border: none;
    background: inherit;
    color: aqua;
  }
`;

export default StreamStyled;
