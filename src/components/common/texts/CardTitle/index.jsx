import React from "react";
import Text from "@/components/common/texts/Text";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ children }) => {
  return (
    <Text as="h1" size="large" className={styles.card_title}>
      {children}
    </Text>
  );
};

export default CardTitle;
