import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const patientList = ["Lucas Calvo", "Paloma López", "Andrés Giménez"];

const SelectPatient = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl variant="outlined" style={{ marginBottom: "1rem" }}>
      <InputLabel id="demo-simple-select-outlined-label">
        Selecciona un Paciente
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label="Selecciona un Paciente"
      >
        {patientList.map((pds, key) => (
          <MenuItem key={key} value={pds}>
            {pds}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPatient;
