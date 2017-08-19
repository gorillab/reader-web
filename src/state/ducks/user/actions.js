import { Users, Auth } from 'reader-js';

import { LOG_OUT, GET_USER } from './types';

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

export {
  logOut,
  getUser,
};
