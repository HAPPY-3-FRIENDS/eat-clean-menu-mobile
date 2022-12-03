//lib
import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import border from "../styles/border";
//image
import Pic from "../assets/LoginInformation_Person.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import LoginFace from "../assets/Login_Facebook.png";
import LoginGoogle from "../assets/Login_Google.png";

const LoginInformation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerLogin}>
          <Text style={[typo.textBold, colors.primaryColor]}>
            Xin chào bạn!
          </Text>
          <Text style={[typo.header, colors.extraColor]}>
            Hãy cập nhật thông tin cá nhân
          </Text>
        </View>
        <View style={styles.innerLogin}>
          <Image style={border.inforBorder} source={Pic} />
        </View>
      </View>
    </View>
  );
};

export default LoginInformation;
