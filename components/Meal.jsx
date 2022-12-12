//lib
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import "moment/locale/vi";
import * as Progress from "react-native-progress";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import textInput from "../styles/textInput";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
import button from "../styles/button";
//image
import BackBtn from "../assets/Button_back.png";
import Dish1 from "../assets/Dish_1.png";
import Line from "../assets/Meal_Line.png";

const Meal = () => {
  const navigation = useNavigation();

  console.log(moment());
  return (
    <View style={[styles.container, { backgroundColor: "#F9F9F9" }]}>
      <View style={styles.headerMeal}>
        <TouchableOpacity onPress={() => navigation.goBack(-1)} style={{width: '32%'}}>
          <Image source={BackBtn} />
        </TouchableOpacity>
        <Text style={[typo.subtitleLight, colors.primaryColor]}>Bữa sáng</Text>
      </View>
      <View style={styles.innerMeal}>
        <Image style={img.imgMeal} source={Dish1} />
      </View>
      <View style={styles.bottomMeal}>
        <Text
          style={[
            typo.subtitleItalic,
            spacing.space_ver_2,
            spacing.spaceBottom_ver_2,
          ]}
        >
          Salad gà bơ bánh mì
        </Text>
        <Image source={Line} />
        <View style={styles.innerBottomMealContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={[
                typo.textBoldItalic,
                spacing.spaceBottom_ver_3,
              ]}
            >
              Thành phần
            </Text>
            <View style={styles.innerBottomMeal}>
              <View style={{ width: "40%" }}>
                <Text style={spacing.spaceBottom_ver_3}>Bơ tươi</Text>
                <Text style={spacing.spaceBottom_ver_3}>Salad</Text>
                <Text style={spacing.spaceBottom_ver_3}>Trứng gà</Text>
                <Text style={spacing.spaceBottom_ver_3}>Thịt gà</Text>
                <Text style={spacing.spaceBottom_ver_3}>Bánh mì đen</Text>
                <Text style={spacing.spaceBottom_ver_3}>Cà chua bi</Text>
              </View>
              <View style={{ width: "40%", alignItems: "flex-end" }}>
                <Text style={spacing.spaceBottom_ver_3}>½ trái</Text>
                <Text style={spacing.spaceBottom_ver_3}>50g</Text>
                <Text style={spacing.spaceBottom_ver_3}>1 quả</Text>
                <Text style={spacing.spaceBottom_ver_3}>50g</Text>
                <Text style={spacing.spaceBottom_ver_3}>2 lát</Text>
                <Text style={spacing.spaceBottom_ver_3}>5 quả</Text>
              </View>
            </View>
            <Text
              style={[
                typo.textBoldItalic,
                spacing.space_ver_2,
                spacing.spaceBottom_ver_3,
              ]}
            >
              Gia vị
            </Text>
            <View>
              <Text style={spacing.spaceBottom_ver_3}>Chanh tươi</Text>
              <Text style={spacing.spaceBottom_ver_3}>
                Sốt Kewpie phô mai cay
              </Text>
              <Text style={spacing.spaceBottom_ver_3}>Mù tạt vàng</Text>
            </View>
          </ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('MealStep')} style={button.inforButton}>
            <Text style={[typo.textBold, colors.wColor]}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Meal;
