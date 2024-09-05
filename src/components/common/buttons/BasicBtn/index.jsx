import React from "react";
import styles from "./BasicBtn.module.scss";

const BasicBtn = ({ children, className = "", size = "medium", color = "default" }) => {
  return <button className={`${styles.basic_btn} ${styles[size]} ${styles[color]} ${className}`}>{children}</button>;
};

export default BasicBtn;
