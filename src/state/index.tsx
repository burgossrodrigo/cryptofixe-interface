import { createContext, useReducer } from 'react'
import { IStakeData } from '../interface'

export const initialState = {
  stakeData: { rewards: 0, totalStaked: 0, stakers: 0 }
}
type AppState = typeof initialState

type ACTIONTYPE =
  | { type: "SET_STAKE_DATA"; payload: IStakeData[] | any }
  | { type: "SET_STAKE_DATA"; payload: IStakeData[] | any }


function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "SET_STAKE_DATA":
      return { ...state, stakeData: action.payload }
    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({ state: initialState, dispatch: () => { } })

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext }