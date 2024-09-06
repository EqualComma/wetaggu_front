import React from "react";
import styles from "./ShadowBtn.module.scss";

const ShadowBtn = ({ children, className = "", size = "", color = "default" , onClick }) => {
  return <button className={`${styles.shadow_btn} ${styles[size]} ${styles[color]} ${className}`} onClick={onClick}>{children}</button>;
};


export default ShadowBtn;
