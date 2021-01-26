import { Column } from '@devexpress/dx-react-grid';
import { Grid, TableHeaderRow, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import React from 'react';


const RootComponent: React.FC<Grid.RootProps> = (props) => <Grid.Root {...props} data-tid="project-list-table-root"/>;

export const ExampleGrid: React.FC = () => {
  const columns: Column[] = [
    { name: 'column1', title: 'Column 1' },
    { name: 'column2', title: 'Column 2' }
  ];
  const rows: any[] = [
    { column1: 'Column 1 Row 1', column2: 'Column 2 Row 1' },
    { column1: 'Column 1 Row 2 ', column2: 'Column 2 Row 2' }
  ];

  return <Grid rootComponent={RootComponent} columns={columns} rows={rows}>
    <VirtualTable height="auto"/>
    <TableHeaderRow/>
  </Grid>;
};
