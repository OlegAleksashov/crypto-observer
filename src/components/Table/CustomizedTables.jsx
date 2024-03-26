import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import useInput from "../../hooks/useInput";
import InputSearch from "../InputSearch/InputSearch";
import PaginationActions from "../Table/PaginationActions";
import { fetchData } from "../../store/action";
import {list} from '../../const/value'

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

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.fetch.allCoins);
  const input = useInput();
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

  const newLocal = "rgb(123, 182, 77)";

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

  // useEffect(() => {
  //     dispatch(fetchData());
  // }, [dispatch]);

  return (
    <TableContainer component={Paper} >
      <InputSearch style={{}} onInputChange={handleInputChange} />
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
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
          {setSearchTerm //isSearchFieldEmpty
            ? paginatedCryptoCurrency.map((coin) => (
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
                  <StyledTableCell>${coin.current_price}</StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: newLocal }}>
                      {coin.price_change_percentage_24h}%
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>${coin.total_volume}</StyledTableCell>
                  <StyledTableCell>${coin.market_cap}</StyledTableCell>
                </StyledTableRow>
              ))
            : paginatedCryptoCurrency
                .filter((coin) =>
                  coin.name.toLowerCase().includes(input.value.toLowerCase())
                )
                .map((coin) => (
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
                    <StyledTableCell>${coin.current_price}</StyledTableCell>
                    <StyledTableCell>
                      <span style={{ color: newLocal }}>
                        {coin.price_change_percentage_24h}
                      </span>
                    </StyledTableCell>
                    <StyledTableCell>
                      ${coin.total_volume.toLocaleString()}
                    </StyledTableCell>
                    <StyledTableCell>
                      ${coin.market_cap.toLocaleString()}
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
    </TableContainer>
  );
}
