// import { StatusBar } from "expo-status-bar";
// r;
// import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import IntroFirst from "./components/IntroFirst";
import IntroLast from "./components/IntroLast";
import IntroSecond from "./components/IntroSecond";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
