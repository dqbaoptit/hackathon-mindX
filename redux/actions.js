import { INCREMENT, DEINCREMENT } from './constants';

export const Increment = () => async (dispatch) => {
  dispatch({ type: INCREMENT });
};
export const Deincrement = () => async (dispatch) => {
  dispatch({ type: DEINCREMENT });
};
