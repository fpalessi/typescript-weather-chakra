import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import WhiteText from "./WhiteText";
import { formatTemperature } from "../utils";
import GoogleMap from "./GoogleMap";
import { Weather } from "../schemas";

type WeatherDetailProps = {
  currentWeather: Weather;
};
const WeatherDetail = ({ currentWeather }: WeatherDetailProps) => {
  const { name, main, weather, wind, visibility } = currentWeather;

  return (
    <Grid
      gridTemplateColumns={[
        "100%",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "30% 27.5% 38%",
      ]}
      gap={"30px"}
      style={{ marginTop: "2rem" }}
    >
      <Box
        overflow={"hidden"}
        shadow={"0px 0px 30px 6px #E2E2E2"}
        borderRadius={"10px"}
        h={"300px"}
      >
        <Box color="purple.400" p={"20px"} textAlign={"center"}>
          <Heading>{name}</Heading>
          <Heading fontSize={["100px", "120px", "120px", "100px", "120px"]}>
            {formatTemperature(main.temp)}
            <sup>o</sup>C
          </Heading>
          <Heading>{weather[0].main}</Heading>
        </Box>
      </Box>
      <Box
        overflow={"hidden"}
        shadow={"0px 0px 30px 6px #E2E2E2"}
        borderRadius={"10px"}
        h={"300px"}
      >
        <Grid templateColumns={"50% 50%"} h={"100%"} p={"8px"}>
          <Box py={"10px"} pl={"15%"}>
            {[
              "Felt Temp.",
              "Humidity",
              "Wind",
              "Visibility",
              "Max Temp.",
              "Min Temp.",
            ].map((e, i) => (
              <Text
                key={i}
                color="purple.400"
                fontWeight={500}
                mt={"15px"}
                fontSize={"18px"}
              >
                {e}
              </Text>
            ))}
          </Box>
          <Box borderRadius={"30px"} bg="purple.400" py={"10px"} pl={"15%"}>
            <WhiteText>
              {formatTemperature(main.feels_like)}
              <sup>o</sup> C
            </WhiteText>
            <WhiteText>{main.humidity}%</WhiteText>
            <WhiteText>{(wind.speed * 3.6).toFixed(2)} Km/h</WhiteText>
            <WhiteText>{(visibility * 0.001).toFixed(2)} Km</WhiteText>
            <WhiteText>
              {formatTemperature(main.temp_max)}
              <sup>o</sup> C
            </WhiteText>
            <WhiteText>
              {formatTemperature(main.temp_min)}
              <sup>o</sup> C
            </WhiteText>
          </Box>
        </Grid>
      </Box>{" "}
      <Box
        overflow={"hidden"}
        shadow={"0px 0px 30px 6px #E2E2E2"}
        borderRadius={"10px"}
        h={"300px"}
      >
        <GoogleMap city={name} />
      </Box>
    </Grid>
  );
};

export default WeatherDetail;
