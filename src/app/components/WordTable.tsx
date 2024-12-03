import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type WordTableProps = {
  data: Word[];
};

export default function WordTable({ data }: WordTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">英単語</TableCell>
            <TableCell align="right">日本語訳</TableCell>
            <TableCell align="right">例文</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((word, idx) => (
            <TableRow
              key={word.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx}
              </TableCell>
              <TableCell align="right">{word.eng}</TableCell>
              <TableCell align="right">{word.jap}</TableCell>
              <TableCell align="right">
                {word.example.slice(0, 50) + "..."}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
