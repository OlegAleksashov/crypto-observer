import { TableHead, TableRow, TableBody } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./CustomizedTables";
import React, { useState } from "react";
import InputSearch from "../InputSearch/InputSearch";
import Table from "@mui/material/Table";
import { list } from "../../const/value";
import TablePagination from "@mui/material/TablePagination";
import PaginationActions from "./PaginationActions";

const commonStyle = {
  backgroundColor: "rgb(31, 37, 61)",
  color: "#fff",
};

const IsMobile = () => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredCryptoCurrency = list.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCryptoCurrency = filteredCryptoCurrency.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <InputSearch style={{}} onInputChange={handleInputChange} />
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={commonStyle}>Image</StyledTableCell>
            <StyledTableCell sx={commonStyle}>Name</StyledTableCell>
            <StyledTableCell sx={commonStyle}>Symbol</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedCryptoCurrency.map((coin) => (
            <StyledTableRow key={coin.image}>
              <StyledTableCell component="th" scope="row">
                <img
                  src={coin.image}
                  alt=""
                  style={{ height: "2rem", width: "2rem" }}
                />
              </StyledTableCell>
              <StyledTableCell>{coin.name}</StyledTableCell>
              <StyledTableCell>{coin.symbol}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        colSpan={3}
        count={filteredCryptoCurrency.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPageChange}
        ActionsComponent={PaginationActions}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(31, 37, 61)",
          color: "#fff",
        }}
      />
    </>
  );
};

export default IsMobile;
