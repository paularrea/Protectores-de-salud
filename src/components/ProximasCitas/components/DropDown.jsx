import React, { useState } from "react";
import styles from "./dropdown.module.scss";

const DropDown = () => {
  const [open, setOpen] = useState(true);

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex_container} onClick={openClose}>
        <div>
          <p>Hoy, martes 30 de marzo</p>
        </div>
        {open ? <div>-</div> : <div>+</div>}
      </div>
      {open && (
          <>
        <section>
          <div className={styles.time}>12:00 a.m.</div>
          <div className={styles.direction}>
            <div className={styles.flex_container_direction}>
              <div><h5>Juan García</h5></div>
              <div>></div>
            </div>
            <p>Calle Lalaá 23, 08083, Puerto Rico</p>
          </div>
        </section>
        <hr/>
         <section>
         <div className={styles.time}>12:00 a.m.</div>
         <div className={styles.direction}>
           <div className={styles.flex_container_direction}>
             <div><h5>Juan García</h5></div>
             <div>></div>
           </div>
           <p>Calle Lalaá 23, 08083, Puerto Rico</p>
         </div>
       </section>
       </>
      )}
    </div>
  );
};

export default DropDown;
