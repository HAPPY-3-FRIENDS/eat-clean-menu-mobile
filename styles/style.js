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
    width: '90%',
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
  headerLogin: {
    width: '80%',
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: 'column',
    zIndex: 999,
    marginLeft: '8%',
    marginTop: '16%'
  },
  innerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    marginTop: '8%'
  },
  bottomLogin: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    marginTop: '16%',
    paddingTop: '8%',
  },
  headerInfo: {
    width: '88%',
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: 'column',
    zIndex: 999,
    marginTop: '16%'
  },
  innerFirstInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    marginTop: '8%',
    // borderWidth: 4,
    // borderColor: '#24B445',
    // borderStyle: "solid",
  },
  innerFirstInforImg: {
    borderWidth: 4,
    borderColor: '#24B445',
    borderStyle: "solid",
    padding: 8,
    borderRadius: 100,
    zIndex: -1
  },
  innerSecondInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    marginTop: '16%',
    paddingTop: '8%',
  },
  innerThirdInfor: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: 'column',
    marginTop: 24
  },
  bottomInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
});
export default styles;