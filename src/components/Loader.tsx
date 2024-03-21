import { Center, Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Center mt={["200px"]}>
      <Spinner
        thickness="3px"
        speed="0.75s"
        emptyColor="gray.100"
        color="purple.500"
        size="xl"
      />
    </Center>
  );
};

export default Loader;
