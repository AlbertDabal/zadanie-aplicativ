import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import products from "../../data/products";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CustomTable = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const item = data.find((item) => item.name === name);
    item.value = value;
    setData([...data]);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nazwa</TableCell>
            <TableCell align="right">Wartość</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products &&
            products.map((item, key) => (
              <TableRow key={item.key}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="right">
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      align="left"
                      defaultValue=""
                      value={data[key].value}
                      onChange={handleChange}
                      name={item.key}
                    >
                      <MenuItem value="">
                        <em>Brak odpowiedzi</em>
                      </MenuItem>
                      {item.options.map((option, key) => (
                        <MenuItem key={key} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
