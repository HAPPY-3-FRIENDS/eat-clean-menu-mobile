//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
import img from "../styles/img";
import textInput from "../styles/textInput";
//image
import Pic from "../assets/analysis.png";

const Analysis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerAnalysis}>
        {/* <Progress.Circle
          indeterminate={true}
          indeterminateAnimationDuration={1000}
          size={160}
          endAngle={0.9}
        /> */}
        <Image source={Pic} />
      </View>
      <View style={styles.innerAnalysis}>
        <Text style={[typo.subtitle, colors.primaryColor, spacing.space_ver_1]}>Phân tích chỉ số cơ thể</Text>
        <Text style={[typo.text, spacing.space_ver_3, textInput.settingText]}>
          Thiết lập kế hoạch dinh dưỡng của bạn và phân tích mục tiêu của bạn
          ...
        </Text>
      </View>
    </View>
  );
};

export default Analysis;
