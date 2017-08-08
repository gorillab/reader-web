import { Users, Auth } from 'reader-js';

import { GET_USER, LOG_OUT } from './types';

const getUser = () => async (dispatch) => {
  try {
    const user = await Users.getUser();

    dispatch({
      type: GET_USER,
      user,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const logOut = () => async (dispatch) => {
  try {
    await Auth.logout();

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
