import { Sources } from 'reader-js';

import { INIT_DATA } from '../user/types';

const getSources = () => async (dispatch) => {
  try {
    const sources = await Sources.getSources();

    dispatch({
      type: INIT_DATA,
      sources,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default getSources;
