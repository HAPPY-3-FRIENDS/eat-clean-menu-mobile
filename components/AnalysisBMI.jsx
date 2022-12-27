//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";
//image
import Pic from "../assets/Analysis.png";
import Line from "../assets/Analysis_line.png";

let STORAGE_KEY = "@weight";
let STORAGE_KEY_H = "@height";
let STORAGE_KEY_A = "@age";
let STORAGE_KEY_G = "@gender";
let STORAGE_KEY_BMI = '@BMI';

const AnalysisBMI = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const BMI = weight / (((height / 100) * height) / 100);

  //Đối với nam giới: BMR = 66 + (13,7 x trọng lượng) + (5 x chiều cao) – (6,8 x tuổi).
  const BMRMale =
    Math.round((66 + 13.7 * weight + 5 * height - 6.8 * age) * 100) / 100;

  //Đối với phụ nữ: BMR = 655 + (9,6 x trọng lượng) + (1,8 x chiều cao) – (4,7 x tuổi).
  const BMRFemale =
    Math.round((655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 100) / 100;

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_BMI, (Math.round(BMI * 100) / 100).toString());
    } catch (e) {}
  };

  const readWeight = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      console.log(value);

      if (value !== null) {
        setWeight(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };
  const readHeight = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_H);
      console.log(value);

      if (value !== null) {
        setHeight(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readAge = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_A);
      console.log("age" + value);
      if (value !== null) {
        setAge(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const readGender = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_G);
      console.log(value);

      if (value !== null) {
        setGender(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  useEffect(() => {
    readWeight();
    readHeight();
    readAge();
    readGender();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysisBMI}>
        <Image source={Pic} />
      </View>
      <View style={styles.innerAnalysisBMI}>
        <TouchableOpacity>
          <Image source={Line} />
        </TouchableOpacity>
        <Text style={[typo.subtitle, spacing.space_ver_1]}>
          Phân tích chỉ số cơ thể
        </Text>
        <View style={[textInput.settingTextAnalysisGroup, spacing.space_ver_1]}>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              Cân nặng
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {weight} kg
            </Text>
          </View>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              Chiều cao
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {height} cm
            </Text>
          </View>
        </View>
        <View style={[textInput.settingTextAnalysisGroup, spacing.space_ver_2]}>
          <View style={textInput.settingTextAnalysis}>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              BMI
            </Text>
            <Text style={[typo.text, textInput.settingText, colors.wColor]}>
              {Math.round(BMI * 100) / 100}
            </Text>
          </View>
        </View>
        <View
          style={[textInput.settingTextAnalysisBMRGroup, spacing.space_ver_2]}
        >
          <Text
            style={[spacing.space_ver_2, spacing.spaceBottom_ver_3, typo.text]}
          >
            Lượng calo cần nạp vào cơ thể
          </Text>
          <View style={textInput.settingTextAnalysisGroup}>
            <View style={textInput.settingTextAnalysis}>
              <Text style={[typo.text, textInput.settingText, colors.wColor]}>
                BMR
              </Text>
              <Text style={[typo.text, textInput.settingText, colors.wColor]}>
                {gender === "Nam" ? BMRMale : BMRFemale}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Payment"), saveData()]}
          style={button.settingAnalysisButton}
        >
          <Text style={[typo.textBold, textInput.settingText, colors.wColor]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnalysisBMI;
