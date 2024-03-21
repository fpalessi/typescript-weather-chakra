import { Forecast } from "../schemas";
import { Box, Grid, Icon, Text } from "@chakra-ui/react";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";

type ForecastDetailProps = {
  forecastWeather: Forecast;
};

const ForecastDetail = ({ forecastWeather }: ForecastDetailProps) => {
  return (
    <Grid
      mt={"40px"}
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
        "repeat(8, 1fr)",
      ]}
      gap={"20px"}
    >
      {forecastWeather.daily.map((forecast, index) => (
        <div key={index}>
          <Box
            textAlign={"center"}
            overflow={"hidden"}
            borderRadius={"10px"}
            shadow={"0px 0px 30px 6px #E2E2E2"}
            h={"200px"}
          >
            <Box cursor={"pointer"} mt={"5px"}>
              <Box p={"5px"} bg={"purple.400"}>
                <Text color={"white"} fontWeight={500} fontSize={"18px"}>
                  Date: {new Date(forecast.dt * 1000).toLocaleDateString()}
                </Text>
              </Box>
              <Text color={"purple.400"} fontWeight={500} fontSize={"27px"}>
                <Icon as={ImSun} /> {Math.round(forecast.temp.day)}
                <sup>o</sup> C
              </Text>
              <Text color={"purple.400"} fontWeight={500} fontSize={"27px"}>
                <Icon as={MdOutlineNightsStay} />{" "}
                {Math.round(forecast.temp.night)}
                <sup>o</sup> C
              </Text>
              <Text color={"purple.400"} fontWeight={500} fontSize={"20px"}>
                {forecast.weather[0].main}
              </Text>
            </Box>
          </Box>
        </div>
      ))}
    </Grid>
  );
};

export default ForecastDetail;
