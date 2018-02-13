import { fromJS } from 'immutable';

import apiSkeleton from '../../utils/api-helpers';
import env from '../../config/dev';

const apiOpts = {
  method: 'GET',
  headers: {
    'Client-ID': env.TWITCH_CLIENT_ID
  }
};

const usernames = 'TwitchPlaysPokemon';

export default async function fetchStreams() {
  const streamUrl = `https://api.twitch.tv/helix/streams?user_login=${usernames}`;
  const userUrl = `https://api.twitch.tv/helix/users?login=${usernames}`;

  const streamResults = await apiSkeleton(streamUrl, apiOpts);
  const userResults = await apiSkeleton(userUrl, apiOpts);

  return fromJS([streamResults, userResults]);
}
