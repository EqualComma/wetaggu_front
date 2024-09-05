import React from "react";
import styles from "./Text.module.scss";

const Text = ({ children, as: Component = "p", className = "", size = "medium", color = "default" }) => {
  return <Component className={`${styles[size]} ${styles[color]} ${className}`}>{children}</Component>;
};

export default Text;
