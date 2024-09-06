import React from "react";
import styles from "./BlockInput.module.scss";

const BlockInput = ({ children, className = ""}) => {
    return <div className={`${styles.input_box} ${className}`}>
      <div className={`${styles.title_box} ${className}`}>
        <p className={`${styles.title}`}>{children}</p>
      </div>
      <input className={`${styles.block_input} ${className}`}></input>
    </div>
};

export default BlockInput;
