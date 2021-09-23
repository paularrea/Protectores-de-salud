import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import patientChartList from "./patientChartList";
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
  user_name,
  num_of_visits,
  num_of_calls,
  num_of_days_since_last_intervention,
  riesgo_clinico,
  riesgo_por_entorno,
  patient_satisfaction_level
) {
  return {
    general_alarm_is_active,
    user_name,
    num_of_visits,
    num_of_calls,
    num_of_days_since_last_intervention,
    riesgo_clinico,
    riesgo_por_entorno,
    patient_satisfaction_level,
  };
}

function Row(props) {
  const { row } = props;
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
        <TableCell align="left">{row.user_name}</TableCell>
        <TableCell align="left">
          {row.num_of_calls.charAt(0) === '1' ? (
            <span className={red_text}>{row.num_of_calls.substring(1)}</span>
          ) : (
            <span className={normal_text}>
              {row.num_of_calls.substring(1)} <span>llamadas</span>
            </span>
          )}
          <br />
          {row.num_of_visits.charAt(0) === '1' ? (
            <span className={red_text}>{row.num_of_visits.substring(1)}</span>
          ) : (
            <span className={normal_text}>
              {row.num_of_visits.substring(1)} <span>visitas</span>
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.num_of_days_since_last_intervention.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.num_of_days_since_last_intervention.substring(1)}
            </span>
          ) : (
            <span className={normal_text}>
              {row.num_of_days_since_last_intervention.substring(1)}
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.riesgo_clinico.charAt(0) === '1' ? (
            <span className={red_text}>{row.riesgo_clinico.substring(1)}</span>
          ) : (
            <span className={normal_text}>
              {row.riesgo_clinico.substring(1)}
            </span>
          )}
        </TableCell>

        <TableCell align="left">
          {row.riesgo_por_entorno.charAt(0) === '1' ? (
            <span className={red_text}>
              {row.riesgo_por_entorno.substring(1)}
            </span>
          ) : (
            <span className={normal_text}>
              {row.riesgo_por_entorno.substring(1)}
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
          <p style={{ color: "#0057FF" }}>Abrir</p>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = patientChartList.map((pds) => {
  return createData(
    `${pds.general_alarm_is_active}`,

    `${pds.user_name}`,

    `${pds.num_of_visits.alarm_is_active}${pds.num_of_visits.value}`,
    `${pds.num_of_calls.alarm_is_active}${pds.num_of_calls.value}`,

    `${pds.num_of_days_since_last_intervention.alarm_is_active}${pds.num_of_days_since_last_intervention.value} días`,

    `${pds.riesgo_clinico.alarm_is_active}${pds.riesgo_clinico.value}`,

    `${pds.riesgo_por_entorno.alarm_is_active}${pds.riesgo_por_entorno.value}`,

    `${pds.patient_satisfaction_level.alarm_is_active}${pds.patient_satisfaction_level.value}`
  );
});

const PatientTableList = () => {
  return (
    <div className={container}>
      <h2>Listado de Pacientes</h2>
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
              <TableCell>Nombre del paciente</TableCell>
              <TableCell align="left">Número de intervenciones</TableCell>
              <TableCell align="left">
                Número de días desde <br /> la última intervención
              </TableCell>
              <TableCell align="left">
                Riesgo clínico <br /> (1-5)
              </TableCell>
              <TableCell align="left">
                Riesgo por entorno <br /> (1-5)
              </TableCell>
              <TableCell align="left">
                Satisfacción del <br /> paciente (1-10)
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

export default PatientTableList;
