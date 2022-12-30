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
import Pic from "../assets/Login_pic.png";
import LoginFace from "../assets/Login_Facebook.png";
import LoginGoogle from "../assets/Login_Google.png";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerLogin}>
          <Text style={[typo.textBold, colors.primaryColor]}>Bạn đã sẵn sàng?</Text>
          <Text style={[typo.header, colors.extraColor]}>Hãy tạo tài khoản của bạn</Text>
        </View>
        <View style={styles.innerLogin}>
          <Image source={Pic} />
        </View>
        <View style={styles.bottomLogin}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginInformation')}>
            <Image source={LoginGoogle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
