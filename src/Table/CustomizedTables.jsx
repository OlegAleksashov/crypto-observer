import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  color: "white",
  backgroundColor: "rgb(31, 37, 61)",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Image
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Symbol
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              24h
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Volume
            </TableCell>
            <TableCell
              sx={{ backgroundColor: "rgb(31, 37, 61)", color: "white" }}
            >
              Market Cap
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
