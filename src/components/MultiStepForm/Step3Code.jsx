import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import RadioQuestion from "./Cuestionario/radioQuestion";
import TextFieldQuestion from "./Cuestionario/TextFieldQuestion";
import CheckBoxQuestion from "./Cuestionario/checkBoxQuestion";
import SelectQuestion from "./Cuestionario/selectQuestion";

function Step3({ prevPage, ...props }) {
  if (props.step !== 3) {
    return null;
  }
  const questionaryData = props.questionaryData && props.questionaryData;
  console.log(questionaryData, "questionari");

  const cuestionario = questionaryData.map((question) => {
    const isRadio =
      question.response_style === "CHECK_BOXES" &&
      question.response_type === "UNIQUE";
    const isCheckbox =
      question.response_style === "CHECK_BOXES" &&
      question.response_type === "MULTI";
    const isTextField =
      question.response_style === "EDITABLE" &&
      question.response_type === "EDITABLE";
    const isSelect =
      question.response_style === "DROPDOWN_MENU" &&
      question.response_type === "UNIQUE";
    if (isRadio) {
      return <RadioQuestion questionaryData={questionaryData} />;
    } else if (isTextField) {
      return <TextFieldQuestion questionaryData={questionaryData} />;
    } else if (isCheckbox) {
      return <CheckBoxQuestion questionaryData={questionaryData} />;
    } else if (isSelect) {
      return <SelectQuestion questionaryData={questionaryData} />;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.step}</p>
        <h2>Cuestionario</h2>
      </div>
      <Form name="Step3" {...props}>
        <div className={styles.content}>
          {cuestionario}
          {/* <SelectQuestion questionaryData={questionaryData} />
          <CheckBoxQuestion questionaryData={questionaryData} />
          <RadioQuestion questionaryData={questionaryData} />
          <TextFieldQuestion questionaryData={questionaryData} /> */}
        </div>
      </Form>
    </div>
  );
}

export default Step3;
