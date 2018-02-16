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

  const liveInfo = streamResults.data.reduce((acc, cur) => {
    acc[cur.user_id] = { title: cur.title, viewers: cur.viewer_count };
    return acc;
  }, {});

  const comboResults = userResults.data.map((user) => {
    const final = {
      id: user.id,
      login: user.login,
      name: user.display_name,
      avatar: user.profile_image_url,
      description: user.description,
      live: false
    };

    if (liveInfo[user.id]) {
      final.title = liveInfo[user.id].title;
      final.live = true;
      final.viewers = liveInfo[user.id].viewers;
    }
    return final;
  });

  return fromJS([comboResults]);
}
