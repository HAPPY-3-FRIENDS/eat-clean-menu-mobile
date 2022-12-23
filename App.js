// import { StatusBar } from "expo-status-bar";
// r;
// import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import IntroFirst from "./components/IntroFirst";
import IntroLast from "./components/IntroLast";
import IntroSecond from "./components/IntroSecond";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import LoginInformation from "./components/LoginInformation";
import SettingGender from "./components/SettingGender";
import SettingTarget from "./components/SettingTarget";
import SettingAge from "./components/SettingAge";
import SettingHeight from "./components/SettingHeight";
import SettingWeight from "./components/SettingWeight";
import SettingPractice from "./components/SettingPractice";
import Analysis from "./components/Analysis";
import AnalysisBMI from "./components/AnalysisBMI";
import Payment from "./components/Payment";
import DailyMenu from "./components/DailyMenu";
import Meal from "./components/Meal";
import MealStep from "./components/MealStep";
import Notification from "./components/Notification";
import NotificationTips from "./components/NotificationTips";
import Tips from "./components/Tips";
import AnalysisHome from "./components/AnalysisHome";
import HomeInformation from "./components/HomeInformation";
import EditInformation from "./components/EditInformation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroFirst"
          component={IntroFirst}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroSecond"
          component={IntroSecond}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="IntroLast"
          component={IntroLast}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="LoginInformation"
          component={LoginInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingGender"
          component={SettingGender}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingTarget"
          component={SettingTarget}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingAge"
          component={SettingAge}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingHeight"
          component={SettingHeight}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingWeight"
          component={SettingWeight}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="SettingPractice"
          component={SettingPractice}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisBMI"
          component={AnalysisBMI}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="DailyMenu"
          component={DailyMenu}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Meal"
          component={Meal}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="MealStep"
          component={MealStep}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="NotificationTips"
          component={NotificationTips}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="AnalysisHome"
          component={AnalysisHome}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="HomeInformation"
          component={HomeInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
        <Stack.Screen
          name="EditInformation"
          component={EditInformation}
          options={{ title: '' }}
          screenOptions={{
            fullScreenGestureEnabled:true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
