import React from "react";
import styles from "./aside.module.css";

const Aside = (props) => {
  return (
    <aside>
      <ul className={styles.aside_wrap}>
        <li className={styles.aside_menus}>
          <i className="fas fa-user-alt"></i>
          My
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-grin-squint"></i>
          구독
        </li>
        <li className={styles.aside_menus}>
          <i className="fas fa-box-open"></i>
          보관함  
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-clock"></i>
          시청 기록
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-sun"></i>
          설정
        </li>
      </ul>
    </aside>
  );
};

export default Aside;