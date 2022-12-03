//lib
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
import textInput from "../styles/textInput";
import button from "../styles/button";
//image
import Pic from "../assets/LoginInformation_Person.png";
import LoginFace from "../assets/Login_Facebook.png";
import LoginGoogle from "../assets/Login_Google.png";
import Icon from "../assets/Login_Infor_icon.png";
import IconEdit from "../assets/Login_Infor_EditIcon.png";

const LoginInformation = () => {
  const navigation = useNavigation();

  const [text, onChangeText] = useState("Huỳnh Lê Thủy Tiên");
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerInfo}>
          <Text style={[typo.textBold, colors.primaryColor]}>
            Xin chào bạn!
          </Text>
          <Text style={[typo.header, colors.extraColor]}>
            Hãy cập nhật thông tin cá nhân
          </Text>
        </View>
        <View style={styles.innerFirstInfor}>
          <TouchableOpacity>
            <Image style={img.imgInforEditIcon} source={IconEdit} />
          </TouchableOpacity>
          <View style={styles.innerFirstInforImg}>
            <Image style={[img.imgInfor]} source={Pic} />
          </View>
          <Text style={[typo.subText, spacing.space_ver_2]}>
            Cập nhật ảnh đại điện
          </Text>
        </View>
        <View style={styles.innerThirdInfor}>
          <Text style={[typo.textBold, colors.primaryColor]}>Tên hiển thị</Text>
          <View style={textInput.inforTextInput}>
            <Image style={img.imgInforIcon} source={Icon} />
            <TextInput onChangeText={onChangeText} value={text} />
          </View>
        </View>
        <View style={styles.bottomInfor}>
          <TouchableOpacity style={button.inforButton}>
            <Text style={colors.wColor}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginInformation;
