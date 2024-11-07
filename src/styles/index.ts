import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
export const commonstyles = StyleSheet.create({
  dotStyle: {
    backgroundColor: "#B1AFFF",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  ActivedotStyle: {
    backgroundColor: "#001f3f",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: responsiveWidth(88),
    height: responsiveHeight(6.5),
    paddingVertical: 10,
    color: "white",
  },
});
