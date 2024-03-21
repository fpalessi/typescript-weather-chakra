import { Button, Center, Flex, Icon, Input } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";
import Error from "./Error";

type NavbarProps = {
  fetchWeather: (city: string) => Promise<void>;
};
const Navbar = ({ fetchWeather }: NavbarProps) => {
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (city.trim().length === 0) {
      setError(true);
      return;
    }
    fetchWeather(city);
    setError(false);
  };

  return (
    <>
      <Flex
        p={"10px"}
        minH={"70px"}
        bg="purple.100"
        justifyContent={"center"}
        flexDirection={["column", "row"]}
        gap={["10px", "0px"]}
      >
        <Center>
          <Input
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCity(e.target.value);
            }}
            value={city}
            borderRadius={"15px 0px 0px 15px"}
            bg={"white"}
            _focus={{ border: "none" }}
            placeholder="Type your city..."
          />
        </Center>
        <Center>
          <Button
            bg="purple.400"
            _hover={{ bg: "purple.600" }}
            _active={{
              bg: "purple.800",
              transform: "scale(0.95)",
              borderColor: "purple.200",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(90, 238, 231, 0.75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            color={"white"}
            w={"100%"}
            borderRadius={"0px 15px 15px 0px"}
            rightIcon={<Icon mt={"2px"} h={"20px"} w={"20px"} />}
            onClick={handleSearchClick}
          >
            Check your weather & forecast
          </Button>
        </Center>
      </Flex>
      {error ? <Error>You must type a city.</Error> : null}
    </>
  );
};

export default Navbar;
