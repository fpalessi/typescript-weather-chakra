import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const DetailContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box maxW={"1200px"} m={"0 auto"} p={"20px"} minH={"550px"}>
      {children}
    </Box>
  );
};

export default DetailContainer;
