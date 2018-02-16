import React from 'react';
import styled from 'react-emotion';

const SingleStream = props => (
  <a
    href={`https://www.twitch.tv/${props.login}`}
    className={`single-stream ${props.className}`}
  >
    <div className="single-stream__thumb">
      <img src={props.avatar} />
      <span>{props.viewers}</span>
    </div>
    <div className="single-stream__info">
      <h1>{props.name}</h1>
      <span>{props.title ? props.title : props.description}</span>
    </div>
    <button className="single-stream__toggle">+</button>
  </a>
);

const StreamStyled = styled(SingleStream)`
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  .single-stream__info {
    padding: 0 0.5rem;
  }
  h1 {
    font-size: 0.9rem;
  }
  span {
    display: block;
    font-size: 0.7rem;
  }
  single-stream__toggle {
    background: inherit;
    color: lightpurple;
  }
`;

export default StreamStyled;
