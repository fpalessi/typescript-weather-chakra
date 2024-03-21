import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { ReactNode } from "react";

const Error = ({ children }: { children: ReactNode }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
};

export default Error;
