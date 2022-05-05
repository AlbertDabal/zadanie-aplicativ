import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { products } from "../../data/products";

const CustomTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nazwa</TableCell>
            <TableCell align="right">Wartość</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{/* todo... */}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
