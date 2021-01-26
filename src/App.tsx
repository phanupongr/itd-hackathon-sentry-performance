import { Column } from '@devexpress/dx-react-grid';
import * as Sentry from '@sentry/react';
import React from 'react';
import { ExampleGrid } from './components/ExampleGrid';

const onClick = () => {
  throw new Error('foo');
}

export interface DataProps {
  columns: Column[];
  rows: any[];
}

const App:React.FC<DataProps> = (props)=> {
  return (
    <main>
      <ExampleGrid {...props} />
      <button onClick={onClick}>Produce Error</button>
    </main>
  );
}

export default Sentry.withProfiler(App);
