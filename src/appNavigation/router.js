import React from 'react'
import { View, Text, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
import StoreScreen from '../screens/Store';
import ScoreScreen from '../screens/Score';
import UserScreen from '../screens/User';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Store"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Order') {
              iconName = focused
                ? 'cafe'
                : 'cafe-outline';
            } else if (route.name === 'Store') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
            } else if (route.name === 'Score') {
              iconName = focused
                ? 'ios-gift'
                : 'ios-gift-outline';
            } else if (route.name === 'User') {
              iconName = focused
                ? 'ios-menu'
                : 'ios-menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
        <Tab.Screen name="Order" component={OrderScreen} options={{ title: "Đặt hàng" }} />
        <Tab.Screen name="Store" component={StoreScreen} options={{ tabBarBadge: 3, title: "Cửa hàng" }} />
        <Tab.Screen name="Score" component={ScoreScreen} options={{ title: "Tích điểm" }} />
        <Tab.Screen name="User" component={UserScreen} options={{ title: "Khác" }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}