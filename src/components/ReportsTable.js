import React, { memo } from 'react';

// MUI Components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const ReportsTable = memo(() => {
  return (
    <Paper className="paper-dashboard">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Assigned By</TableCell>
            <TableCell align="right">Arrival/Departure</TableCell>
            <TableCell align="right">Working Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              19 Sept 2019
            </TableCell>
            <TableCell align="right">
              Alexis Nava (alexis.nava@gmail.com)
            </TableCell>
            <TableCell align="right">10:00/18:00</TableCell>
            <TableCell align="right">8 hrs</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
});

export default ReportsTable;
