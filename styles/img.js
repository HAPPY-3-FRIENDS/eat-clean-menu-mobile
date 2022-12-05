import { StyleSheet } from "react-native";
const img = StyleSheet.create({
  imgInfor: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imgInforIcon: {
    marginLeft: 8,
    marginRight: 16,
  },
  imgInforEditIcon: {
    position: "absolute",
    zIndex: 999,
    left: '8%',
  },
  // imgInforAnalysisIcon: {
  //   position: "absolute",
  //   zIndex: 999,
  //   left: 25,
  //   top: 25
  // },
});
export default img;
