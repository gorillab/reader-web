import { Users } from 'reader-js';

import { INIT_DATA, LOG_OUT } from './types';

const getUser = () => async (dispatch) => {
  try {
    const user = await Users.getUser();

    dispatch({
      type: INIT_DATA,
      user,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const logOut = () => async (dispatch) => {
  try {
    await Users.signOut();

    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export {
  getUser,
  logOut,
};
