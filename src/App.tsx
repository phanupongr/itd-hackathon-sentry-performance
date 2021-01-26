import * as Sentry from '@sentry/react';
import React from 'react';
import { ExampleGrid } from './components/ExampleGrid';

const onClick = () => {
  throw new Error('foo');
}

function App() {
  return (
    <main>
      <ExampleGrid/>
      <button onClick={onClick}>Produce Error</button>
    </main>
  );
}

export default Sentry.withProfiler(App);
