import React from 'react';
import styled from 'react-emotion';

const SingleStream = ({ className }) => (
  <a href="#" className={`single-stream ${className}`}>
    <div className="single-stream__thumb">
      <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/3b55516f35883876-profile_image-70x70.jpeg" />
      <span>Viewers</span>
    </div>
    <div className="single-stream__info">
      <h1>JaxomofRuatha</h1>
      <span>
        Aspiring software developer and occasional gamer, working to help others
        through their lifelong journeys!
      </span>
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
`;

export default StreamStyled;
