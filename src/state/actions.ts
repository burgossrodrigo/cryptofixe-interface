import { IStakeData } from '../interface';

export const setStakeData = (dispatch: any, payload: IStakeData[] | any): void => {
  dispatch({ type: 'SET_STAKE_DATA', payload: payload });
}
