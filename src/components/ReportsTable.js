import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI Components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

// Action Creators
import { requestReports } from '../store/modules/employeeUtils/actionCreators';

const ReportsTable = memo(() => {
  const dispatch = useDispatch();

  const reports = useSelector(state => state.employeeUtils.get('reports'));

  useEffect(() => {
    dispatch(requestReports());
  }, [dispatch]);

  if (reports && Array.isArray(reports) && reports.length > 0) {
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
            {reports.map(report => (
              <TableRow key={report.id}>
                <TableCell component="th" scope="row">
                  {new Date(report.createdAt).toLocaleDateString('en-US')}
                </TableCell>
                <TableCell align="right">
                  {report.assignedBy.name} {report.assignedBy.lastName} (
                  {report.assignedBy.email})
                </TableCell>
                <TableCell align="right">
                  {report.arrivalTime}/{report.departureTime}
                </TableCell>
                <TableCell align="right">{report.workingDay} hrs</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  return <Typography variant="h6">You don't have reports yet!</Typography>;
});

export default ReportsTable;
