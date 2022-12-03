//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import buttons from "../styles/button";
//image
import Icon from "../assets/ECM_icon.png";
import Pic from "../assets/ECM_pic_1.png";
import Btn from "../assets/Button_Intro_1.png";
import { useNavigation } from "@react-navigation/native";

const IntroFirst = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View>
          <Image source={Icon} />
        </View>
        <TouchableOpacity style={buttons.nextButton}>
          <Text>Bỏ qua</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inner}>
        <Image source={Pic} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.dishWrap}>
          <Text style={typo.subtitle}>Thực đơn mỗi ngày</Text>
          <Text style={[typo.text, spacing.space_ver_3, styles.textWrap]}>
            Thực đơn xuất phát từ những nguyên liệu thuần Việt, giúp bạn không
            còn lo lắng về mỗi bữa ăn
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("IntroSecond")}>
            <Image source={Btn} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroFirst;
