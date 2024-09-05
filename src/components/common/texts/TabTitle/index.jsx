import React from "react";
import Text from "@/components/common/texts/Text";
import styles from "./TabTitle.module.scss";

const TabTitle = ({ children }) => {
  return (
    <Text size="tab_title" className={styles.tab_title}>
      {children}
    </Text>
  );
};

export default TabTitle;
