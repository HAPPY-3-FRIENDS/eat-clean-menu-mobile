//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
//image
import ButtonBack from "../assets/Button_back.png";
import ButtonNext from "../assets/Button_Setting_6.png";
import textInput from "../styles/textInput";

const SettingPractice = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={button.settingBackButton}>
          <Image source={ButtonBack} />
        </TouchableOpacity>
        <Text style={typo.subtitleLight}>
          <Text style={colors.primaryColor}>Mức độ vận động</Text> của bạn
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết mức độ vận động
          của bạn.
        </Text>
      </View>
      <View style={styles.innerSetting}>
        <TouchableOpacity style={[button.settingButton, spacing.spaceBottom_ver_3]}>
          <Text style={typo.text}>Không tập luyện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[button.settingButton, spacing.spaceBottom_ver_3]}>
          <Text style={typo.text}>Ít tập luyện (1-3 ngày/ tuần)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[button.settingButton, spacing.spaceBottom_ver_3]}>
          <Text style={typo.text}>Luyện tập vừa (3-5 ngày/tuần)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[button.settingButton, spacing.spaceBottom_ver_3]}>
          <Text style={typo.text}>Luyện tập nhiều (5-7 ngày/tuần)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[button.settingButton, spacing.spaceBottom_ver_3]}>
          <Text style={typo.text}>Luyện tập cường độ cao</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSetting}>
        <TouchableOpacity onPress={() => navigation.navigate('Analysis')}>
          <Image source={ButtonNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingPractice;
