import React from "react";
import Select from "react-select";
import { useField } from "usetheform";

export default function ReactSelect({
  name,
  options,
}) {
  // const [showSubQuestion, setShowSubQuestion] = useState(false);
  const { value, setValue } = useField({ type: "custom", name });

  const onChange = (value) => {
    setValue(value);
    // setShowSubQuestion(value);
  };

  return (
    <>
      <Select options={options} onChange={onChange} value={value} />
    </>
  );
}
