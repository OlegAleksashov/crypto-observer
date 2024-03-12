import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

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
  const [bitcoin, setBitcoin] = useState([]);

  const fetchBitcoin = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
        headers: {
          Accept: "aplication/json",
        },
      })
      .then((response) => {
        setBitcoin(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBitcoin();
  }, []);

  return (
    <TableContainer component={Paper}>
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
          {bitcoin.map((coin) => (
            <StyledTableRow key={coin.image}>
              <StyledTableCell component="th" scope="row">
                <img
                  src={coin.image}
                  alt=""
                  style={{ height: "30px", width: "30px" }}
                />
              </StyledTableCell>
              <StyledTableCell>{coin.name}</StyledTableCell>
              <StyledTableCell>{coin.symbol}</StyledTableCell>
              <StyledTableCell>
                {coin.current_price.toFixed(2)}
              </StyledTableCell>
              <StyledTableCell>{coin.price_change_percentage_24h.toFixed(2)}</StyledTableCell>
              <StyledTableCell>{coin.total_volume}</StyledTableCell>
              <StyledTableCell>{coin.market_cap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
