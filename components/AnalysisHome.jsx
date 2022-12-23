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

const AnalysisHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysisHome}>
        <Image style={{ width: "100%" }} source={Header} />
        <View style={styles.subHeaderAnalysisHome}>
          <TouchableOpacity onPress={() => navigation.goBack(-1)}>
            <Image source={BackBtn} />
          </TouchableOpacity>
          <Text style={[colors.primaryColor, typo.textBold]}>THỐNG KÊ</Text>
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
        <View style={[styles.bottomDateAnalysisHome, spacing.space_ver_1]}>
          <TouchableOpacity>
            <Text style={[textInput.settingTextAnalysisHomeActive]}>Ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[textInput.settingTextAnalysisHome]}>Tuần</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[textInput.settingTextAnalysisHome]}>Tháng</Text>
          </TouchableOpacity>
        </View>
        <View style={[spacing.space_ver_2, spacing.spaceLeft_ver_1]}>
          <Text style={typo.textBoldItalic}>Cân nặng mới nhất</Text>
        </View>
        <View>
          <Text>Số Calories hôm nay</Text>
        </View>
      </View>
    </View>
  );
};

export default AnalysisHome;
