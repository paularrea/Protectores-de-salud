import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import pdsChartList from "./pdsChartList";
import {
  red_dot,
  white_dot,
  red_text,
  container,
  normal_text,
} from "./table.module.scss";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "1px solid #d8d8d8",
    },
  },
});

function createData(
  general_alarm_is_active,
  community_worker_name,
  num_of_visits,
  num_of_calls,
  duration_of_visit_in_mins,
  duration_of_call_in_mins,
  duration_of_travel_in_mins,
  response_time_in_mins,
  patient_satisfaction_level
) {
  return {
    general_alarm_is_active,
    community_worker_name,
    num_of_visits,
    num_of_calls,
    duration_of_visit_in_mins,
    duration_of_call_in_mins,
    duration_of_travel_in_mins,
    response_time_in_mins,
    patient_satisfaction_level,
  };
}

function Row(props) {
  const { row } = props;
  console.log(props, "dsss");
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th">
          {row.general_alarm_is_active === '1' ? (
            <div className={red_dot}></div>
          ) : (
            <div className={white_dot}></div>
          )}
        </TableCell>
        <TableCell align="left">{row.community_worker_name}</TableCell>
        <TableCell align="left">
          {row.num_of_calls.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.num_of_calls.substring(1)} <span>llamadas</span>
            </span>
          ) : (
            <span className={normal_text}>
              {row.num_of_calls.substring(1)} <span>llamadas</span>
            </span>
          )}
          <br />
          {row.num_of_visits.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.num_of_visits.substring(1)} <span>visitas</span>
            </span>
          ) : (
            <span className={normal_text}>
              {row.num_of_visits.substring(1)} <span>visitas</span>
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.duration_of_call_in_mins.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.duration_of_call_in_mins.substring(1)}
              <span>llamadas</span>
            </span>
          ) : (
            <span className={normal_text}>
              {row.duration_of_call_in_mins.substring(1)}
              <span>llamadas</span>
            </span>
          )}
          <br />
          {row.duration_of_visit_in_mins.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.duration_of_visit_in_mins.substring(1)}
              <span>visitas</span>
            </span>
          ) : (
            <span className={normal_text}>
              {row.duration_of_visit_in_mins.substring(1)}
              <span>visitas</span>
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.duration_of_travel_in_mins.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.duration_of_travel_in_mins.substring(1)}
            </span>
          ) : (
            <span className={normal_text}>
              {row.duration_of_travel_in_mins.substring(1)}
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.response_time_in_mins.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.response_time_in_mins.substring(1)}
            </span>
          ) : (
            <span className={normal_text}>
              {row.response_time_in_mins.substring(1)}
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.patient_satisfaction_level.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.patient_satisfaction_level.substring(1)}
            </span>
          ) : (
            <span className={normal_text}>
              {row.patient_satisfaction_level.substring(1)}
            </span>
          )}
        </TableCell>
        <TableCell>
          <p style={{ color: "#0057FF"}}>Abrir</p>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = pdsChartList.map((pds) => {
  return createData(
    `${pds.general_alarm_is_active}`,

    `${pds.community_worker_name}`,

    `${pds.num_of_visits.alarm_is_active}${pds.num_of_visits.value}`,
    `${pds.num_of_calls.alarm_is_active}${pds.num_of_calls.value}`,

    `${pds.duration_of_visit_in_mins.alarm_is_active}${pds.duration_of_visit_in_mins.value} min`,
    `${pds.duration_of_call_in_mins.alarm_is_active}${pds.duration_of_call_in_mins.value} min`,

    `${pds.duration_of_travel_in_mins.alarm_is_active}${pds.duration_of_travel_in_mins.value} min`,

    `${pds.response_time_in_mins.alarm_is_active}${pds.response_time_in_mins.value} min`,

    `${pds.patient_satisfaction_level.alarm_is_active}${pds.patient_satisfaction_level.value}`,

    "ir al perfil"
  );
});

const PdsTableList = () => {
  return (
    <div className={container}>
      <h2>Listado de PDS</h2>
      <TableContainer
        style={{
          height: "800px",
          overflowY: "scroll",
          borderRadius: "10px",
          WebkitBoxShadow: "0px 4px 40px #E1E5EC",
          boxShadow: "0px 4px 40px #E1E5EC",
        }}
      >
        <Table stickyHeader aria-label="collapsible table">
          <TableHead style={{ backgroundColor: "#ECECF3 !important" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nombre del PDS</TableCell>
              <TableCell align="left">Número de intervenciones</TableCell>
              <TableCell align="left">Duración de la intervención</TableCell>
              <TableCell align="left">
                Tiempo de respuesta a notificaciones
              </TableCell>
              <TableCell align="left">Tiempo de desplazamiento</TableCell>
              <TableCell align="left">
                Satisfacción del paciente (1-10)
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, key) => (
              <Row key={key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PdsTableList;
