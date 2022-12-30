//lib
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import "moment/locale/vi";
import { LineChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { TextInput } from "react-native-gesture-handler";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";

//img
import Header from "../assets/Header_Analysis.png";
import BackBtn from "../assets/Button_back.png";
import Avatar from "../assets/LoginInformation_Person.png";
import Right from "../assets/Right.png";
import Close from "../assets/Close.png";

let STORAGE_KEY = "@weight";
let STORAGE_KEY_BMI = "@BMI";

const AnalysisHome = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [timeNow, setTimeNow] = useState(moment().format("LT"));
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
  const readBMI = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_BMI);
      console.log(value);

      if (value !== null) {
        setBMI(value);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  useEffect(() => {
    readWeight();
    readBMI();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysisHome}>
        <Image style={{ width: "100%" }} source={Header} />
        <View style={styles.subHeaderAnalysisHome}>
          <TouchableOpacity onPress={() => navigation.goBack(-1)}>
            <Image source={BackBtn} />
          </TouchableOpacity>
          <Text style={[colors.primaryColor, typo.textBold]}>Thống kê</Text>
        </View>
      </View>
      <View style={styles.innerAnalysisHome}>
        <View style={img.imgAnalysisHomeContainer}>
          <Image style={img.imgAnalysisHome} source={Avatar} />
        </View>
        <Text style={[typo.textBold, spacing.space_ver_3]}>
          Huỳnh Lê Thủy Tiên
        </Text>
      </View>
      <View style={styles.bottomAnalysisHome}>
        <View style={[spacing.spaceBottom_ver_2, spacing.space_ver_1]}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View style={[styles.bottomDateAnalysisHome]}>
              <TouchableOpacity>
                <Text style={[textInput.settingTextAnalysisHomeActive]}>
                  Ngày
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AnalysisWeek')}>
                <Text style={[textInput.settingTextAnalysisHome]}>Tuần</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("AnalysisMonth")}>
                <Text style={[textInput.settingTextAnalysisHome]}>Tháng</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[styles.bottomWeightAnalysisHome, spacing.space_ver_1]}
            >
              <Text style={typo.textBoldItalic}>Cân nặng mới nhất</Text>
              <View style={styles.innerAnalysisHomeWeightContainerBox}>
                <View style={styles.innerAnalysisHomeWeightContainer}>
                  <View style={[spacing.spaceLeft_ver_3, spacing.space_ver_3]}>
                    <Text style={typo.textItalic}>Cân nặng</Text>
                    <Text style={spacing.space_ver_3}>
                      <Text style={typo.headerLightItalic}>{weight} </Text>Kg
                    </Text>
                    <Text style={spacing.space_ver_2}>BMI {BMI}</Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        spacing.space_ver_3,
                        spacing.padRight_ver_2,
                        { textAlign: "right" },
                      ]}
                    >
                      {timeNow} <Image source={Right} />
                    </Text>
                    <LineChart
                      data={{
                        datasets: [
                          {
                            data: [53, 52, 52.5],
                            strokeWidth: 1,
                          },
                        ],
                      }}
                      width={Dimensions.get("window").width - 136}
                      height={100}
                      withVerticalLabels={false}
                      withHorizontalLabels={false}
                      withInnerLines={false}
                      withOuterLines={false}
                      withShadow={false}
                      chartConfig={{
                        backgroundColor: "#FFF",
                        backgroundGradientFrom: "#FFF",
                        backgroundGradientTo: "#FFF",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(160, 219, 253, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                      }}
                      style={{
                        borderRadius: 16,
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={button.InputNewWeight}
                >
                  <Text
                    style={[
                      typo.textBold,
                      colors.wColor,
                      textInput.settingText,
                    ]}
                  >
                    Nhập cân nặng mới
                  </Text>
                </TouchableOpacity>
                <Modal onBackdropPress={toggleModal} isVisible={isModalVisible}>
                  <View style={styles.modalAnalysisHomeContainer}>
                    <TouchableOpacity
                      style={{ alignItems: "flex-end" }}
                      onPress={toggleModal}
                    >
                      <Image source={Close} />
                    </TouchableOpacity>
                    <Text
                      style={[
                        typo.subtitle,
                        textInput.settingText,
                        spacing.space_ver_3,
                        spacing.spaceBottom_ver_3,
                      ]}
                    >
                      Cân nặng
                    </Text>
                    <Text
                      style={[
                        typo.subText,
                        textInput.settingText,
                        spacing.spaceBottom_ver_2,
                      ]}
                    >
                      Hãy cho chúng tôi biết cân nặng hiện tại của bạn
                    </Text>
                    <View style={styles.modalAnalysisHomeWeight}>
                      <TextInput
                        keyboardType="numeric"
                        maxLength={3}
                        onChangeText={setWeight}
                        value={weight}
                      />
                      <Text style={styles.modalAnalysisHomeWeightText}>kg</Text>
                    </View>
                    <TouchableOpacity style={button.updateInputNewWeight}>
                      <Text style={[colors.wColor, textInput.settingText]}>
                        Nhập
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>
            </View>
            <View style={[spacing.space_ver_1, spacing.spaceLeft_ver_2]}>
              <Text style={typo.textBoldItalic}>Số Calories hôm nay</Text>
            </View>
            <View style={styles.innerAnalysisHomeCaloriesContainerBox}>
              <PieChart
                data={[
                  {
                    name: "/ Sáng",
                    calories: 600,
                    color: "#658EFF",
                    legendFontColor: "#658EFF",
                    legendFontSize: 12,
                  },
                  {
                    name: "/ Trưa",
                    calories: 300,
                    color: "#FFCD26",
                    legendFontColor: "#FFCD26",
                    legendFontSize: 12,
                  },
                  {
                    name: "/ Chiều",
                    calories: 300,
                    color: "#FF8C39",
                    legendFontColor: "#FF8C39",
                    legendFontSize: 12,
                  },
                ]}
                width={Dimensions.get("window").width - 40}
                height={220}
                chartConfig={{
                  backgroundColor: "#FFF",
                  backgroundGradientFrom: "#FFF",
                  backgroundGradientTo: "#FFF",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                accessor="calories"
                paddingLeft='24'
                absolute //for the absolute number remove if you want percentage
              />
              <Text style={[typo.text, textInput.settingText, spacing.padBottom_ver_2]}><Text style={[typo.subtitle]}>~1,200</Text>  Calories</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AnalysisHome;
