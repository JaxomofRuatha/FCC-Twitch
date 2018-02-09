import { createSelectorCreator, defaultMemoize } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { is } from 'immutable';

const createImmutableSelector = createSelectorCreator(defaultMemoize, is);
