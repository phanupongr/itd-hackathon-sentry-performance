import { Column } from '@devexpress/dx-react-grid';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import * as faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const generateColumns = (numColumns: number): Column[] => {
  let array = Array.from({ length: numColumns }, (_, i) => i + 1);
  return [...array].map(value => ({ name: `column${value}`, title: `Column ${value}` }))
}

const generateRows = (columns: Column[], numRows: number): object[] => {
  let array = Array.from({ length: numRows }, (_, i) => i + 1);
  return [...array].map(index => {
    const row = columns.map(column => ({ [column.name]: faker.name.firstName() }))
    return Object.assign({}, ...row)
  });
}

const columns = generateColumns(10);
const rows = generateRows(columns, 100);

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
Sentry.setUser({ id: `${process.env.NODE_ENV}/${process.env.PUBLIC_URL}/${navigator.userAgent}` });
ReactDOM.render(<App columns={columns} rows={rows}/>, document.getElementById('root'));
// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
