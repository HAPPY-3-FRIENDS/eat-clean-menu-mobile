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

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import img from "../styles/img";
//image
import Noti from "../assets/Noti_icon.png";
import Ava from "../assets/LoginInformation_Person.png";
import Statistic from "../assets/Statistic_icon.png";

const DailyMenu = () => {
  //   const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerDailyMenu}>
        <TouchableOpacity>
          <Image style={img.imgDailyAva} source={Ava} />
        </TouchableOpacity>
        <Text style={[typo.textBold, colors.primaryColor]}>
          Thực đơn mỗi ngày
        </Text>
        <View style={styles.headerDailyMenuIcon}>
          <TouchableOpacity>
            <Image style={spacing.spaceRight_ver_3} source={Statistic} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Noti} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innerDailyMenu}>
        <CalendarStrip
          calendarAnimation={{ type: "sequence", duration: 30 }}
          scrollable
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "#24B445",
          }}
          style={styles.innerDailyMenuCalendar}
          calendarHeaderStyle={{ color: "#000" }}
          calendarColor={"#FFF"}
          dateNumberStyle={{ color: "#000" }}
          dateNameStyle={{ color: "#000" }}
          highlightDateNumberStyle={{ color: '#24B445' }}
          highlightDateNameStyle={{ color: '#24B445' }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
        />
      </View>

      <View style={styles.bottomDailyMenuCalendar}></View>
    </View>
  );
};

export default DailyMenu;
