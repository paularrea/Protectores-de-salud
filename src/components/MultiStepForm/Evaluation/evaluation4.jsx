import React, {useState}  from "react";
import TextField from '@material-ui/core/TextField';

const Evaluation4 = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
    id="outlined-multiline-flexible"
    multiline
    rowsMax={4}
    value={value}
    onChange={handleChange}
    variant="outlined"
  />
  );
};

export default Evaluation4;
