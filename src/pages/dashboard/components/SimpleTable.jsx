import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // minWidth: 650
  },
});

function createData(Companies, Members, Budget, Completion) {
  return { Companies, Members, Budget, Completion };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const SimpleTable = () => {
  const classNamees = useStyles();

  return (
    <TableContainer>
      <Table
        className={classNamees.table}
        style={{ tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Companies</TableCell>
            <TableCell align="right">Members</TableCell>
            <TableCell align="right">Budget</TableCell>
            <TableCell align="right">Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Companies}>
              <TableCell component="th" scope="row">
                {row.Companies}
              </TableCell>
              <TableCell align="right">{row.Members}</TableCell>
              <TableCell align="right">{row.Budget}</TableCell>
              <TableCell align="right">{row.Completion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
