import { IntegratedSorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import * as Sentry from '@sentry/react';
import React from 'react';
import { DataProps } from '../App';


const RootComponent: React.FC<Grid.RootProps> = (props) => <Grid.Root {...props} data-tid="project-list-table-root"/>;

const MyTable = Sentry.withProfiler(Table, { name: 'Table', includeRender: true, includeUpdates: true });

const ExampleGrid: React.FC<DataProps> = ({ columns, rows }) => {
  return <Grid rootComponent={RootComponent} columns={columns} rows={rows}>
    <SortingState/>
    <IntegratedSorting/>

    <MyTable/>

    <TableHeaderRow showSortingControls={true}/>
  </Grid>;
};

export default Sentry.withProfiler(ExampleGrid, { includeRender: true, includeUpdates: true });
