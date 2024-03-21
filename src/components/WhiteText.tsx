import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const WhiteText = ({ children }: { children: ReactNode }) => {
  return (
    <Text color={"white"} fontWeight={500} mt={"15px"} fontSize={"18px"}>
      {children}
    </Text>
  );
};
export default WhiteText;
