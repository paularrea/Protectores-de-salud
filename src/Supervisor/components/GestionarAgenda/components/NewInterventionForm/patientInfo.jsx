import React from "react";
import userIcon from "../../../../../img/User.png";
import phoneIcon from "../../../../../img/supervisor/phonev2.png";
import locationIcon from "../../../../../img/supervisor/locationv2.png";
import styles from "../SuggestionTable/dropdown-form.module.scss";

const PatientInfo = ({ data, selected }) => {
  console.log(data, selected, "data");
  return (
    <section>
      <div className={styles.flex_child}>
        <img className={styles.user_logo} src={userIcon} alt="" />
        <p>PDS: Andrea Vega</p>
      </div>
      <div className={styles.info_section}>
        <div className={styles.flex_child}>
          <img className={styles.info_logo} src={phoneIcon} alt="" />
          <p>(1) 593218009</p>
        </div>
        <div className={styles.flex_child}>
          <img className={styles.info_logo} src={locationIcon} alt="" />
          <p>7920 East Depot Court San Lorenzo, Puerto Rico, United States</p>
        </div>
        <div className={styles.flex_child}>
          <a style={{margin:0, marginTop:'2rem'}} className={styles.blue_button} href={`tel:593218009`}>
            Llamar al paciente
          </a>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
