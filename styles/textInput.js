import { StyleSheet } from "react-native";
const textInput = StyleSheet.create({
  inforTextInput: {
    borderWidth: 1,
    borderStyle: "solid",
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderColor: '#E2E2E2',
    marginTop: 8,
    flexDirection: "row",
  },
  settingText: {
    textAlign: "center",
  },
  settingTextAnalysisGroup: {
    flexDirection: "column",
    backgroundColor: '#24B445',
    width: '100%',
    padding: 16,
    borderRadius: 8
  },
  settingTextAnalysis: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  settingTextAnalysisBMRGroup: {
    flexDirection: "column",
    width: '100%',
    borderRadius: 8
  },
});
export default textInput;
