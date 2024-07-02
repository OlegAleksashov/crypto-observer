import { useState, useEffect, FC, MouseEvent, ChangeEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TableHead, TableRow, TableBody } from "@mui/material";
import Table from "@mui/material/Table";
import TablePagination from "@mui/material/TablePagination";
import { fetchData } from "../../store/action";
import { StyledTableCell, StyledTableRow } from "./CustomizedTables";
import InputSearch from "../InputSearch/InputSearch";
import PaginationActions from "./PaginationActions";

const IsMobile: FC = () => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useAppDispatch();
  const allCoins = useAppSelector((state) => state.fetch.allCoins);

  const filteredCryptoCurrency = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCryptoCurrency = filteredCryptoCurrency.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleRowsPerPageChange = (event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <InputSearch onInputChange={handleInputChange} />
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Symbol</StyledTableCell>
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