import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, visitHour, visitType, patient, pds, price) {
  return {
    name,
    visitHour,
    visitType,
    patient,
    pds
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.visitHour}</TableCell>
        <TableCell align="left">{row.visitType}</TableCell>
        <TableCell align="left">{row.patient}</TableCell>
        <TableCell align="left">{row.pds}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              Dropdow con datos del paciente (telf, dirección y input para
              confirmar fecha y hora de la cita)
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    visitHour: PropTypes.number.isRequired,
    patient: PropTypes.number.isRequired,
    visitType: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pds: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("2020-04-25", "---", "Llamada", "Andrés Giménez", "Pau Larrea"),
  createData("2020-04-27", "---", "Presencial", "Paloma López", "Andrea Vega"),
  createData("2020-05-01", "---", "Presencial", "Lucas Calvo", "Pau Larrea"),
  createData("2020-05-06", "---", "Llamada", "Rita Suárez", "David Campos"),
  createData("2020-05-08", "---", "Llamada", "Ana Luarca", "Pau Larrea"),
  createData("2020-04-25", "---", "Llamada", "Andrés Giménez", "Pau Larrea"),
  createData("2020-04-27", "---", "Presencial", "Paloma López", "Andrea Vega"),
  createData("2020-05-01", "---", "Presencial", "Lucas Calvo", "Pau Larrea"),
  createData("2020-05-06", "---", "Llamada", "Rita Suárez", "David Campos"),
  createData("2020-05-08", "---", "Llamada", "Ana Luarca", "Pau Larrea"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer
      style={{
        height: "600px",
        overflowY: "scroll",
        WebkitBoxShadow: "0px 4px 40px #E1E5EC",
        boxShadow: "0px 4px 40px #E1E5EC",
      }}
    >
      <Table stickyHeader aria-label="collapsible table">
        <TableHead style={{ backgroundColor: "#ECECF3 !important" }}>
          <TableRow>
            <TableCell />
            <TableCell>Fecha</TableCell>
            <TableCell align="left">Hora</TableCell>
            <TableCell align="left">Tipo</TableCell>
            <TableCell align="left">Paciente</TableCell>
            <TableCell align="left">PDS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
