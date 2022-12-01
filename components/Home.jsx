//lib
import { View, Text, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
//style
import styles from "../styles/style"
import typo from "../styles/typography"
import colors from "../styles/colors"
import spacing from "../styles/spacing"
//image
import Icon from "../assets/ECM_icon.png"
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('IntroFirst')
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Icon} />
      <Text style={[colors.primaryColor, typo.header, spacing.space_ver_1]}>ECM - Eat Clean Menu</Text>
      <Text style={[spacing.space_ver_2, typo.text]}>Thực đơn khỏe, sức khỏe vàng</Text>
    </View>
  )
}

export default Home