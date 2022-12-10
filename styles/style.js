import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textWrap: {
    textAlign: "center",
    paddingBottom: "16%",
  },
  wrap: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inner: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bottom: {
    flex: 2,
    width: "88%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerLogin: {
    width: "80%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "column",
    zIndex: 999,
    marginLeft: "8%",
    marginTop: "16%",
  },
  innerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "8%",
  },
  bottomLogin: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "16%",
    paddingTop: "8%",
  },
  headerInfo: {
    width: "88%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "column",
    zIndex: 999,
    marginTop: "16%",
  },
  innerFirstInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "8%",
    // borderWidth: 4,
    // borderColor: '#24B445',
    // borderStyle: "solid",
  },
  innerFirstInforImg: {
    borderWidth: 4,
    borderColor: "#24B445",
    borderStyle: "solid",
    padding: 8,
    borderRadius: 100,
    zIndex: -1,
  },
  innerSecondInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "16%",
    paddingTop: "8%",
  },
  innerThirdInfor: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 24,
  },
  bottomInfor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headerSetting: {
    flex: 1,
    width: "88%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: 48,
  },
  innerSetting: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bottomSetting: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 24,
  },

  innerSettingAge: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  wrapperVertical: {
    width: 250,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    color: "black",
  },
  OptionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },

  headerAnalysis: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  innerAnalysis: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },

  headerAnalysisBMI: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    width: "100%",
  },
  innerAnalysisBMI: {
    flex: 3,
    backgroundColor: "rgba(246, 247, 247, 0.9)",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    borderColor: "#F6F7F7",
    borderWidth: 4,
    width: "100%",
    padding: "8%",
    borderRadius: 32,
  },

  headerPayment: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    width: "100%",
  },
  innerPayment: {
    flex: 3,
    backgroundColor: "rgba(36, 180, 69, 0.8)",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    width: "100%",
    padding: "8%",
    borderRadius: 32,
  },

  headerDailyMenu: {
    flex: 0.5,
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "88%",
    flexDirection: "row",
  },
  headerDailyMenuIcon: {
    flexDirection: "row",
  },
  innerDailyMenu: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
  innerSubDailyMenu: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: 8,
    borderTopColor: '#DEDEDE',
    borderBottomColor: '#DEDEDE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  innerSubDailyText: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: 8
  },

  innerSubDailyDish: {
    height: 200,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "88%",
    backgroundColor: '#FFF',
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    paddingLeft: 24,
    paddingBottom: 24,
    marginLeft: 12
  },

  innerSubDailyDishTextBorder: {
    borderBottomColor: 'rgba(0, 0, 0, 0.07)',
    borderBottomWidth: 1,
    paddingBottom: 8
  },

  innerSubDailyTextBorder: {
    borderBottomColor: '#FF6810',
    borderBottomWidth: 2,
    position: "absolute",
    zIndex: 999,
    width: 120,
    top: 20,
    left: 32
  },

  innerDailyMenuCalendar: {
    width: "100%",
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
  },
  
  bottomDailyMenuCalendar: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F9F9F9',
    width: '96%'
  },
});
export default styles;
