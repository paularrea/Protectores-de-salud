import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const pdsList = ["Pau Larrea", "Andrea Vega", "David Campos"];

const SelectPds = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
      <InputLabel id="demo-simple-select-outlined-label">
        Selecciona un PDS
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label="Selecciona un PDS"
      >
        {pdsList.map((pds, key) => (
          <MenuItem key={key} value={pds}>
            {pds}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPds;
