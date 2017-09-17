import { Sources } from '@gorillab/reader-js';

import { GET_SOURCES, SUBSCRIBE, UNSUBSCRIBE } from './types';

const getSources = () => async (dispatch) => {
  try {
    const sources = await Sources.getSources();

    dispatch({
      type: GET_SOURCES,
      sources,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const subscribe = id => async (dispatch) => {
  try {
    await Sources.subscribe(id);

    dispatch({
      type: SUBSCRIBE,
      source: {
        id,
        isSubscribed: true,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const unsubscribe = id => async (dispatch) => {
  try {
    await Sources.unsubscribe(id);

    dispatch({
      type: UNSUBSCRIBE,
      source: {
        id,
        isSubscribed: undefined,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export {
  getSources,
  subscribe,
  unsubscribe,
};
