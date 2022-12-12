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
  },

  mealStepButton: {
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000'
  },

  mealStepButtonActive: {
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#24B445',
  },

  mealStepLeftButton: {
    backgroundColor: 'rgba(36, 180, 69, 0.5)',
    width: '40%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  mealStepRightButton: {
    backgroundColor: '#24B445',
    width: '60%',
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
});
export default colors;
