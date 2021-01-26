import { Grid, TableHeaderRow, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';
import { DataProps } from '../App';


const RootComponent: React.FC<Grid.RootProps> = (props) => <Grid.Root {...props} data-tid="project-list-table-root"/>;

export const ExampleGrid: React.FC<DataProps> = ({ columns, rows }) => {
  return <Grid rootComponent={RootComponent} columns={columns} rows={rows}>
    <VirtualTable height="auto"/>
    <TableHeaderRow/>
  </Grid>;
};
