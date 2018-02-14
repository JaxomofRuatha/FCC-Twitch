import { fromJS } from 'immutable';

import apiSkeleton from '../../utils/api-helpers';
import env from '../../config/dev';

const apiOpts = {
  method: 'GET',
  headers: {
    'Client-ID': env.TWITCH_CLIENT_ID
  }
};

export default async function fetchStreams(query) {
  const streamUrl = `https://api.twitch.tv/helix/streams?user_login=${query.reduce((acc, cur) => `${acc}&user_login=${cur}`)}`;
  const userUrl = `https://api.twitch.tv/helix/users?login=${query.reduce((acc, cur) => `${acc}&login=${cur}`)}`;

  const streamResults = await apiSkeleton(streamUrl, apiOpts);
  const userResults = await apiSkeleton(userUrl, apiOpts);

  return fromJS([streamResults, userResults]);
}
