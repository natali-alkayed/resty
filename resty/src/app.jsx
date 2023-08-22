import React, { useReducer } from 'react';
import axios from 'axios';
import Form from './components/form/index';
import Results from './components/results/index'; 
import Header from './components/header/index';
import Footer from './components/footer/index';
import History from './components/History/history';
import './app.scss';

const initialState = {
  request: null,
  response: null,
  history: [],
};

console.log(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_REQUEST':
      return { ...state, request: action.payload };
    case 'SET_RESPONSE':
      return { ...state, response: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleHistoryItemClick = (historyItem) => {
    dispatch({ type: 'SET_RESPONSE', payload: historyItem.response });
  };

  const handleFormSubmit = async (requestData) => {
    dispatch({ type: 'SET_REQUEST', payload: requestData });

    try {
      const response = await axios({
        method: requestData.method,
        url: requestData.url,
        data: requestData.body,
      });

      dispatch({ type: 'SET_RESPONSE', payload: response.data });
      dispatch({ type: 'ADD_TO_HISTORY', payload: { ...requestData, response: response.data } });
    } catch (error) {
      dispatch({ type: 'SET_RESPONSE', payload: { error: error.message } });
    }
  };

  return (
    <div>
      <Header/>
      <Form onSubmit={handleFormSubmit} />
      {state.response && <Results data={state.response} />}
      <History history={state.history} onItemClick={handleHistoryItemClick} /> 
      <Footer/>
    </div>
  );
}

export default App;

