﻿import { createContext, useReducer } from 'react';

export type MainViews = 'landing' | 'building' | 'reading';

export const MainViewContext = createContext({
  state: { currentView: 'landing', isRevisit: false },
  dispatch: ({}) => console.warn('No view dispatch'),
});

const initialState = { currentView: 'building', isRevisit: false };

const reducer = (state, action) => {
  console.log('view reducer called', state, action);
  switch (action) {
    case 'BUILD':
      return { ...state, currentView: 'building' };
    case 'VIEW_NEW':
      return { ...state, currentView: 'reading', isRevisit: false };
    case 'VIEW_LIBRARY':
      return { ...state, currentView: 'reading', isRevisit: true };
    default:
      return { ...state, currentView: 'building' };
  }
};

export function MainViewProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainViewContext.Provider value={{ state, dispatch }}>{children}</MainViewContext.Provider>
  );
}
