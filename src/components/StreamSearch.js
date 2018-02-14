import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import styled from 'react-emotion';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const StreamSearch = ({ className, submitting, handleSubmit }) => (
  <article className={`stream-search ${className}`}>
    <h1 className="stream-search__title">Twitch Dashboard</h1>
    <form className="stream-search__form" onSubmit={handleSubmit}>
      <Field
        name="searchInput"
        className="stream-search__input"
        component="input"
        type="search"
        placeholder="Find a new Twitch stream!"
        required
      />
      <button
        className="stream-search__submit"
        type="submit"
        disabled={submitting}
      >
        <FontAwesome icon={faSearch} size="md" />
      </button>
    </form>
  </article>
);

const SearchStyled = styled(StreamSearch)`
  .stream-search__title {
    color: #6441a4;
    font-size: 1.7rem;
    font-weight: 100;
    text-align: center;
  }

  .stream-search__form {
    position: relative;
  }

  .stream-search__input {
    border: none;
    border-bottom: 1px solid #6441a4;
    background: inherit;
    color: #fff;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    &:required {
      box-shadow: none;
    }
  }

  .stream-search__submit {
    position: absolute;
    right: 0;
    padding: 0.5rem;
    background: inherit;
    color: #fff;
    border: none;
  }
`;

export default reduxForm({ form: 'search' })(SearchStyled);
