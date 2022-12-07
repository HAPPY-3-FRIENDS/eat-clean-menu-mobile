//lib
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SmoothPicker from "react-native-smooth-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

//style
import styles from "../styles/style";
import typo from "../styles/typography";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import button from "../styles/button";
//image
import ButtonBack from "../assets/Button_back.png";
import ButtonNext from "../assets/Button_Setting_4.png";
import textInput from "../styles/textInput";


let STORAGE_KEY_H = '@height';

const array = Array.from({length: 100}, (_, i) => i + 100)
const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 20,
  1: 15,
  2: 10,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          backgroundColor: selected ? "#FFF" : "transparent",
          borderColor: selected ? "#24B445" : "transparent",
          width: vertical ? 190 : "auto",
        },
      ]}
    >
      <Text style={{ fontSize }}>{name} cm</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

const SettingHeight = () => {
  const [selected, setSelected] = useState(51);

  const navigation = useNavigation();
  function handleChange(index) {
    setSelected(index);
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_H, (selected+100).toString())
    } catch (e) {
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSetting}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={button.settingBackButton}
        >
          <Image source={ButtonBack} />
        </TouchableOpacity>
        <Text style={typo.subtitleLight}>
          <Text style={colors.primaryColor}>Chiều cao</Text> của bạn là?
        </Text>
        <Text style={[spacing.space_ver_3, textInput.settingText]}>
          Để có thể cho bạn lời khuyên tốt nhất, hãy cho chúng tôi biết chiều cao của
          bạn.
        </Text>
      </View>
      <View style={styles.innerSettingAge}>
        <View style={styles.wrapperVertical}>
          <SmoothPicker
            initialScrollToIndex={selected}
            onScrollToIndexFailed={() => {}}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            data={array}
            scrollAnimation
            onSelected={({ item, index }) => handleChange(index)}
            renderItem={(option) => ItemToRender(option, selected, true)}
            magnet
            selectOnPress
          />
        </View>
      </View>
      <View style={styles.bottomSetting}>
        <TouchableOpacity onPress={() => [navigation.navigate('SettingWeight'), saveData()]}>
          <Image source={ButtonNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingHeight;
