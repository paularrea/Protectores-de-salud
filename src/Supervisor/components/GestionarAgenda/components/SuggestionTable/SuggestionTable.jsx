import React from "react";
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
import pendingEvents from "./pendingEvents";
import DropdownRow from "./DropdownRow";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(date, patient, pds, location, phone) {
  return {
    date,
    patient,
    pds,
    location,
    phone
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
          {row.date}
        </TableCell>
        <TableCell align="left">{row.patient}</TableCell>
        <TableCell align="left">{row.pds}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <DropdownRow row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const sortedDates = pendingEvents.sort(
  (a, b) =>
    new Date(...a.date.split("/").reverse()) -
    new Date(...b.date.split("/").reverse())
);
console.log(sortedDates, "sorted");

const rows = sortedDates.map((event) => {
  return createData(
    event.date,
    `${event.patient_first_name} ${event.patient_middle_name} ${event.patient_last_name}`,
    `${event.pds_first_name} ${event.pds_middle_name} ${event.pds_last_name}`,
    `${event.patient_residence_address} ${event.patient_residence_city} ${event.patient_residence_state} ${event.patient_residence_state} ${event.patient_residence_country_name}`,
    `(${event.patient_phone_country_code_num}) ${event.patient_phone_num}`
  );
});

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
            <TableCell align="left">Paciente</TableCell>
            <TableCell align="left">PDS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <Row key={key} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
