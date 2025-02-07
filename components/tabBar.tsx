import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton from './tabBarButton';
import { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setDimensions] = useState({height:20, width: 100});
  const buttonWidth = dimensions.width / state.routes.length;
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height : e.nativeEvent.layout.height,
      width : e.nativeEvent.layout.width,
    });
  };
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}]
    }
  });

  useEffect(() => {
    // Get the current active index
    const activeIndex = state.index;
    tabPositionX.value = withSpring(buttonWidth * activeIndex, { duration: 1500 });
  }, [state.index]);
  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
      <Animated.View style= {[animatedStyle,{
        position: 'absolute',
        backgroundColor: "#53783e",
        borderRadius: 30,
        marginHorizontal: 12,
        height: dimensions.height - 15,
        width: buttonWidth - 25
      }]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {duration: 1500})
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabBarButton 
            key = {route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused = {isFocused}
            routeName = {route.name}
            color = {isFocused ? '#fff' : 'black'}
            label = {label}
            />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar:{
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#fff",
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
});