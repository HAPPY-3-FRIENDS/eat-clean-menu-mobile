//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
//image
import MaleIcon from "../assets/Gender_Male.png";
import FemaleIcon from "../assets/Gender_Female.png";
import ButtonNext from "../assets/Button_Setting_1.png";
import textInput from "../styles/textInput";

const SettingGender = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <Text style={typo.subtitleLight}>
          <Text style={colors.primaryColor}>Giới tính</Text> của bạn là gì?
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết giới
          tính của bạn.
        </Text>
      </View>
      <View style={styles.innerSetting}>
        <TouchableOpacity>
            <Image source={MaleIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={spacing.space_ver_1}>
            <Image source={FemaleIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSetting}>
      <TouchableOpacity onPress={() => navigation.navigate('SettingTarget')}>
            <Image source={ButtonNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingGender;
