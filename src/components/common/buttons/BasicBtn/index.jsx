import React from "react";
import styles from "./BasicBtn.module.scss";

const BasicBtn = ({ children, className = "", size = "medium", color = "default" , onClick}) => {
  return <button className={`${styles.basic_btn} ${styles[size]} ${styles[color]} ${className}`} onClick={onClick}>{children}</button>;
};

export default BasicBtn;
