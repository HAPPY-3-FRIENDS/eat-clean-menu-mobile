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
import AsyncStorage from "@react-native-async-storage/async-storage";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import textInput from "../styles/textInput";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
//image
import Noti from "../assets/Noti_icon.png";
import Ava from "../assets/LoginInformation_Person.png";
import Statistic from "../assets/Statistic_icon.png";
import Dish1 from "../assets/Dish_1.png";

let STORAGE_KEY_CALORIES = "@calo";
const DailyMenu = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(moment().format());
  const [dateNow, setDateNow] = useState(
    moment().format("[ngày] Do MMMM, YYYY")
  );

  const [dateSend, setDateSend] = useState(
    moment().format("YYYY-MM-DD")
  );

  console.log(dateSend)

  const readCalo = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_CALORIES);
      console.log(value);
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  useEffect(() => {
    readCalo();
  }, []);
  console.log(moment());
  return (
    <View style={styles.container}>
      <View style={styles.headerDailyMenu}>
        <TouchableOpacity style={spacing.spaceLeft_ver_3} onPress={() => navigation.navigate('HomeInformation')}>
          <Image style={img.imgDailyAva} source={Ava} />
        </TouchableOpacity>
        <Text style={[typo.subtitle, colors.primaryColor]}>
          Thực đơn mỗi ngày
        </Text>
        <View style={styles.headerDailyMenuIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('AnalysisHome')}>
            <Image style={spacing.spaceRight_ver_2} source={Statistic} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={Noti} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innerDailyMenu}>
        <CalendarStrip
          calendarAnimation={{ type: "sequence", duration: 30 }}
          scrollable
          daySelectionAnimation={{
            type: "background",
            duration: 200,
            highlightColor: "#F8F8F8",
          }}
          style={styles.innerDailyMenuCalendar}
          dateNumberStyle={{
            color: "#000",
            borderWidth: 1,
            width: 24,
            borderRadius: 100,
            borderColor: "#F3F3F3",
            fontWeight: "500",
            fontSize: 12,
          }}
          dateNameStyle={{
            color: "#000",
            fontSize: 12,
            fontWeight: "500",
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 4,
          }}
          highlightDateNumberStyle={{ color: "#FF6810", fontSize: 12 }}
          highlightDateNameStyle={{
            color: "#FF6810",
            fontSize: 14,
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 4,
          }}
          disabledDateNameStyle={{ color: "grey" }}
          selectedDate={selectedDate}
          disabledDateNumberStyle={{ color: "grey" }}
          showMonth={false}
          iconLeft={{ display: "none" }}
          iconRight={{ display: "none" }}
        />
      </View>
      <View style={styles.innerSubDailyMenu}>
        <TouchableOpacity>
          <Text style={[typo.subText, colors.gColor]}>{"<"} Hôm qua</Text>
        </TouchableOpacity>
        <View>
          <Text style={typo.subTextBold}><Text style={colors.oColor}>Hôm nay, </Text>{dateNow}</Text>
          <Text style={styles.innerSubDailyTextBorder}></Text>
        </View>
        <TouchableOpacity>
          <Text style={[typo.subText, colors.gColor]}>Ngày mai {">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomDailyMenuCalendar}>
        <View style={styles.innerSubDailyText}>
          <Text
            style={[textInput.settingText, colors.primaryColor, typo.textBold, spacing.space_ver_2]}
          >
            Thủy Tiên,
          </Text>
          <Text style={[typo.subText, spacing.space_ver_3]}>
            Hôm nay là một ngày đẹp để làm những bữa ăn tuyệt vời
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Meal')} style={[styles.innerSubDailyDish, spacing.space_ver_2]}>
            <Image style={img.imgDish} source={Dish1} />
            <View>
              <Text
                style={[
                  typo.subtitleLight,
                  styles.innerSubDailyDishTextBorder,
                  spacing.spaceBottom_ver_2,
                ]}
              >
                Bữa sáng
              </Text>
              <Text style={[typo.textItalic, spacing.spaceBottom_ver_2]}>
                Salad gà bơ bánh mì
              </Text>
              <Text style={[typo.textBold, spacing.spaceBottom_ver_2]}>
                395 Kcal
              </Text>
              <Progress.Bar progress={1} color="rgba(36, 180, 69, 0.1)" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Meal')} style={styles.innerSubDailyDish}>
            <Image style={img.imgDish} source={Dish1} />
            <View>
              <Text
                style={[
                  typo.subtitleLight,
                  styles.innerSubDailyDishTextBorder,
                  spacing.spaceBottom_ver_2,
                ]}
              >
                Bữa trưa
              </Text>
              <Text style={[typo.textItalic, spacing.spaceBottom_ver_2]}>
                Salad gà bơ bánh mì
              </Text>
              <Text style={[typo.textBold, spacing.spaceBottom_ver_2]}>
                395 Kcal
              </Text>
              <Progress.Bar progress={1} color="rgba(36, 180, 69, 0.1)" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Meal')} style={styles.innerSubDailyDish}>
            <Image style={img.imgDish} source={Dish1} />
            <View>
              <Text
                style={[
                  typo.subtitleLight,
                  styles.innerSubDailyDishTextBorder,
                  spacing.spaceBottom_ver_2,
                ]}
              >
                Bữa tối
              </Text>
              <Text style={[typo.textItalic, spacing.spaceBottom_ver_2]}>
                Salad gà bơ bánh mì
              </Text>
              <Text style={[typo.textBold, spacing.spaceBottom_ver_2]}>
                395 Kcal
              </Text>
              <Progress.Bar progress={1} color="rgba(36, 180, 69, 0.1)" />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default DailyMenu;
