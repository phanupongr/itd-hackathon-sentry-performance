import * as Sentry from '@sentry/react';
import React from 'react';
import { ExampleGrid } from './components/ExampleGrid';

function App() {
  return (
    <main>
      <ExampleGrid/>
    </main>
  );
}

export default Sentry.withProfiler(App);
