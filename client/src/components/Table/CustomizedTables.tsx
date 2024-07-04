import { useEffect, useState, FC } from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import IsTablet from "./IsTablet";
import IsMobile from "./IsMobile";
import IsDesktop from "./IsDesktop";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(31, 37, 61)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  color: "white",
  backgroundColor: "rgb(31, 37, 61)",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CustomizedTables: FC = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 530);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 760);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      {isMobile ? <IsMobile /> : isTablet ? <IsTablet /> : <IsDesktop />}
    </TableContainer>
  );
};
