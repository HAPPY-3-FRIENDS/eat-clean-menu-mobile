import { StyleSheet } from "react-native";
const colors = StyleSheet.create({
  nextButton: {
    backgroundColor: '#F6F7F7',
    borderRadius: 25,
    textTransform: "lowercase",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  inforButton: {
    backgroundColor: '#24B445',
    width: '100%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginTop: 32
  },
  settingButton: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 24,
    borderRadius: 12,
  },
  settingBackButton: {
    position: "absolute",
    top: '8%',
    left: 0
  },
  settingAnalysisButton: {
    backgroundColor: '#276047',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 120
  },
  settingPaymentButton: {
    backgroundColor: '#276047',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 24
  },
  settingPaymentButtonInactive: {
    backgroundColor: 'rgba(39, 96, 71, 0.3)',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    marginTop: 24
  }
});
export default colors;
