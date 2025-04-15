import { createContext, useContext, useReducer } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Paper } from '@mui/material';
import CodeBlock from '@/components/codedisplay/CodeBlock';
import SBAccordion from '@/components/accordion/SBAccordion';

const CounterContext = createContext({
  state: { count: 0, step: 1 },
  dispatch: ({}) => console.warn('No CounterProvider found'),
});

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.step };
    default:
      return state;
  }
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

const useCounter = () => useContext(CounterContext);

function CounterDisplay() {
  const { state, dispatch } = useCounter();
  return (
    <Paper square elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant={'h5'} color={'secondary'} sx={{ mb: 2 }}>
        Context with Reducer
      </Typography>

      <Paper sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
        <ButtonGroup variant='contained' aria-label='Basic button group' sx={{ mr: 2 }}>
          <Button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</Button>
          <Button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract</Button>
          <Button onClick={() => dispatch({ type: 'SET_STEP', step: 2 })}>Step to 2</Button>
        </ButtonGroup>

        <Typography variant={'h6'} color={'primary'}>
          Count: {state.count}
        </Typography>
      </Paper>

      <SBAccordion title={'Code'} content={<CodeBlock code={ContextWithReducerString} />} />
    </Paper>
  );
}

export const ContextWithReducer = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
};

// The component as a string for display
export const ContextWithReducerString = `
import { createContext, useContext, useReducer } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Paper } from '@mui/material';

const CounterContext = createContext({
  state: { count: 0, step: 1 },
  dispatch: ({}) => console.warn('No CounterProvider found'),
});

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.step };
    default:
      return state;
  }
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

const useCounter = () => useContext(CounterContext);

function CounterDisplay() {
  const { state, dispatch } = useCounter();
  return (
    <Paper square elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant={'h5'} color={'secondary'} sx={{ mb: 2 }}>
        Context with Reducer
      </Typography>

      <Paper sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
        <ButtonGroup variant='contained' aria-label='Basic button group' sx={{ mr: 2 }}>
          <Button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</Button>
          <Button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract</Button>
          <Button onClick={() => dispatch({ type: 'SET_STEP', step: 2 })}>Step to 2</Button>
        </ButtonGroup>

        <Typography variant={'h6'} color={'primary'}>
          Count: {state.count}
        </Typography>
      </Paper>
    </Paper>
  );
}

export const ContextWithReducer = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
};
`;
