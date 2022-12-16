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

const MealStep = () => {
  const navigation = useNavigation();

  console.log(moment());
  return (
    <View style={[styles.container, { backgroundColor: "#F9F9F9" }]}>
      <View style={styles.headerMeal}>
        <TouchableOpacity
          onPress={() => navigation.goBack(-1)}
          style={{ width: "32%" }}
        >
          <Image source={BackBtn} />
        </TouchableOpacity>
        <Text style={[typo.subtitleLight, colors.primaryColor]}>Hướng dẫn</Text>
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
          Bước 1
        </Text>
        <View style={styles.innerBottomMealStepContainer}>
          <TouchableOpacity
            style={[button.mealStepButtonActive, spacing.spaceRight_ver_1]}
          >
            <Text>01</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[button.mealStepButton, spacing.spaceRight_ver_1]}
          >
            <Text>02</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[button.mealStepButton, spacing.spaceRight_ver_1]}
          >
            <Text>03</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button.mealStepButton}>
            <Text>04</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerBottomMealContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Luộc trứng gà trong 10 phút. Sau khi trứng gà đã chín thì lấy ra,
              thái thành những lát mỏng. Tiếp theo, luộc thịt gà. Đến khi thịt
              gà chín thì lấy ra thái thành lát mỏng.
            </Text>
          </ScrollView>
          <View style={styles.innerBottomMealButton}>
            <TouchableOpacity style={[button.mealStepLeftButton, spacing.spaceRight_ver_2]}>
              <Text style={[typo.textBold, colors.wColor]}>Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button.mealStepRightButton}>
              <Text style={[typo.textBold, colors.wColor]}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealStep;
