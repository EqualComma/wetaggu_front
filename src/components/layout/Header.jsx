import React from "react";
import styles from "./header.module.scss";
import ShadowBtn from "@/components/common/buttons/ShadowBtn";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>wetaggu</p>
      <ShadowBtn>메뉴</ShadowBtn>
    </div>
  );
};

export default Header;
