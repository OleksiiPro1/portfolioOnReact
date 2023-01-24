import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { QuizProvider } from './contexts/quiz';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Main />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
