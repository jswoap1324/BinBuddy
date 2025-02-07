import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import { TabBar } from "../../components/tabBar";

export default function TabsLayout() {
  return(
    <Tabs
        tabBar={props => <TabBar{...props}/>}
        // screenOptions={{
        //     tabBarActiveTintColor: "#53783e",
        // }}
    >
      <Tabs.Screen 
        name = "index"
        options = {{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused, color}) => 
          <Ionicons 
          name ={ focused ? "home" : "home-outline"}
          color = {color} 
          size = {24} />
        }} />
        <Tabs.Screen 
        name = "scan"
        options = {{
            title: "Scan",
            headerShown: false,
            tabBarIcon: ({color, focused}) => <Ionicons 
            name = {focused ? "scan" : "scan-outline"}
            color = {color} 
            size = {24} />
        }} />
      <Tabs.Screen 
        name = "about"
        options = {{
            title: "About",
            headerShown: false,
            tabBarIcon: ({color, focused}) => <Ionicons 
            name = {focused ? "information-circle" : "information-circle-outline"}
            color = {color} 
            size = {24} />
        }} />
    </Tabs>
  );
}

