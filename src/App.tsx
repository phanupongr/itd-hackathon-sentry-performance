import { Column } from '@devexpress/dx-react-grid';
import * as Sentry from '@sentry/react';
import React from 'react';
import ExampleGrid from './components/ExampleGrid';

const onClick = () => {
  throw new Error('foo');
}

export interface DataProps {
  columns: Column[];
  rows: any[];
}

const ErroneousButton: React.FC = () => (<button onClick={onClick}>Produce Error</button>)
const TheButton = Sentry.withProfiler(ErroneousButton);
const App: React.FC<DataProps> = (props) => {
  return (
    <main>
      <ExampleGrid {...props} />
      <TheButton/>
    </main>
  );
}

export default Sentry.withProfiler(App);
