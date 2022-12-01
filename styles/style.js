import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#FCFCFC",
    alignItems: "center",
    justifyContent: "center",
  },
  dishWrap: {
    flex: 1,
    backgroundColor: "#F6F7F7",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textWrap: {
    textAlign: 'center',
    paddingBottom: '16%',
  },
  wrap: {
    flex: 1,
    width: '88%',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  inner: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  bottom: {
    flex: 2,
    width: '88%',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row'
  },
});
export default styles;