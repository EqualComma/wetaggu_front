import React from "react";
import Text from "@/components/common/texts/Text";
import styles from "./ContainerTItle.module.scss";

const Title = ({ children, className = "" }) => {
  return (
    <Text as="h1" size="large" color="primary" className={className}>
      {children}
    </Text>
  );
};

export default Title;
