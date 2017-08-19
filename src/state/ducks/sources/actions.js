import { Sources } from 'reader-js';

import GET_SOURCES from './types';

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

export default getSources;
