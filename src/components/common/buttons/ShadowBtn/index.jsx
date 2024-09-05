import React from "react";
import styles from "./ShadowBtn.module.scss";

const ShadowBtn = ({ children }) => {
  return <button className={`${styles.shadow_btn}`}>{children}</button>;
};

export default ShadowBtn;
