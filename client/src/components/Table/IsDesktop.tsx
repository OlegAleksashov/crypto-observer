import { useEffect, useState, FC, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { TableHead, TableRow, TableBody } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./CustomizedTables";
import InputSearch from "../InputSearch/InputSearch";
import PaginationActions from "./PaginationActions";
import useInput from "../../hooks/useInput";
import { fetchData } from "../../store/action";
import { Coin } from "../../../interfaces/commonInterfaces";

const commonStyle = {
  backgroundColor: "rgb(31, 37, 61)",
  color: "#fff",
};

const IsDesktop: FC = (defaultValue = "") => {
  const input = useInput();
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useAppDispatch();
  const allCoins = useAppSelector((state) => state.fetch.allCoins);

  /*const filteredCryptoCurrency = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  const filteredCryptoCurrency = Object.entries(allCoins)
    .map(([name, coin]) => ({
      name: coin.name,
    }))
    .filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );

  console.log(filteredCryptoCurrency);

  const paginatedCryptoCurrency = filteredCryptoCurrency.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleRowsPerPageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const newLocal = "rgb(123, 182, 77)";

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <InputSearch onInputChange={handleInputChange} />
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={commonStyle}>Image</TableCell>
            <TableCell sx={commonStyle}>Name</TableCell>
            <TableCell sx={commonStyle}>Symbol</TableCell>
            <TableCell sx={commonStyle}>Price</TableCell>
            <TableCell sx={commonStyle}>24h</TableCell>
            <TableCell sx={commonStyle}>Volume</TableCell>
            <TableCell sx={commonStyle}>Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchTerm //isSearchFieldEmpty
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
                  <StyledTableCell>
                    ${coin.current_price.toFixed(2)}
                  </StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: newLocal }}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    ${coin.total_volume.toLocaleString()}
                  </StyledTableCell>
                  <StyledTableCell>
                    ${coin.market_cap.toLocaleString()}
                  </StyledTableCell>
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
                    <StyledTableCell>
                      ${coin.current_price.toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell>
                      <span style={{ color: newLocal }}>
                        {coin.price_change_percentage_24h.toFixed(2)}
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
    </>
  );
};

export default IsDesktop;
