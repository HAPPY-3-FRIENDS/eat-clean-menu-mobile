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
import Premium from "../assets/Premium.png";
import InforAnalysis from "../assets/InforAnalysis.png";
import InforChange from "../assets/InforChange.png";
import InforEdit from "../assets/InforEdit.png";
import InforHelp from "../assets/InforHelp.png";
import InforInformation from "../assets/InforInformation.png";
import InforInsurance from "../assets/InforInsurance.png";
import InforNoti from "../assets/InforNoti.png";
import InforSetting from "../assets/InforSetting.png";

const HomeInformation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: "#F9F9F9" }]}>
      <View style={styles.headerHomeInformation}>
        <Image style={{ width: "100%" }} source={Header} />
        <View style={styles.subHeaderHomeInformation}>
          <TouchableOpacity onPress={() => navigation.goBack(-1)}>
            <Image source={BackBtn} />
          </TouchableOpacity>
          <Text style={[colors.primaryColor, typo.textBold]}>Trang cá nhân</Text>
        </View>
      </View>
      <View style={[styles.innerHomeInformation]}>
        <View style={img.imgAnalysisHomeContainer}>
          <Image style={img.imgAnalysisHome} source={Avatar} />
        </View>
        <Text style={[typo.subtitle, spacing.space_ver_3]}>
          Huỳnh Lê Thủy Tiên
        </Text>
        <Text style={[typo.text]}>21 tuổi - 159cm - 53kg</Text>
      </View>
      <View style={styles.bottomHomeInformation}>
        <View style={[spacing.spaceBottom_ver_2]}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <Text
              style={[
                spacing.spaceBottom_ver_3,
                typo.subTextBold,
                colors.oColor,
              ]}
            >
              Kế hoạch của bạn
            </Text>
            <View style={styles.bottomHomeInformationPlan}>
              <View style={{ width: "16%" }}>
                <Image source={Premium} />
              </View>
              <View style={{ width: "84%" }}>
                <Text
                  style={[colors.wColor, typo.textBold, { paddingBottom: 4 }]}
                >
                  3-ngày dùng thử miễn phí
                </Text>
                <Text style={[colors.wColor, typo.subText]}>
                  Hủy bất kỳ lúc nào và tự động bị tính phí sau khi hết thời hạn
                  dùng thử
                </Text>
              </View>
            </View>
            <Text
              style={[
                spacing.space_ver_2,
                spacing.spaceBottom_ver_3,
                typo.subTextBold,
                colors.oColor,
              ]}
            >
              Thông tin cá nhân
            </Text>
            <View style={styles.bottomHomeInformationSettingsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('EditInformation')} style={[styles.bottomHomeInformationSettings, spacing.spaceBottom_ver_3]}>
                <Image style={spacing.spaceRight_ver_2} source={InforEdit} />
                <Text>Chỉnh sửa thông tin cá nhân</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={[styles.bottomHomeInformationSettings, spacing.spaceBottom_ver_3]}>
                <Image style={spacing.spaceRight_ver_2} source={InforNoti} />
                <Text>Thông báo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bottomHomeInformationSettings]}>
                <Image style={spacing.spaceRight_ver_2} source={InforSetting} />
                <Text>Cài đặt ứng dụng</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                spacing.space_ver_2,
                spacing.spaceBottom_ver_3,
                typo.subTextBold,
                colors.oColor,
              ]}
            >
              Hồ sơ sức khỏe
            </Text>
            <View style={styles.bottomHomeInformationSettingsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('AnalysisHome')} style={[styles.bottomHomeInformationSettings, spacing.spaceBottom_ver_3]}>
                <Image style={spacing.spaceRight_ver_2} source={InforAnalysis} />
                <Text>Đồ thị và báo cáo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bottomHomeInformationSettings]}>
                <Image style={spacing.spaceRight_ver_2} source={InforChange} />
                <Text>Thay đổi mục tiêu sức khỏe</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                spacing.space_ver_2,
                spacing.spaceBottom_ver_3,
                typo.subTextBold,
                colors.oColor,
              ]}
            >
              Khác
            </Text>
            <View style={styles.bottomHomeInformationSettingsContainer}>
              <TouchableOpacity style={[styles.bottomHomeInformationSettings, spacing.spaceBottom_ver_3]}>
                <Image style={spacing.spaceRight_ver_2} source={InforHelp} />
                <Text>Trợ giúp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bottomHomeInformationSettings, spacing.spaceBottom_ver_3]}>
                <Image style={spacing.spaceRight_ver_2} source={InforInformation} />
                <Text>Thông tin ứng dụng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bottomHomeInformationSettings]}>
                <Image style={spacing.spaceRight_ver_2} source={InforInsurance} />
                <Text>Thông tin bảo mật</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={button.HomeInformationButton} onPress={() => navigation.navigate('Login')}>
              <Text style={[typo.textBold, textInput.settingText]}>Đăng xuất</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeInformation;
