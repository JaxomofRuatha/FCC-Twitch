import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'react-emotion';

const StreamSearch = ({ className, submitting, handleSubmit }) => (
  <div className={`stream-search ${className}`}>
    <h1>Twitch dashboard is running...</h1>
    <form className="stream-search__form" onSubmit={handleSubmit}>
      <Field
        name="searchInput"
        component="input"
        type="text"
        placeholder="Find a new Twitch stream!"
        required
      />
      <button
        className="stream-search__button"
        type="submit"
        disabled={submitting}
      />
    </form>
  </div>
);

const SearchStyled = styled(StreamSearch)`
  color: purple;
`;

export default reduxForm({ form: 'search' })(SearchStyled);
