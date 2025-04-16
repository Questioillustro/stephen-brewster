import { createContext, useReducer } from 'react';

export type MainViews = 'landing' | 'building' | 'reading';

export const MainViewContext = createContext({
  state: { currentView: 'landing', isRevisit: false },
  dispatch: ({}) => console.warn('No view dispatch'),
});

const initialState = { currentView: 'landing', isRevisit: false };

const reducer = (state, action) => {
  console.log('view reducer called', state, action);
  switch (action) {
    case 'BACK':
      return { ...state, currentView: 'landing' };
    case 'BUILD':
      return { ...state, currentView: 'building' };
    case 'VIEW_NEW':
      return { ...state, currentView: 'reading', isRevisit: false };
    case 'VIEW_OLD':
      return { ...state, currentView: 'reading', isRevisit: true };
    default:
      return { ...state, currentView: 'landing' };
  }
};

export function MainViewProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainViewContext.Provider value={{ state, dispatch }}>{children}</MainViewContext.Provider>
  );
}
