import React from 'react';

type Action = { type: 'toogle' };
type Dispatch = (action: Action) => void;
type State = { shown: boolean };
type ToogleProviderProps = { children: React.ReactNode };

const ToogleStateContext = React.createContext<State | undefined>(undefined);
const ToogleDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toogle': {
      return { shown: !state.shown };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function ToogleProvider({ children }: ToogleProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, { shown: false });
  return (
    <ToogleStateContext.Provider value={state}>
      <ToogleDispatchContext.Provider value={dispatch}>
        {children}
      </ToogleDispatchContext.Provider>
    </ToogleStateContext.Provider>
  );
}

function useToogleState() {
  const context = React.useContext(ToogleStateContext);
  if (context === undefined) {
    throw new Error('useToogleState must be used within a CountProvider');
  }
  return context;
}

function useToogleDispatch() {
  const context = React.useContext(ToogleDispatchContext);
  if (context === undefined) {
    throw new Error('useToogleDispatch must be used within a CountProvider');
  }
  return context;
}

export { ToogleProvider, useToogleState, useToogleDispatch };
