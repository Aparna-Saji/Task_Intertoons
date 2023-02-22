import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Cart } from "./features/cart";
import { Category } from "./features/category";
import { DetailedListing, Home } from "./features/home";
import { Profile } from "./features/profile";
import { Search } from "./features/search";



const BottomStack=createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <BottomStack.Navigator 
        screenOptions={() => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: '#fff', height: 70, borderTopWidth: 0,},
            tabBarItemStyle:{ color:'black',marginBottom:10 },
            tabBarIconStyle:{top:5}
        })}
        >
            <BottomStack.Screen name="Home" component={Home}  options={{
                //tabBarShowLabel: false,
                tabBarActiveTintColor: "#320257",
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused }) => focused ? <Icon name='home' size={32} color='#320257' /> : <Icon name='home' size={32} color='#D5DBDF' />

            }} />
            <BottomStack.Screen name="Category" component={Category} options={{
                //tabBarShowLabel: false,
                tabBarActiveTintColor: "#320257",
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused }) => focused ? <Icon name='dashboard' size={32} color='#320257' /> : <Icon name='dashboard' size={32} color='#D5DBDF' />

            }} />
            <BottomStack.Screen name="Cart" component={Cart} options={{
                //tabBarShowLabel: false,
                tabBarActiveTintColor: "#320257",
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused }) => focused ? <Icon name='shopping-cart' size={32} color='#320257' /> : <Icon name='shopping-cart' size={32} color='#D5DBDF' />

            }} />
            <BottomStack.Screen name="Search" component={Search} options={{
                //tabBarShowLabel: false,
                tabBarActiveTintColor: "#320257",
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused }) => focused ? <Icon name='search' size={32} color='#320257' /> : <Icon name='search' size={32} color='#D5DBDF' />

            }} />
            <BottomStack.Screen name="Profile" component={Profile} options={{
                //tabBarShowLabel: false,
                tabBarActiveTintColor: "#320257",
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused }) => focused ? <Icon name='person' size={32} color='#320257' /> : <Icon name='person' size={32} color='#D5DBDF' />

            }} />
        </BottomStack.Navigator>
    )
}


const AppStack=createNativeStackNavigator();

const AppStackNavigator=()=>{
    return(
        <AppStack.Navigator initialRouteName="BottomTabNavigator" screenOptions={{headerShown:false}}>
            <AppStack.Screen name="DetailedListing" component={DetailedListing} />
            <AppStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator;