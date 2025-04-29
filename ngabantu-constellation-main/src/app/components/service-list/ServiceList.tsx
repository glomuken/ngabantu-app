import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ServiceOffer } from '../../types/types';
import ListItem from './ListItem';

const createData = (
  name: string,
  category: string,
  hourly_rate: string,
) => {
  return { name, category, hourly_rate };
}

const ServicesList: React.FC<{services: ServiceOffer[]}> = ({services}) => {
  const rows = services.map((service) => createData(service.name, service.category, service.hourly_rate))
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>My Services</strong></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{rows.length > 1 && `View all(${rows.length})`}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <ListItem key={row.name} category={row.category} name={row.name} hourly_rate={row.hourly_rate} user={0}></ListItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ServicesList;
