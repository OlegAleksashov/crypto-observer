import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableHead, TableRow, TableBody } from "@mui/material";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import { fetchData } from "../../store/action";
import { StyledTableCell, StyledTableRow } from "./CustomizedTables";
import InputSearch from "../InputSearch/InputSearch";
import PaginationActions from "./PaginationActions";

const IsTablet = ({ data }) => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.fetch.allCoins);

  const filteredCryptoCurrency = allCoins.filter((coin) =>
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

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <InputSearch style={{}} onInputChange={handleInputChange} />
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Symbol</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
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
              <StyledTableCell>
                ${coin.current_price.toFixed(2)}
              </StyledTableCell>
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

export default IsTablet;